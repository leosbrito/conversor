import os
import polars as pl
import os.path as path
import datasus_dbc
from dbfread import DBF
 
def converter_dbc2dbf(diretorioDBC, diretorioDBF="dbf", arquivo_dbc=""):
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
 
def arquivoDBF_maisrecente(diretorio):
    arquivos = os.listdir(diretorio)
    if arquivos:
        arquivos_dbf = [arquivo for arquivo in arquivos if arquivo.endswith('.dbf')]
        if arquivos_dbf:
            arquivos_dbf.sort(key=lambda x: os.path.getmtime(os.path.join(diretorio, x)), reverse=True)
            return arquivos_dbf[0]
    return None
 
def converter_dbf2parquet(arquivoDBF, diretorioParquet="parquet", row_group=5000):
    try:
        print("----------------------------------------------------------")
        print("Convertendo arquivo DBF para PARQUET...")
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
        print(f"Erro ao converter o arquivo DBF {arquivoDBF} para Parquet: {e}")

def converter_parquet2csv(ultimo_arquivo_dbf, diretorioParquet="parquet", diretorioCSV="csv"):
    try:
        print("----------------------------------------------------------")
        print("Convertendo arquivo PARQUET para CSV...")
        print("Montando caminho do arquivo PARQUET...")
        nmparquet = os.path.splitext(os.path.basename(ultimo_arquivo_dbf))[0]
        nome_parquet = nmparquet + ".parquet"
        arquivoparquet = os.path.join(diretorioParquet, nome_parquet)
        print(f"Lendo arquivo PARQUET para criar arquivo CSV: {arquivoparquet} ...")
        df = pl.read_parquet(arquivoparquet)
        print("Montando caminho do arquivo CSV...")
        nmcsv = os.path.splitext(os.path.basename(ultimo_arquivo_dbf))[0]
        nome_csv = nmcsv + ".csv"
        print(f"Criando um caminho completo do CSV de nome: {nome_csv}...")
        caminho_CSV = os.path.join(diretorioCSV, nome_csv)
        df.write_csv(caminho_CSV)
        print(f"Arquivo CSV criado: '{caminho_CSV}'")
    except Exception as e:
        print(f"Erro ao converter o arquivo PARQUET '{arquivoparquet}' para CSV! {e}")