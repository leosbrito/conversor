import os
import polars as pl
import os.path as path
import datasus_dbc
from dbfread import DBF, FieldParser
import ftplib
import itertools
from typing import Iterable
import logging
import urllib.request as request

class MyFieldParser(FieldParser):
    def parseD(self, field, data):
        """Parse char field and return unicode string"""
        return self.decode_text(data.rstrip(b'\0 '))

def converter_dbc2dbf(diretorioDBC="dados/dbc", diretorioDBF="dados/dbf", arquivo_dbc=[]):
    """Converte arquivo DBC para arquivo DBF"""
    try:
        if (diretorioDBC != "" or len(arquivo_dbc) > 0):
            os.makedirs(diretorioDBF, exist_ok=True)  # Cria o diretório DBF caso não exista
            print("----------------------------------------------------------")
            print("Convertendo arquivo DBC para DBF...")
            if len(arquivo_dbc) > 0:
                for arq_dbc in arquivo_dbc:
                    print(f"Convertendo arquivo DBC: {arq_dbc}...")
                    dbc_file = os.path.join(diretorioDBC, arq_dbc)
                    filename = path.basename(dbc_file).split(".")[0]
                    dbf_file = f"{diretorioDBF}/{filename}.dbf"
                    datasus_dbc.decompress(dbc_file, dbf_file)
                    print(f"Arquivo DBF criado: {dbf_file}...")
            else:
                for arquivodbc in os.listdir(diretorioDBC):
                    if arquivodbc.endswith(".dbc"):
                        print(f"Convertendo arquivo DBC: {arquivodbc}...")
                        dbc_file = os.path.join(diretorioDBC, arquivodbc)
                        filename = path.basename(dbc_file).split(".")[0]
                        dbf_file = f"{diretorioDBF}/{filename}.dbf"
                        datasus_dbc.decompress(dbc_file, dbf_file)
                        print(f"Arquivo DBF criado: {dbf_file}...")
                    else:
                        print(f"Não existe arquivo DBC no diretório: {diretorioDBC}")
        else:
            print("O diretório ou o arquivo DBC deve ser passado no argumento!")
    except Exception as e:
        print(f"Erro ao converter o arquivo DBC para DBF: {e}")
 
def converter_dbf2parquet(diretorioDBF="dados/dbf", diretorioParquet="dados/parquet", row_group=5000, arquivoDBF=[]):
    """Converte arquivo DBF para arquivo PARQUET"""
    try:
        if (diretorioDBF != "" or arquivoDBF !=""):
            print("##########################################################")
            print("Convertendo arquivo DBF para PARQUET...")
            if len(arquivoDBF) > 0:
                for arq_dbf in arquivoDBF:
                    try:
                        print("----------------------------------------------------------")
                        print(f"Convertendo arquivo específico {arq_dbf}...")
                        print(f"Lendo arquivo DBF: {arq_dbf} ...")
                        dbf_file = DBF(arq_dbf, encoding="Latin1", ignore_missing_memofile=True,parserclass=MyFieldParser)
                        print("Criando DataFrame do arquivo DBF...")
                        try:
                            dadosit = iter(dbf_file)
                        except ValueError:
                            dadosit = dbf_file.replace(b'**', b'0')
                        df = pl.DataFrame(dadosit)
                        print("Dividindo o nome do arquivo especificado em 'arq_dbf' em suas partes componentes e armazenando o nome do arquivo sem a extensão em uma variável chamada 'nmparquet'...")
                        nmparquet = os.path.splitext(os.path.basename(arq_dbf))[0]
                        nome_parquet = nmparquet + ".parquet"
                        print(f"Criando um caminho completo do parquet de nome: {nome_parquet}...")
                        os.makedirs(diretorioParquet, exist_ok=True)  # Cria o diretório PARQUET caso não exista
                        caminho_parquet = os.path.join(diretorioParquet, nome_parquet)
                        print("Convertendo as colunas para o tipo String (str) ...")
                        df = df.cast(pl.String)
                        print("Gravando o DataFrame em Parquet por bloco...")
                        df.write_parquet(caminho_parquet, row_group_size=row_group)
                        print(f"Arquivo PARQUET criado: {nome_parquet}")
                    except Exception as e:
                        print(f"Erro ao converter o arquivo ({arq_dbf})! Erro: {e}")
            else:
                print(f"Convertendo arquivos DBF do diretório {diretorioDBF}...")
                for arquivoDBF in os.listdir(diretorioDBF):
                    if arquivoDBF.endswith(".dbf"):
                        try:
                            print("----------------------------------------------------------")
                            print(f"Convertendo arquivo DBF: {arquivoDBF} ...")
                            arquivoDBF = os.path.join(diretorioDBF, arquivoDBF)
                            filename = path.basename(arquivoDBF).split(".")[0]
                            dbf_file = f"{diretorioDBF}/{filename}.dbf"
                            print(f"Lendo arquivo DBF: {dbf_file} ...")
                            df_file = DBF(dbf_file, encoding="Latin1", ignore_missing_memofile=True, parserclass=MyFieldParser)
                            print("Criando DataFrame do arquivo DBF... (Pode demorar mais do que o esperado)")
                            df = pl.DataFrame(iter(df_file))
                            print("Dividindo o nome do arquivo especificado em 'arquivoDBF' em suas partes componentes e armazenando o nome do arquivo sem a extensão em uma variável chamada 'nmparquet'...")
                            nmparquet = os.path.splitext(os.path.basename(arquivoDBF))[0]
                            nome_parquet = nmparquet + ".parquet"
                            print(f"Criando um caminho completo do parquet de nome: {nome_parquet}...")
                            os.makedirs(diretorioParquet, exist_ok=True)  # Cria o diretório PARQUET caso não exista
                            caminho_parquet = os.path.join(diretorioParquet, nome_parquet)
                            print("Convertendo as colunas para o tipo String (str) ...")
                            df = df.cast(pl.String)
                            print("Gravando o DataFrame em Parquet por bloco...")
                            df.write_parquet(caminho_parquet, row_group_size=row_group)
                            print(f"Arquivo PARQUET criado: {nome_parquet}")
                        except Exception as e:
                            print(f"Erro ao converter o arquivo ({dbf_file})! Erro: {e}")
        else:
            print("O diretório ou o arquivo PARQUET deve ser passado no argumento da função converter_dbf2parquet()!")
    except Exception as e:
        print(f"Erro ao converter o arquivo DBF {arquivoDBF} para Parquet: {e}")

