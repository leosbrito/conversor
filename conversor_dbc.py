import os
import polars as pl
import os.path as path
import datasus_dbc
from dbfread import DBF
 
def converter_dbc2dbf(arquivo_dbc="", diretorioDBC="dbc", diretorioDBF="dbf"):
    try:
        if (diretorioDBC != "" or arquivo_dbc !=""):
            os.makedirs(diretorioDBF, exist_ok=True)  # Cria o diretório DBF caso não exista
            print("----------------------------------------------------------")
            print("Convertendo arquivo DBC para DBF...")
            if (arquivo_dbc != ""):
                print(f"Convertendo arquivo DBC: {arquivo_dbc}...")
                dbc_file = os.path.join(diretorioDBC, arquivo_dbc)
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
        print(f"Erro ao converter o arquivo DBC para DBF")
 
def converter_dbf2parquet(arquivoDBF="", diretorioDBF="dbf", diretorioParquet="parquet", row_group=5000):
    try:
        if (diretorioDBF != "" or arquivoDBF !=""):
            print("##########################################################")
            print("Convertendo arquivo DBF para PARQUET...")
            if (arquivoDBF != ""):
                try:
                    print("----------------------------------------------------------")
                    print(f"Convertendo arquivo específico {arquivoDBF}...")
                    print(f"Lendo arquivo DBF: {arquivoDBF} ...")
                    dbf_file = DBF(arquivoDBF, encoding="Latin1")
                    print("Criando DataFrame do arquivo DBF... (Pode demorar mais do que o esperado)")
                    df = pl.DataFrame(iter(dbf_file))
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
                    print(f"Erro ao converter o arquivo ({arquivoDBF})! Erro: {e}")
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
                            df_file = DBF(dbf_file, encoding="iso-8859-1", ignore_missing_memofile=True) # DBF(dbf_file, encoding="Latin1")
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

def converter_parquet2csv(arquivoParquet="", diretorioParquet="parquet", diretorioCSV="csv"):
    try:
        if (diretorioParquet != "" or arquivoParquet !=""):
            print("##########################################################")
            print("Convertendo arquivo PARQUET para CSV...")
            if (arquivoParquet != ""):
                try:
                    print("----------------------------------------------------------")
                    print("Montando caminho do arquivo PARQUET...")
                    nmparquet = os.path.splitext(os.path.basename(arquivoParquet))[0]
                    nome_parquet = nmparquet + ".parquet"
                    file_parquet = os.path.join(diretorioParquet, nome_parquet)
                    print(f"Lendo arquivo PARQUET para criar arquivo CSV: {file_parquet} ...")
                    df = pl.read_parquet(file_parquet)
                    print("Montando caminho do arquivo CSV...")
                    nmcsv = os.path.splitext(os.path.basename(arquivoParquet))[0]
                    nome_csv = nmcsv + ".csv"
                    print(f"Criando um caminho completo do CSV de nome: {nome_csv}...")
                    os.makedirs(diretorioCSV, exist_ok=True)  # Cria o diretório CSV caso não exista
                    caminho_CSV = os.path.join(diretorioCSV, nome_csv)
                    df.write_csv(caminho_CSV)
                    print(f"Arquivo CSV criado: '{caminho_CSV}'")
                except Exception as e:
                    print(f"Erro ao converter o arquivo {arquivoParquet}")
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