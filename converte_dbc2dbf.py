import os
import os.path as path
import datasus_dbc
 
diretorioDBC = "dados/dbc"
diretorioDBF = "dados/dbf"
 
os.makedirs(diretorioDBF, exist_ok=True)  # Cria o diretório DBF caso não exista

def converter_dbc_para_dbf(arquivo_dbc):
    try:
        print("-----------------------------------------------------")
        dbc_file = os.path.join(diretorioDBC, arquivo_dbc)
        filename = path.basename(dbc_file).split(".")[0]
        print(f"Convertendo arquivo {filename}...")
        dbf_file = f"{diretorioDBF}/{filename}.dbf"
        datasus_dbc.decompress(dbc_file, dbf_file)
        print(f"Arquivo DBF criado: {dbf_file}...")
    except Exception as e:
        print(f"Erro ao converter o arquivo DBC para DBF")

print("#####################################################")
print("Convertendo arquivo DBC para DBF...")
for arquivo_dbc in os.listdir(diretorioDBC):
    if arquivo_dbc.endswith(".dbc"):
        converter_dbc_para_dbf(arquivo_dbc)
 
print("Conversão de DBC para DBF concluída com sucesso!")
print("####################################################")
 