def converter_parquet2csv(diretorioParquet="dados/parquet", diretorioCSV="dados/csv", arquivoParquet=[]):
    """Converte arquivo PARQUET para arquivo CSV"""
    try:
        if (diretorioParquet != "" or arquivoParquet !=""):
            print("##########################################################")
            print("Convertendo arquivo PARQUET para CSV...")
            if len(arquivoParquet) > 0:
                for arq_parquet in arquivoParquet:
                    try:
                        print("----------------------------------------------------------")
                        print("Montando caminho do arquivo PARQUET...")
                        nmparquet = os.path.splitext(os.path.basename(arq_parquet))[0]
                        nome_parquet = nmparquet + ".parquet"
                        print(f"Lendo arquivo PARQUET para criar arquivo CSV: {arq_parquet} ...")
                        df = pl.read_parquet(arq_parquet)
                        print("Montando caminho do arquivo CSV...")
                        nmcsv = os.path.splitext(os.path.basename(arq_parquet))[0]
                        nome_csv = nmcsv + ".csv"
                        print(f"Criando um caminho completo do CSV de nome: {nome_csv}...")
                        os.makedirs(diretorioCSV, exist_ok=True)  # Cria o diretório CSV caso não exista
                        caminho_CSV = os.path.join(diretorioCSV, nome_csv)
                        df.write_csv(caminho_CSV)
                        print(f"Arquivo CSV criado: '{caminho_CSV}'")
                    except Exception as e:
                        print(f"Erro ao converter o arquivo {arq_parquet}")
            else:
                print(f"Convertendo arquivos PARQUET do diretório {diretorioParquet}...")
                for arqParquet in os.listdir(diretorioParquet):
                    if arqParquet.endswith(".parquet"):
                        try:
                            print("----------------------------------------------------------")
                            print(f"Convertendo arquivo PARQUET: {arqParquet} ...")
                            nmparquet = os.path.splitext(os.path.basename(arqParquet))[0]
                            nome_parquet = nmparquet + ".parquet"
                            file_parquet = os.path.join(diretorioParquet, nome_parquet)
                            print(f"Lendo arquivo PARQUET para criar arquivo CSV: {file_parquet} ...")
                            df = pl.read_parquet(file_parquet)
                            print("Montando caminho do arquivo CSV...")
                            nmcsv = os.path.splitext(os.path.basename(arqParquet))[0]
                            nome_csv = nmcsv + ".csv"
                            print(f"Criando um caminho completo do CSV de nome: {nome_csv}...")
                            os.makedirs(diretorioCSV, exist_ok=True)  # Cria o diretório CSV caso não exista
                            caminho_CSV = os.path.join(diretorioCSV, nome_csv)
                            df.write_csv(caminho_CSV)
                            print(f"Arquivo CSV criado: '{caminho_CSV}'")
                        except Exception as e:
                            print(f"Erro ao converter o arquivo {arqParquet}")
    except Exception as e:
        print(f"Erro ao converter o arquivo PARQUET para CSV! {e}")

