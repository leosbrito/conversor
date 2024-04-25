import os
import polars as pl
import os.path as path
import datasus_dbc
from dbfread import DBF
 
diretorioDBC = "C:\\leosbrito\\projetos\\testev\\convertedbf\\dbc"
diretorioDBF = "C:\\leosbrito\\projetos\\testev\\convertedbf\\dbf"
diretorioParquet = "C:\\leosbrito\\projetos\\testev\\convertedbf\\parquet"
 
os.makedirs(diretorioDBF, exist_ok=True)  # Cria o diretório DBF caso não exista
 
def chunk_list(lst, chunk_size):
    print(f"Divide a lista em chunk_size de tamanho: {chunk_size} ...")
    for i in range(0, len(lst), chunk_size):
        yield lst[i:i + chunk_size]
 
def converter_dbc_para_dbf(arquivo_dbc):
    try:
        print("#####################################################")
        print("Convertendo arquivo DBC para DBF...")
        dbc_file = os.path.join(diretorioDBC, arquivo_dbc)
        filename = path.basename(dbc_file).split(".")[0]
        dbf_file = f"{diretorioDBF}/{filename}.dbf"
        datasus_dbc.decompress(dbc_file, dbf_file)
        print(f"Arquivo DBF criado: {dbf_file}...")
    except Exception as e:
        print(f"Erro ao converter o arquivo DBC para DBF")

def encontrar_arquivo_mais_recente(diretorio):
    arquivos = os.listdir(diretorio)
    if arquivos:
        arquivos_dbf = [arquivo for arquivo in arquivos if arquivo.endswith('.dbf')]
        if arquivos_dbf:
            arquivos_dbf.sort(key=lambda x: os.path.getmtime(os.path.join(diretorio, x)), reverse=True)
            return arquivos_dbf[0]
    return None

def converter_dbf_para_parquet(caminho_dbf, chunk_size):
    try:
        print("----------------------------------------------------------")
        print("Convertendo arquivo DBF para PARQUET...")
        print(f"Lendo arquivo DBF: {caminho_dbf} ...")
        dbf_file = DBF(caminho_dbf, encoding="Latin1")
        print("Criando DataFrame do arquivo DBF... (Pode demorar mais do que o esperado)")
        df = pl.DataFrame(iter(dbf_file))
        print("Dividindo o nome do arquivo especificado em 'caminho_dbf' em suas partes componentes e armazenando o nome do arquivo sem a extensão em uma variável chamada 'nmparquet'...")
        nmparquet = os.path.splitext(os.path.basename(caminho_dbf))[0]
        nome_parquet = nmparquet + ".parquet"
        print(f"Criando um caminho completo do parquet de nome: {nome_parquet}...")
        caminho_parquet = os.path.join(diretorioParquet, nome_parquet)
        print("Convertendo as colunas para o tipo String (str) ...")
        df = df.cast(pl.String)
        print("Gravando o DataFrame em Parquet por bloco...")
        df.write_parquet(caminho_parquet, row_group_size=chunk_size)
        print(f"Arquivo PARQUET criado: {nome_parquet}")
    except Exception as e:
        print(f"Erro ao converter {caminho_dbf} para Parquet: {e}")

chunk_size = 5000  # Tamanho do chunk
for arquivo_dbc in os.listdir(diretorioDBC):
    if arquivo_dbc.endswith(".dbc"):
        converter_dbc_para_dbf(arquivo_dbc)
        ultimo_arquivo_dbf = encontrar_arquivo_mais_recente(diretorioDBF)
        if ultimo_arquivo_dbf:
            arquivodbf = os.path.join(diretorioDBF, ultimo_arquivo_dbf)
            converter_dbf_para_parquet(arquivodbf, chunk_size)
        else:
            print("Nenhum arquivo DBF encontrado.")
    print("-----------------------------------------------------")
 
print("Conversão de DBC para DBF e de DBF para Parquet concluída com sucesso!")
print("####################################################")
 