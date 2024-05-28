from flask import Flask, render_template, request, send_file
import conversor_dbc
import datetime
import os
from werkzeug.utils import secure_filename

UPLOAD_DBC = 'dados/dbc/'
UPLOAD_DBF = 'dados/dbf/'
UPLOAD_PARQUET = '/dados/parquet/'
ALLOWED_EXTENSIONS = {'dbc', 'dbf', 'parquet'}

# Apresentação de arquivos dos diretórios CSV e PARQUET para download
basedirdbc = 'dados/dbc/'
filesdbc = os.listdir(basedirdbc)
basedirdbf = 'dados/dbf/'
filesdbf = os.listdir(basedirdbf)
basedircsv = 'dados/csv/'
filescsv = os.listdir(basedircsv)
basedirparquet = 'dados/parquet/'
filesparquet = os.listdir(basedirparquet)

app = Flask(__name__,
            static_url_path='/',
            static_folder='static')
app.config['UPLOAD_DBC'] = UPLOAD_DBC
app.config['UPLOAD_DBF'] = UPLOAD_DBF
app.config['UPLOAD_PARQUET'] = UPLOAD_PARQUET

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/')
def index():
    # Apresentação de arquivos dos diretórios CSV e PARQUET para download
    filesdbc = os.listdir(basedirdbc)
    filesdbcN = len(filesdbc)
    filesdbf = os.listdir(basedirdbf)
    filescsv = os.listdir(basedircsv)
    filesparquet = os.listdir(basedirparquet)
    return render_template('index.html', filescsv=filescsv, filesparquet=filesparquet, filesdbc=filesdbc, filesdbcN=filesdbcN, filesdbf=filesdbf)

@app.route('/convert', methods=['GET', 'POST'])
def convert():
    msg = []
    # Receber valores dos campos de entrada
    if request.method == 'POST':

        # Converter arquivos
        # try:
        diretorio_dbc = request.form['diretorio_dbc']
        diretorio_dbf = request.form['diretorio_dbf']
        diretorio_parquet = request.form['diretorio_parquet']
        diretorio_csv = request.form['diretorio_csv']
        tamanho_grupo_parquet = request.form['tamanho_grupo_parquet']
        arquivo_dbc = []
        arquivo_dbf = ""
        arquivoParquet = ""

        # Limpando diretório DBF
        print("Limpando diretório DBF...")
        for arquivodbfR in os.listdir(basedirdbf):
            rm(f"{basedirdbf}{arquivodbfR}")
        # Limpando diretório PARQUET
        print("Limpando diretório PARQUET...")
        for arquivoparquetR in os.listdir(basedirparquet):
            rm(f"{basedirparquet}{arquivoparquetR}")
        # Limpando diretório CSV
        print("Limpando diretório CSV...")
        for arquivocsvR in os.listdir(basedircsv):
            rm(f"{basedircsv}{arquivocsvR}")

        if request.files.get("arquivo_dbc"):
            # Pega a lista de arquivos vinda da página html
            files = request.files.getlist("arquivo_dbc")
            if len(files) > 0:
                # Limpando diretório DBC
                print("Limpando diretório DBC...")
                for arquivodbcR in os.listdir(basedirdbc):
                    rm(f"{basedirdbc}{arquivodbcR}")
                # Salvando novos arquivo no diretório 
                for file in files: 
                    arquivo_dbc.append(file.filename)
                    if file != "":
                        msg.append(upload_file(file, app.config['UPLOAD_DBC']))
                
        if request.files.get("arquivo_dbf"):
            # Pega a lista de arquivos vinda da página html
            dbffiles = request.files.getlist("arquivo_dbf")
            if len(dbffiles) > 0:
                # Salvando novos arquivo no diretório
                for dbffile in dbffiles:
                    arquivo_dbf = dbffile.filename
                    if arquivo_dbf != "":
                        msg.append(upload_file(dbffile, app.config['UPLOAD_DBF']))

        if request.files.get("arquivoParquet"):
            # Pega a lista de arquivos vinda da página html
            parquetfiles = request.files.getlist("arquivoParquet")
            if len(parquetfiles) > 0:
                # Salvando novos arquivo no diretório
                for parquetfile in parquetfiles:
                    arquivoParquet = parquetfile.filename
                    if arquivoParquet != "":
                        msg.append(upload_file(parquetfile, app.config['UPLOAD_PARQUET']))

        conversor_dbc.converter_dbc2dbf(diretorio_dbc, diretorio_dbf, arquivo_dbc if len(arquivo_dbc) > 0 else [])
        conversor_dbc.converter_dbf2parquet(diretorio_dbf, diretorio_parquet, int(tamanho_grupo_parquet), arquivo_dbf if arquivo_dbf else [])
        conversor_dbc.converter_parquet2csv(diretorio_parquet, diretorio_csv, arquivoParquet if arquivoParquet else [])

        now = datetime.datetime.now().replace(microsecond=0).time()
        mensagem = f"{now} {msg}: Conversão concluída com sucesso!"
            
        # except Exception as e:
        #     now = datetime.datetime.now().replace(microsecond=0).time()
        #     mensagem = f"{now}: Erro na conversão: {e}"

    # Apresentação de arquivos dos diretórios DBC, CSV e PARQUET para download
    filesdbc = os.listdir(basedirdbc)
    filesdbcN = len(filesdbc)
    filesdbf = os.listdir(basedirdbf)
    filescsv = os.listdir(basedircsv)
    filesparquet = os.listdir(basedirparquet)
    # Retornar resultado para a página web
    # return redirect(request.url)
    return render_template('index.html', filescsv=filescsv, filesparquet=filesparquet, filesdbc=filesdbc, filesdbcN=filesdbcN, filesdbf=filesdbf, message=mensagem)
    # return render_template('index.html', message=mensagem)

