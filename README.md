# Converte arquivos DBC para DBF, PARQUET e CSV usando Python

O projeto converte arquivos DBC em diversos formatos como DBF, PARQUET e CSV.
Este projeto se fez necessário para suprir a necessidade de ler dados do TABNET e TABWIN do DATASUS (Departamento de Informática do Sistema Único de Saúde).
Utiliza a biblioteca datasus-dbc-py criada pelo [Murilo Matsubara](https://github.com/mymatsubara/datasus-dbc-py).

# Alteração necessária na biblioteca DBFREAD:

A alteração se fez necessária para ler arquivos iniciados com ST dos dados do SCNES.
1. Abrir arquivo dbf.py
2. Incluir a seguinte linha dentro da função _read_field_headers():
```python
    def _read_field_headers(self, infile):
        ...
            if sep in (b'\r', b'\n', b''):
                # End of field headers
                break
            
            if sep.hex() == ('00'):
                break 
        ...
```

# Uso

Para o uso do código basta usar o arquivo converter.py como exemplo e alterar as funções que achar necessário.
O criar um novo arquivo com o código abaixo:

```python
import conversor_dbc

def main():
    # Converte arquivos DBC para arquivos DBF no diretórios estipulados
    # Caso não exista diretório ou argumento para eles será criado um diretório chamado "dbf" no raiz do arquivo executado
    conversor_dbc.converter_dbc2dbf(diretorioDBC="dados/dbc", diretorioDBF="dados/dbf", arquivo_dbc=[])

    # Converte arquivo DBF para arquivo PARQUET específico
    conversor_dbc.converter_dbf2parquet(diretorioDBF="dados/dbf", diretorioParquet="dados/parquet", row_group=5000, arquivoDBF=[])
    
    # Converte arquivo PARQUET para arquivo CSV específico
    conversor_dbc.converter_parquet2csv(diretorioParquet="dados/parquet", diretorioCSV="dados/csv", arquivoParquet=[])

if __name__ == "__main__":
    main()
```
