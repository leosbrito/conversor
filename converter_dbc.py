import conversor_dbc

def main():
    # Converte arquivos DBC para arquivos DBF no diretório estipulado ou arquivo específico
    # Caso não exista diretório ou argumento para eles será criado um diretório chamado "dbf" no raiz do arquivo executado
    conversor_dbc.converter_dbc2dbf(arquivo_dbc="", diretorioDBC = "dados/dbc", diretorioDBF="dados/dbf")

    # Converte arquivos DBF para arquivos PARQUET no diretório estipulado ou arquivo específico
    conversor_dbc.converter_dbf2parquet(arquivoDBF="", diretorioDBF="dados/dbf", diretorioParquet="dados/parquet", row_group=5000)
    
    # Converte arquivos PARQUET para arquivos CSV no diretório estipulado ou arquivo específico
    conversor_dbc.converter_parquet2csv(arquivoParquet="", diretorioParquet="dados/parquet", diretorioCSV="dados/csv")

if __name__ == "__main__":
    main()
