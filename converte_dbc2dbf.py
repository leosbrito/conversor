import conversor_dbc
 
# diretorioDBC = "dados/dbc"

def main():
    # Converte arquivos DBC para arquivos DBF no diretórios estipulados
    # Caso não exista diretório ou argumento para eles será criado um diretório chamado "dbf" no raiz do arquivo executado
    # conversor_dbc.converter_dbc2dbf(diretorioDBC = "dados/dbc", diretorioDBF="dados/dbf")

    conversor_dbc.converter_dbf2parquet(arquivoDBF="dados/dbf/RDMG2209.dbf", diretorioParquet="dados/parquet", row_group=5000)

    # conversor_dbc.converter_parquet2csv(ultimo_arquivo_dbf="dados/dbf/RDMG2209.dbf", diretorioParquet="dados/parquet", diretorioCSV="dados/csv")

if __name__ == "__main__":
    main()
