# Converte arquivos DBC para DBF, PARQUET e CSV usando Python

O projeto converte arquivos DBC em diversos formatos como DBF, PARQUET e CSV. Em breve irei incluir outros formatos.
Este projeto se fez necessário para suprir a necessidade de ler e disponibilizar dados do TABNET e TABWIN do DATASUS (Departamento de Informática do Sistema Único de Saúde).
Utiliza a biblioteca datasus-dbc-py criada pelo [Murilo Matsubara](https://github.com/mymatsubara/datasus-dbc-py).
A ideia é criar um único arquivo com a utilização das funções quando necessário.

# Uso

Para o uso do código basta usar o arquivo converte_dbc2dbf.py como exemplo e alterar as funções que achar necessário.
O criar um novo arquivo com o código abaixo:

```python
import conversor_dbc

def main():
    # Converte arquivos DBC para arquivos DBF no diretórios estipulados
    # Caso não exista diretório ou argumento para eles será criado um diretório chamado "dbf" no raiz do arquivo executado
    conversor_dbc.converter_dbc2dbf(arquivoDBF="", diretorioDBC = "dados/dbc", diretorioDBF="dados/dbf")

    # Converte arquivos DBF para arquivos PARQUET no diretórios estipulados ou de um arquivo específico
    # conversor_dbc.converter_dbf2parquet(arquivoDBF="dados/dbf/RDMG2209.dbf", diretorioParquet="dados/parquet", row_group=5000)

    # Converte arquivos PARQUET para CSV
    # conversor_dbc.converter_parquet2csv(ultimo_arquivo_dbf="dados/dbf/RDMG2209.dbf", diretorioParquet="dados/parquet", diretorioCSV="dados/csv")

if __name__ == "__main__":
    main()
```