# Funções para FTP
def format_year(year, digits=2):
    """Formata uma string ano com dois dígitos"""
    if isinstance(year, str) and not year.isnumeric():
        return "*"
    year = str(year).zfill(digits)
    return year[-digits:]

def format_month(month):
    """Formata um número do mês com dois dígitos"""
    if isinstance(month, str) and not month.isnumeric():
        return "*"
    return str(month).zfill(2)

def importarFTP(pastaFTP, years=["*"], states=["*"], months=["*"], tp_arquivos=["*"]):
    """Importa arquivos do FTP do DATASUS"""
    errors: list[tuple[str, Exception]] = []
    try:
        import_from_ftp(
            [
                f"{pastaFTP}/{tp_arquivo.upper()}/{tp_arquivo.upper()}{state.upper()}{format_year(year)}{format_month(month)}.dbc*"
                for year in years
                for state in states
                for month in months
                for tp_arquivo in tp_arquivos
            ]
        )
    except Exception as e:
        return errors.append(f"Erro ao importar do FTP: {e}")
    
    if len(errors) == 0:
        return logging.info(f"✅  Cópia realizada com sucesso!") #: {target_tables}")
    else:
        logging.error(
            f"⚠️  {len(errors)} erros encontrados:",
        )
        for e in errors:
            return logging.error(f"❌  {e}")

def flatten(list_of_lists):
    return itertools.chain.from_iterable(list_of_lists)

def try_nlst(pattern: str, ftp: ftplib.FTP):
    print(f"pattern: {pattern}")
    files = ftp.nlst(pattern)
    if len(files) == 0:
        return print(f"⚠️  Não encontrou o arquivo: {pattern}") #logging.error(f"⚠️  Não encontrou o arquivo: {pattern}") #logging.warn(f"⚠️  Não encontrou o arquivo: {pattern}")
    # ftp.quit()
    return files

def get_matching_files(host: str, patterns: Iterable[str]):
    # print(f"host: {host}")
    ftp = ftplib.FTP(host)
    ftp.login()
    return set(flatten((try_nlst(pattern, ftp) for pattern in patterns)))

def rm(file: str):
    if os.path.exists(file):
        os.remove(file)

def copiar_arquivos(ftp_path: str):
    print(f"ftp_path: {ftp_path}")
    # exit()
    response = request.urlopen(ftp_path)
    dbc_raw = response.read()
    
    filename = path.basename(ftp_path).split(".")[0]
    dbc_file = f"dados/dbc/{filename}.dbc"

    os.makedirs(path.dirname(dbc_file), exist_ok=True)
    with open(
        dbc_file,
        "wb",
    ) as f:
        f.write(dbc_raw)

def import_from_ftp(
    ftp_globs: Iterable[str],
    ftp_host="ftp.datasus.gov.br"
):
    print(f"ftp_globs: {ftp_globs}")
    files = get_matching_files(ftp_host, ftp_globs)
    print(f"files: {files}")
    new_filepaths = [f"ftp://{ftp_host}{file}" for file in files]
    print(f"new_filepaths: {new_filepaths}")
    total_files = len(new_filepaths)
    print(f"total_files: {total_files}")

    arquivos_importados = 0
    errors: list[tuple[str, Exception]] = []
    
    for new_file in new_filepaths:
        # print(f"new_file: {new_file}")
        try:
            # Importar dados buscados
            msg = f"📂 [{arquivos_importados + 1}/{total_files}] Importando dados do arquivo {new_file}"
            logging.info(msg)
            # filename = path.basename(new_file)
            copiar_arquivos(new_file)
            
        except Exception as e:
            logging.info(msg)

    if len(errors) == 0:
        return f"✅ Cópias realizadas com sucesso!" #logging.info(f"✅ Cópias realizadas com sucesso!") #: {target_tables}")
    else:
        # logging.error(
        #     f"⚠️  {len(errors)} erros de {total_files} arquivos copiados:",
        # )
        for e in errors:
            return f"Erro:  {e}" #logging.error(f"    ❌  {e}")