def upload_file(file, diretorio):
    # Se o usuário não selecionar um arquivo, o navegador enviará um arquivo vazio sem nome de arquivo.
    if file.filename == '':
        return
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(diretorio, filename))
        mensagem = f"{filename}"
        return mensagem

def rm(file: str):
    if os.path.exists(file):
        os.remove(file)

@app.route('/limpardbc', methods=['POST'])
def limpardbc():
    print("Limpando diretório DBC...")
    try:
        for arquivof in os.listdir("dados/dbc/"):
            arquivo = f"dados/dbc/{arquivof}"
            print(f"Removendo arquivo: {arquivo} ...")
            if os.path.exists(arquivo):
                os.remove(arquivo)
                print(f"Arquivo removido!")
            else:
                print(f"Não encontrou o caminho do arquivo: {arquivo}")
        msg = "DBC limpo!"
    except Exception as e:
        msg = f"Erro ao limpar diretório DBC: {e}"
    
    return msg

@app.route('/copiarftp', methods=['POST'])
def copiarftp():
    if not request.form['caminho_ftp']:
        pastaFTP = f"/dissemin/publicos/{request.form['diretorio_ftp']}" #"CNES/200508_/Dados/EQ/"


    nu_ano = request.form.get('nu_ano', None)
    if nu_ano != None: 
        years = [f"{nu_ano}"]
    else:
        years = "*"
    
    ds_uf = request.form.get('ds_uf', None)
    if ds_uf != None:
        states = [f"{ds_uf}"]
    else:
        states = "*"
    
    nu_mes = request.form.get('nu_mes', None)
    if nu_mes != None:
        months = [f"{nu_mes}"]
    else:
        months = "*"

    tp_arquivo = request.form.get('tp_arquivo', None)
    if tp_arquivo != None:
        tp_arquivos = [f"{tp_arquivo}"]
    else:
        tp_arquivos = "*"
        
    # Limpando todo o diretório DBC
    print("Limpando diretório DBC...")
    for arquivodbcR in os.listdir(basedirdbc):
        rm(f"{basedirdbc}{arquivodbcR}")

    try:
        if request.form['caminho_ftp']:
            importar = conversor_dbc.import_from_ftp([
                    f"/dissemin/publicos/{request.form['caminho_ftp']}*.dbc*"
                ])
        else:
            print(pastaFTP, years, states, months, tp_arquivos)
            importar = conversor_dbc.importarFTP(pastaFTP, years, states, months, tp_arquivos)

        now = datetime.datetime.now().replace(microsecond=0).time()
        mensagem = f"{now}: {importar}"
    except Exception as e:
        now = datetime.datetime.now().replace(microsecond=0).time()
        mensagem = f"{now}: Erro ao copiar do FTP: {e}"

    # Apresentação de arquivos dos diretórios DBC, CSV e PARQUET para download
    filesdbc = os.listdir(basedirdbc)
    filesdbcN = len(filesdbc)
    filescsv = os.listdir(basedircsv)
    filesparquet = os.listdir(basedirparquet)
    # Retornar resultado para a página web
    return render_template('index.html', filescsv=filescsv, filesparquet=filesparquet, filesdbc=filesdbc, filesdbcN=filesdbcN, filesdbf=filesdbf, message=mensagem)

@app.route("/download", methods=['GET'])
def download():
    arquivo = f"dados/{request.args.get('arquivo')}"
    if not arquivo:
        print("Nenhum arquivo especificado")
    return send_file(arquivo, as_attachment=True)

if __name__ == '__main__':
    app.run(debug=False)
    # app.run(host='0.0.0.0', debug=True) # Rodando com acesso de outras máquinas

