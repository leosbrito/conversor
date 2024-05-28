var fonte = [
  {
    sigla: "SIHSUS",
    descricao: "SIHSUS - Sistema de Informações Hospitalares do SUS"
  },
  {
    sigla: "SIASUS",
    descricao: "SIASUS - Sistema de Informações Ambulatoriais do SUS"
  },
  {
    sigla: "SISCOLO",
    descricao: "SISCOLO - Sistema de Informações de Cânceres de Colo de Útero"
  },
  {
    sigla: "SISMAMA",
    descricao: "SISMAMA - Sistema de Informações de Cânceres de Mama"
  },
  { sigla: "SIM", descricao: "SIM - Sistema de informações de Mortalidade" },
  {
    sigla: "CIH",
    descricao: "CIH - Sistema de Comunicação de Informação Hospitalar"
  },
  {
    sigla: "CIHA",
    descricao:
      "CIHA - Sistema de Comunicação de Informação Hospitalar e Ambulatorial"
  },
  {
    sigla: "SINASC",
    descricao: "SINASC - Sistema de informação de Nascidos Vivos"
  },
  {
    sigla: "SISPRENATAL",
    descricao:
      "SISPRENATAL - Sistema de Monitoramento e Avaliação do Pré-Natal, Parto, Puerpério e Criança"
  },
  {
    sigla: "CNES",
    descricao: "CNES - Cadastro Nacional de Estabelecimentos de Saúde"
  },
  {
    sigla: "CMD",
    descricao: "CMD - Conjunto Mínimo de Dados"
  },
  {
    sigla: "SINAN",
    descricao:
      "SINAN - Sistema de Informações de Agravos de Notificação"
  },
  {
    sigla: "RESP",
    descricao:
      "RESP - Notificações de casos suspeitos de SCZ – desde 2015"
  },
  {
    sigla: "PO",
    descricao:
      "PO - Painel de Oncologia – desde 2013"
  },
   {
    sigla: "PCE",
    descricao:
      "PCE - Programa de Controle da Esquistossomose"
  },
  {
    sigla: "IBGE",
    descricao: "Base Populacional - IBGE"
  },
  {
    sigla: "DATASUS",
    descricao:
      "Aplicativos - TABWIN/TABNET - Ferramentas para tabulação de dados"
  },
{
    sigla: "Base Territorial",
    descricao:
      "Base Territorial - Mapas e conversões para tabulação"
  }
];
var fontes_anuais = ["IBGE","SINASC","SINAN","SIM","RESP","PCE","PO"];
var programasDatasus = [
  {
    sigla_arquivo: "TABWIN",
    desc_arquivo: "TABWIN - Tabulador de dados para Windows",
    abrangencia: "BR"
  },
  {
    sigla_arquivo: "TABNET",
    desc_arquivo: "TABNET - Tabulador de dados para ambiente internet",
    abrangencia: "BR"
  },
  {
    sigla_arquivo: "TABDOS",
    desc_arquivo: "TABDOS - Tabulador de dados para DOS",
    abrangencia: "BR"
  }
];
var modadalidade = [
  { codigo: 0, descricao: "Arquivos auxiliares para tabulação" },
  { codigo: 1, descricao: "Dados" },
  { codigo: 2, descricao: "Documentação" },
  { codigo: 3, descricao: "Programas" },
  { codigo: 4, descricao: "Base Territoriais" },
  { codigo: 5, descricao: "Mapas" },
  { codigo: 6, descricao: "Conversões" }
];
var modadalidadeDATASUS = [

  { codigo: 2, descricao: "Documentação" },
  { codigo: 3, descricao: "Programas" }
];
var modadalidadeTerritorial = [
  { codigo: 4, descricao: "Base Territoriais" },
  { codigo: 5, descricao: "Mapas" },
  { codigo: 2, descricao: "Documentação" },
  { codigo: 6, descricao: "Conversões" }
];
var arquivo = [
  {
    fonte: "SIHSUS",
    sigla_arquivo: "RD",
    desc_arquivo: "RD - AIH Reduzida",
    abrangencia: "UF"
  },
  {
    fonte: "SIHSUS",
    sigla_arquivo: "RJ",
    desc_arquivo: "RJ - AIH Rejeitadas",
    abrangencia: "UF"
  },
  {
    fonte: "SIHSUS",
    sigla_arquivo: "SP",
    desc_arquivo: "SP - Serviços Profissionais",
    abrangencia: "UF"
  },
  {
    fonte: "SIHSUS",
    sigla_arquivo: "ER",
    desc_arquivo: "ER - AIH Rejeitadas com código de erro",
    abrangencia: "UF"
  },
  {
    fonte: "SIASUS",
    sigla_arquivo: "AB",
    desc_arquivo:
      "AB - APAC de Acompanhamento a Cirurgia Bariátrica - A Partir de Jan/2008 até Mar/2013",
    abrangencia: "UF"
  },
  {
    fonte: "SIASUS",
    sigla_arquivo: "ABO",
    desc_arquivo:
      "ABO - APAC Acompanhamento Pós Cirurgia Bariátrica - A Partir de Abr/2013",
    abrangencia: "UF"
  },
  {
    fonte: "SIASUS",
    sigla_arquivo: "ACF",
    desc_arquivo:
      "ACF - APAC Confeção de Fístula Arteriovenosa - A Partir de Jun/2014",
    abrangencia: "UF"
  },
  {
    fonte: "SIASUS",
    sigla_arquivo: "AD",
    desc_arquivo: "AD - APAC de Laudos Diversos - A Partir de Jan/2008",
    abrangencia: "UF"
  },
  {
    fonte: "SIASUS",
    sigla_arquivo: "AM",
    desc_arquivo: "AM - APAC de Medicamentos - A Partir de Jan/2008",
    abrangencia: "UF"
  },
  {
    fonte: "SIASUS",
    sigla_arquivo: "AN",
    desc_arquivo: "AN - APAC de Nefrologia - A Partir de Jan/2008 até Out/2014",
    abrangencia: "UF"
  },
  {
    fonte: "SIASUS",
    sigla_arquivo: "AQ",
    desc_arquivo: "AQ - APAC de Quimioterapia - A Partir de Jan/2008",
    abrangencia: "UF"
  },
  {
    fonte: "SIASUS",
    sigla_arquivo: "AR",
    desc_arquivo: "AR - APAC de Radioterapia - A Partir de Jan/2008",
    abrangencia: "UF"
  },
  {
    fonte: "SIASUS",
    sigla_arquivo: "ATD",
    desc_arquivo: "ATD - APAC Tratamento Dialítico - A Partir de Jun/2014",
    abrangencia: "UF"
  },
  {
    fonte: "SIASUS",
    sigla_arquivo: "PA",
    desc_arquivo: "PA - Produção Ambulatorial - A Partir de Jul/1994",
    abrangencia: "UF"
  },
  {
    fonte: "SIASUS",
    sigla_arquivo: "PS",
    desc_arquivo: "PS - Psicossocial - A Partir de Jan/2013",
    abrangencia: "UF"
  },
  {
    fonte: "SIASUS",
    sigla_arquivo: "SAD",
    desc_arquivo: "SAD - Atenção Domiciliar - A Partir de Nov/2012"
  },
   {
    fonte: "SISCOLO",
    sigla_arquivo: "CC",
    desc_arquivo: "CC - Citopatológico de Colo de Útero - 2006 a 2014",
    abrangencia: "UF"
  },
    {
    fonte: "SISCOLO",
    sigla_arquivo: "HC",
    desc_arquivo: "HC - Histopatológico de Colo de Útero - 2006 a 2014",
    abrangencia: "UF"
  },
    {
    fonte: "SISMAMA",
    sigla_arquivo: "CM",
    desc_arquivo: "CM - Citopatológico de Mama - 2006 a 2014",
    abrangencia: "UF"
  },
    {
    fonte: "SISMAMA",
    sigla_arquivo: "HM",
    desc_arquivo: "HC - Histopatológico de Mama - 2006 a 2014",
    abrangencia: "UF"
  },
  {
    fonte: "SIM",
    sigla_arquivo: "DO",
    desc_arquivo: "DO - Declarações de Óbito - 1979 a 2022",
    abrangencia: "UF"
  },
   {
    fonte: "SIM",
    sigla_arquivo: "DOREXT",
    desc_arquivo:
      "DOREXT - Mortalidade de residentes no exterior - 2013 a 2022",
    abrangencia: "BR"
  },
  {
    fonte: "SIM",
    sigla_arquivo: "DOFET",
    desc_arquivo: "DOFET - Declarações de Óbitos fetais - 1979 a 2022",
    abrangencia: "BR"
  },
  {
    fonte: "SIM",
    sigla_arquivo: "DOEXT",
    desc_arquivo:
      "DOEXT - Declarações de Óbitos por causas externas - 1979 a 2022",
    abrangencia: "BR"
  },
  {
    fonte: "SIM",
    sigla_arquivo: "DOINF",
    desc_arquivo: "DOINF - Declarações de Óbitos infantis - 1979 a 2022",
    abrangencia: "BR"
  },
  {
    fonte: "SIM",
    sigla_arquivo: "DOMAT",
    desc_arquivo: "DOMAT - Declarações de Óbitos maternos - 1996 a 2022",
    abrangencia: "BR"
  },
  {
    fonte: "SINASC",
    sigla_arquivo: "DN",
    desc_arquivo: "DN - Declarações de nascidos vivos 1994 a 2022",
    abrangencia: "UF"
  },
   {
    fonte: "SINASC",
    sigla_arquivo: "DNEX",
    desc_arquivo: "DNEX - Declarações de nascidos vivos residentes no exterior 2014 a 2022",
    abrangencia: "BR"
  },
  {
    fonte: "SISPRENATAL",
    sigla_arquivo: "PN",
    desc_arquivo: "PN - Pré-Natal - 2012 a 2014",
    abrangencia: "UF"
  },

  {
    fonte: "CIHA",
    sigla_arquivo: "CIHA",
    desc_arquivo:
      "CIHA - Comunicação de Internação Hospitalar e Ambulatorial - A partir de Jan/2011",
    abrangencia: "UF"
  },
  {
    fonte: "CIH",
    sigla_arquivo: "CR",
    desc_arquivo:
      "CR - Comunicação de Internação Hospitalar - A partir de Jan/2008",
    abrangencia: "UF"
  },
  {
    fonte: "CNES",
    sigla_arquivo: "LT",
    desc_arquivo: "LT - Leitos - A partir de Out/2005",
    abrangencia: "UF"
  },
  {
    fonte: "CNES",
    sigla_arquivo: "ST",
    desc_arquivo: "ST - Estabelecimentos - A partir de Ago/2005",
    abrangencia: "UF"
  },
  {
    fonte: "CNES",
    sigla_arquivo: "DC",
    desc_arquivo: "DC - Dados Complementares - A partir de Ago/2005",
    abrangencia: "UF"
  },
  {
    fonte: "CNES",
    sigla_arquivo: "EQ",
    desc_arquivo: "EQ - Equipamentos - A partir de Ago/2005",
    abrangencia: "UF"
  },
  {
    fonte: "CNES",
    sigla_arquivo: "SR",
    desc_arquivo: "SR - Serviço Especializado - A partir de Ago/2005",
    abrangencia: "UF"
  },
  {
    fonte: "CNES",
    sigla_arquivo: "HB",
    desc_arquivo: "HB - Habilitação - A partir de Mar/2007",
    abrangencia: "UF"
  },
  {
    fonte: "CNES",
    sigla_arquivo: "PF",
    desc_arquivo: "PF - Profissional - A partir de Ago/2005",
    abrangencia: "UF"
  },
  {
    fonte: "CNES",
    sigla_arquivo: "EP",
    desc_arquivo: "EP - Equipes - A partir de Abr/2007",
    abrangencia: "UF"
  },
  {
    fonte: "CNES",
    sigla_arquivo: "RC",
    desc_arquivo: "RC - Regra Contratual - A partir de Mar/2007",
    abrangencia: "UF"
  },
  {
    fonte: "CNES",
    sigla_arquivo: "IN",
    desc_arquivo: "IN - Incentivos - A partir de Nov/2007",
    abrangencia: "UF"
  },
  {
    fonte: "CNES",
    sigla_arquivo: "EE",
    desc_arquivo: "EE - Estabelecimento de Ensino - A partir de Mar/2007",
    abrangencia: "UF"
  },
  {
    fonte: "CNES",
    sigla_arquivo: "EF",
    desc_arquivo: "EF - Estabelecimento Filantrópico - A partir de Mar/2007",
    abrangencia: "UF"
  },
  {
    fonte: "CNES",
    sigla_arquivo: "GM",
    desc_arquivo: "GM - Gestão e Metas - A partir de Jun/2007",
    abrangencia: "UF"
  },
  {
    fonte: "CMD",
    sigla_arquivo: "PR",
    desc_arquivo: "PR - Por Procedimento - A partir de Jan/2017",
    abrangencia: "UF"
  },
  {
    fonte: "CMD",
    sigla_arquivo: "CT",
    desc_arquivo: "CT - Por Contato Assistencial - A partir de Jan/2017",
    abrangencia: "UF"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "ANIM",
    desc_arquivo: "ANIM - Acidente por Animais Peçonhentos",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "ANTR",
    desc_arquivo: "ANTR - Atendimento Antirrabico",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "AIDA",
    desc_arquivo: "AIDA - AIDS em adultos",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "AIDC",
    desc_arquivo: "AIDC - AIDS em crianças",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "BOTU",
    desc_arquivo: "BOTU - Botulismo",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "COLE",
    desc_arquivo: "COLE - Cólera",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "COQU",
    desc_arquivo: "COQU - Coqueluche",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "DENG",
    desc_arquivo: "DENG - Dengue",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "DIFT",
    desc_arquivo: "DIFT - Difteria",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "CHAG",
    desc_arquivo: "CHAG - Doença de Chagas Aguda",
    abrangencia: "BR"
  },
   {
    fonte: "SINAN",
    sigla_arquivo: "EXAN",
    desc_arquivo: "EXAN - Doença exantemáticas",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "ESQU",
    desc_arquivo: "ESQU - Esquistossomose",
    abrangencia: "BR"
  },
   {
    fonte: "SINAN",
    sigla_arquivo: "ESPO",
    desc_arquivo: "ESPO - Esporotricose (Epizootia)",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "CHIK",
    desc_arquivo: "CHIK - Febre de Chikungunya",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "FMAC",
    desc_arquivo: "FMAC - Febre Maculosa",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "FTIF",
    desc_arquivo: "FTIF - Febre Tifóide",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "HANS",
    desc_arquivo: "HANS - Hanseníase",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "HANT",
    desc_arquivo: "HANT - Hantavirose",
    abrangencia: "BR"
  },
    {
    fonte: "SINAN",
    sigla_arquivo: "HEPA",
    desc_arquivo: "HEPA - Hepatites Virais",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "HIVA",
    desc_arquivo: "HIVA - HIV em adultos",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "HIVC",
    desc_arquivo: "HIVC - HIV em crianças",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "HIVE",
    desc_arquivo: "HIVE - HIV em crianças expostas",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "INFL",
    desc_arquivo: "INFL - Influenza Pandêmica",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "IEXO",
    desc_arquivo: "IEXO - Intoxicação Exógena",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "LEIV",
    desc_arquivo: "LEIV - Leishmaniose Visceral",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "LTAN",
    desc_arquivo: "LTAN - Leishmaniose Tegumentar Americana",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "LEPT",
    desc_arquivo: "LEPT - Leptospirose",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "MALA",
    desc_arquivo: "MALA - Malária",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "MENI",
    desc_arquivo: "MENI - Meningite",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "PFAN",
    desc_arquivo: "PFAN - Paralisia Flácida Aguda",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "PEST",
    desc_arquivo: "PEST - Peste",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "RAIV",
    desc_arquivo: "RAIV - Raiva",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "ROTA",
    desc_arquivo: "ROTA - Rotavírus",
    abrangencia: "BR"
  },
   {
    fonte: "SINAN",
    sigla_arquivo: "SIFA",
    desc_arquivo: "SIFA - Sífilis Adquirida",
    abrangencia: "BR"
  },
    {
    fonte: "SINAN",
    sigla_arquivo: "SIFC",
    desc_arquivo: "SIFC - Sífilis Congênita",
    abrangencia: "BR"
  },
     {
    fonte: "SINAN",
    sigla_arquivo: "SIFG",
    desc_arquivo: "SIFG - Sífilis em Gestante",
    abrangencia: "BR"
  },
     {
    fonte: "SINAN",
    sigla_arquivo: "SRC",
    desc_arquivo: "SRC - Síndrome da Rubéola Congênia",
    abrangencia: "BR"
  },
    {
    fonte: "SINAN",
    sigla_arquivo: "SDTA",
    desc_arquivo: "SDTA - Surto Doenças Transmitidas por Alimentos",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "TETA",
    desc_arquivo: "TETA - Tétano Acidental",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "TETN",
    desc_arquivo: "TETN - Tétano Neonatal",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "TOXC",
    desc_arquivo: "TOXC - Toxoplasmose Congênita",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "TOXG",
    desc_arquivo: "TOXG - Toxoplasmose Gestacional",
    abrangencia: "BR"
  },
     {
    fonte: "SINAN",
    sigla_arquivo: "NTRA",
    desc_arquivo: "NTRA - Notificação de Tracoma",
    abrangencia: "BR"
  },
    {
    fonte: "SINAN",
    sigla_arquivo: "TRAC",
    desc_arquivo: "TRAC - Inquérito de Tracoma",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "TUBE",
    desc_arquivo: "TUBE - Tuberculose",
    abrangencia: "BR"
  },
   {
    fonte: "SINAN",
    sigla_arquivo: "VARC",
    desc_arquivo: "VARC - Varicela",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "VIOL",
    desc_arquivo: "VIOL - Violência doméstica, sexual e/ou outras violências",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "ZIKA",
    desc_arquivo: "ZIKA - Zika Vírus",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "ACBI",
    desc_arquivo: "ACBI - Acidente de trabalho com material biológico",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "ACGR",
    desc_arquivo: "ACGR - Acidente de trabalho",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "CANC",
    desc_arquivo: "CANC - Cancêr relacionado ao trabalho",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "DERM",
    desc_arquivo: "DERM - Dermatoses ocupacionais",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "LERD",
    desc_arquivo: "LERD - LER/Dort",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "PAIR",
    desc_arquivo: "PAIR - Perda auditiva por ruído relacionado ao trabalho",
    abrangencia: "BR"
  },  
  {
    fonte: "SINAN",
    sigla_arquivo: "PNEU",
    desc_arquivo: "PNEU - Pneumoconioses realacionadas ao trabalho",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN",
    sigla_arquivo: "MENT",
    desc_arquivo: "MENT - Transtornos mentais relacionados ao trabalho",
    abrangencia: "BR"
  },
{
    fonte: "SINAN_P",
    sigla_arquivo: "ANIM",
    desc_arquivo: "ANIM - Acidente por Animais Peçonhentos",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "ANTR",
    desc_arquivo: "ANTR - Atendimento Antirrabico",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "AIDA",
    desc_arquivo: "AIDA - AIDS em adultos",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "AIDC",
    desc_arquivo: "AIDC - AIDS em crianças",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "BOTU",
    desc_arquivo: "BOTU - Botulismo",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "COLE",
    desc_arquivo: "COLE - Cólera",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "COQU",
    desc_arquivo: "COQU - Coqueluche",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "DENG",
    desc_arquivo: "DENG - Dengue",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "DIFT",
    desc_arquivo: "DIFT - Difteria",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "CHAG",
    desc_arquivo: "CHAG - Doença de Chagas Aguda",
    abrangencia: "BR"
  },
    {
    fonte: "SINAN_P",
    sigla_arquivo: "EXAN",
    desc_arquivo: "EXAN - Doença exantemáticas",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "ESQU",
    desc_arquivo: "ESQU - Esquistossomose",
    abrangencia: "BR"
  },
    {
    fonte: "SINAN_P",
    sigla_arquivo: "ESPO",
    desc_arquivo: "ESPO - Esporotricose (Epizootia)",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "CHIK",
    desc_arquivo: "CHIK - Febre de Chikungunya",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "FMAC",
    desc_arquivo: "FMAC - Febre Maculosa",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "FTIF",
    desc_arquivo: "FTIF - Febre Tifóide",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "HANS",
    desc_arquivo: "HANS - Hanseníase",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "HANT",
    desc_arquivo: "HANT - Hantavirose",
    abrangencia: "BR"
  },
    {
    fonte: "SINAN_P",
    sigla_arquivo: "HEPA",
    desc_arquivo: "HEPA - Hepatites Virais",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "HIVA",
    desc_arquivo: "HIVA - HIV em adultos",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "HIVC",
    desc_arquivo: "HIVC - HIV em crianças",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "HIVE",
    desc_arquivo: "HIVE - HIV em crianças expostas",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "INFL",
    desc_arquivo: "INFL - Influenza Pandêmica",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "IEXO",
    desc_arquivo: "IEXO - Intoxicação Exógena",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "LEIV",
    desc_arquivo: "LEIV - Leishmaniose Visceral",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "LTAN",
    desc_arquivo: "LTAN - Leishmaniose Tegumentar Americana",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "LEPT",
    desc_arquivo: "LEPT - Leptospirose",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "MALA",
    desc_arquivo: "MALA - Malária",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "MENI",
    desc_arquivo: "MENI - Meningite",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "PFAN",
    desc_arquivo: "PFAN - Paralisia Flácida Aguda",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "PEST",
    desc_arquivo: "PEST - Peste",
    abrangencia: "BR"
  },
   {
    fonte: "SINAN_P",
    sigla_arquivo: "SIFA",
    desc_arquivo: "SIFA - Sífilis Adquirida",
    abrangencia: "BR"
  },
    {
    fonte: "SINAN_P",
    sigla_arquivo: "SIFC",
    desc_arquivo: "SIFC - Sífilis Congênita",
    abrangencia: "BR"
  },
     {
    fonte: "SINAN_P",
    sigla_arquivo: "SIFG",
    desc_arquivo: "SIFG - Sífilis em Gestante",
    abrangencia: "BR"
  },
       {
    fonte: "SINAN_P",
    sigla_arquivo: "SRC",
    desc_arquivo: "SRC - Síndrome da Rubéola Congênia",
    abrangencia: "BR"
  },
     {
    fonte: "SINAN_P",
    sigla_arquivo: "SDTA",
    desc_arquivo: "SDTA - Surto Doenças Transmitidas por Alimentos",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "RAIV",
    desc_arquivo: "RAIV - Raiva",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "ROTA",
    desc_arquivo: "ROTA - Rotavírus",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "TETA",
    desc_arquivo: "TETA - Tétano Acidental",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "TETN",
    desc_arquivo: "TETN - Tétano Neonatal",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "TOXC",
    desc_arquivo: "TOXC - Toxoplasmose Congênita",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "TOXG",
    desc_arquivo: "TOXG - Toxoplasmose Gestacional",
    abrangencia: "BR"
  },
     {
    fonte: "SINAN_P",
    sigla_arquivo: "NTRA",
    desc_arquivo: "NTRA - Notificação de Tracoma",
    abrangencia: "BR"
  },
    {
    fonte: "SINAN_P",
    sigla_arquivo: "TRAC",
    desc_arquivo: "TRAC - Inquérito de Tracoma",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "TUBE",
    desc_arquivo: "TUBE - Tuberculose",
    abrangencia: "BR"
  },
    {
    fonte: "SINAN_P",
    sigla_arquivo: "VARC",
    desc_arquivo: "VARC - Varicela",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "VIOL",
    desc_arquivo: "VIOL - Violência doméstica, sexual e/ou outras violências",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "ZIKA",
    desc_arquivo: "ZIKA - Zika Vírus",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "ACBI",
    desc_arquivo: "ACBI - Acidente de trabalho com material biológico",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "ACGR",
    desc_arquivo: "ACGR - Acidente de trabalho",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "CANC",
    desc_arquivo: "CANC - Cancêr relacionado ao trabalho",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "DERM",
    desc_arquivo: "DERM - Dermatoses ocupacionais",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "LERD",
    desc_arquivo: "LERD - LER/Dort",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "PAIR",
    desc_arquivo: "PAIR - Perda auditiva por ruído relacionado ao trabalho",
    abrangencia: "BR"
  },  
  {
    fonte: "SINAN_P",
    sigla_arquivo: "PNEU",
    desc_arquivo: "PNEU - Pneumoconioses realacionadas ao trabalho",
    abrangencia: "BR"
  },
  {
    fonte: "SINAN_P",
    sigla_arquivo: "MENT",
    desc_arquivo: "MENT - Transtornos mentais relacionados ao trabalho",
    abrangencia: "BR"
  },
  {
    fonte: "RESP",
    sigla_arquivo: "RESP",
    desc_arquivo: "RESP - Notificações de casos suspeitos de SCZ – desde 2015",
    abrangencia: "UF"
  },
  {
    fonte: "PO",
    sigla_arquivo: "PO",
    desc_arquivo: "PO - Painel de Oncologia – desde 2013",
    abrangencia: "BR"
  },  
   {
    fonte: "PCE",
    sigla_arquivo: "PCE",
    desc_arquivo: "PCE - Programa de Controle da Esquistossomose",
    abrangencia: "UF"
  },
  {
    fonte: "IBGE",
    sigla_arquivo: "POP",
    desc_arquivo: "POP - Censo e Estimativas - 1980 até 2012",
    abrangencia: "BR"
  },
  {
    fonte: "IBGE",
    sigla_arquivo: "POPT",
    desc_arquivo: "POPT - Estimativas TCU - 1992 até 2021",
    abrangencia: "BR"
  }
];
var tp_arquivo = [
{sigla_arquivo: "AUX", desc_arquivo: "Conversões"},
{sigla_arquivo: "DOC", desc_arquivo: "Documentação"},
{sigla_arquivo: "TER", desc_arquivo: "Bases Territoriais"},

];
var dataAtual = new Date();
var ano_atual = dataAtual.getFullYear();
var ano = [];
for (var i = ano_atual; i >= 1979; i--) {
  ano.push(i);
}

var ano_mapa = ["2013",
  "2005",
  "2001",
  "1997",
  "1994",
  "1991"];
var abrag_br = ["BR"];
var abrag_uf = [
  "AC",
  "AL",
  "AM",
  "AP",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MG",
  "MS",
  "MT",
  "PA",
  "PB",
  "PE",
  "PI",
  "PR",
  "RJ",
  "RN",
  "RO",
  "RR",
  "RS",
  "SC",
  "SE",
  "SP",
  "TO"
];
var abrag_todos = [
  "BR",
  "AC",
  "AL",
  "AM",
  "AP",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MG",
  "MS",
  "MT",
  "PA",
  "PB",
  "PE",
  "PI",
  "PR",
  "RJ",
  "RN",
  "RO",
  "RR",
  "RS",
  "SC",
  "SE",
  "SP",
  "TO"
];
function sort_elemento(elemento,descricao){
  elemento.sort(function(a, b) {	  
  var descricaoA = a[descricao].toLowerCase(),
    descricaoB = b[descricao].toLowerCase();
  if (descricaoA < descricaoB) return -1;
  if (descricaoA > descricaoB) return 1;
  return 0;
});
}
function carregaElemento(variavel,tag) {
	jQuery(tag).empty();
	
	jQuery.each(variavel, function(index, value) {
    jQuery(tag).append(
      jQuery("<option></option>")
        .attr("value", value)
        .text(value)
    );
 });
	
}
function carregaElementoIncremental(tag,chave_value,chave_descricao){
	jQuery(tag).append(
      jQuery("<option></option>")
        .attr("value", chave_value)
        .text(chave_descricao)
    );
	
}
function carregaElemento_2(variavel,tag,chave_value,chave_descricao){

	 jQuery.each(variavel, function(index, value) {		 
    jQuery(tag).append(
      jQuery("<option></option>")
        .attr("value", value[chave_value])
        .text(value[chave_descricao])
    );
  });
	
}
function carregaElemento_Modalidade(variavel,tag,array_modalidade){
	 
	jQuery.each(variavel, function(index, value) {	
       	
      if (array_modalidade.includes(value.codigo)) {
		  
		  codigo= value.codigo;
		  descricao =value.descricao;		  
		  carregaElementoIncremental(tag,codigo,descricao);
		  
      }
    });
}
function carregaUF(arquivo) {
	tp_arquivo = jQuery("#tp_arquivo").val(); 
	mostra = 0;
	
	jQuery("#tp_arquivo").show("slow");	
	jQuery.each(tp_arquivo, function(index, value2) {
		
	tipoArquivoSelecionado = value2;
	jQuery.each(arquivo, function(index, value3) {
	 if(tipoArquivoSelecionado == value3.sigla_arquivo){
       if(value3.abrangencia == "UF"){
	     if(mostra >= 2){
			mostra = 3;
			 
		 }
	     else{
	      mostra = 1;
		  
	     }	 
	   }
	   else if(value3.abrangencia == "BR"){
	   if(mostra >= 1){
			mostra = 3;
			
		 }
	     else{
	      mostra = 2;
		  
	     }	   
	   }	
	   	   return false;
     }	
	 
	}
	);
	}
	);
	if(mostra > 0){
	mostrar_box_uf();		
	}    
	 
	 if(mostra == 1) {
    carregaElemento(abrag_uf,"#ds_uf");
	 
  }
  else if(mostra == 2) {
     carregaElemento(abrag_br,"#ds_uf");
	 
  }
  else if(mostra == 3) {
     carregaElemento(abrag_todos,"#ds_uf");
  } 
}
function carregaModalidade() {
  dados_Fonte = jQuery("#diretorio_ftp").val();
  flagFonteDatasus = 0;
  flagFonteOutFontes = 0;
  flagFonteBTerritorial = 0;
   
  esconder_box_ano();
  esconder_box_uf();
  
  jQuery("#modSelect").empty();
  
  jQuery.each(dados_Fonte, function(index, value) {
    if (value == "DATASUS") {
      flagFonteDatasus = 1;
    } else if (value == "Base Territorial") {
      flagFonteBTerritorial = 1;
    } else {
      flagFonteOutFontes = 1;
    }
  });
  if (flagFonteOutFontes == 1 && flagFonteDatasus == 0  && flagFonteBTerritorial == 0) {
	  carregaElemento_Modalidade(modadalidade,"#modSelect",[0,1,2]);
    
  } else if (flagFonteOutFontes == 0 && flagFonteDatasus == 1 && flagFonteBTerritorial == 1) {
	  carregaElemento_Modalidade(modadalidade,"#modSelect",[2,3,4,5,6]);
	  
  } else if (flagFonteOutFontes == 0 && flagFonteDatasus == 1 && flagFonteBTerritorial == 0) {
	  carregaElemento_Modalidade(modadalidadeDATASUS,"#modSelect",[2,3]);
	  

  } else if (flagFonteBTerritorial == 1 && flagFonteOutFontes == 0 && flagFonteDatasus == 0 ) {
    //jQuery("#linha_uf").hide();
    //jQuery("#linha_competencia").hide();
	esconder_box_uf();
	esconder_box_ano();
	
	carregaElemento_Modalidade(modadalidadeTerritorial,"#modSelect",[4,5,2,6]);
     
  } else if (flagFonteOutFontes == 1 && flagFonteDatasus == 1 && flagFonteBTerritorial == 0) {
    carregaElemento_Modalidade(modadalidade,"#modSelect",[0,1,2,3]);
    
  } else if (flagFonteOutFontes == 1 && flagFonteDatasus == 0 && flagFonteBTerritorial == 1) {
    carregaElemento_Modalidade(modadalidade,"#modSelect",[0,1,2,4,5,6]);
    
  } else if (flagFonteOutFontes == 0 && flagFonteDatasus == 0 && flagFonteBTerritorial == 0) {
      jQuery("#modSelect").empty();
  }
  else {
	 carregaElemento_Modalidade(modadalidade,"#modSelect",[0,1,2,3,4,5,6]);
	  
  }
}
function carregaTipoArquivo() {
  f = jQuery("#diretorio_ftp").val();
  t = jQuery("#modSelect").val();
  var tem_arquivo_dados = 0; 
  jQuery("#tp_arquivo").empty();
  
  jQuery.each(t, function(index, value3) {
    if (value3 == 0) {
      //Modalidade Arquivos auxiliares para tabulacao
      esconder_box_ano();
      esconder_box_uf();

      carregaElementoIncremental("#tp_arquivo","AUX","Arquivos de definição do Tabwin");

      jQuery("#tp_arquivo").val("AUX");
    } else if (value3 == 1) {
      //Modalidade Dados 
      //mostra_UF(arquivo);
      flat_mes = 0;
	    tem_arquivo_dados = 1;
      jQuery("#tp_arquivo").empty();
     
      jQuery.each(f, function(index, value2) {
		  
        jQuery.each(arquivo, function(index, value) {
          if (value2 == value.fonte) {
            jQuery("#tp_arquivo").append(
              jQuery("<option></option>")
                .attr("value", value.sigla_arquivo)
                .text(value.desc_arquivo)
            );
          }
		  
          //esconder caixa de seleção de mês
          if (!(fontes_anuais.includes(value2))){
            flat_mes = 1;
          }
          if(flat_mes == 1){
            mostrar_box_mes();
          }else{
            esconder_box_mes();
          }
        });
      });
	    mostrar_box_ano(ano);
	  
    } else if (value3 == 2) {
      //Modalidade Documentação
      if (tem_arquivo_dados == 0){
		  esconder_box_ano();
		  esconder_box_uf();
	  }
      
	  carregaElementoIncremental("#tp_arquivo","DOC","Documentação");
	  
     jQuery("#tp_arquivo").val("DOC");
	
    } else if (value3 == 3) {
       //Modalidade Programas - Fonte Aplicativos
	   // Carrega os tipos de arquivos(Modalidade Programas - Fonte Aplicativos)
      carregaElemento_2(programasDatasus,"#tp_arquivo","sigla_arquivo","desc_arquivo");
	  
    } else if (value3 == 4) {
      //Modalidade Base Territoriais - Fonte Base Territorial - Mapas e conversões para tabulação
	  // Carrega os tipos de arquivos(Modalidade Base Territoriais - Fonte Base Territorial - Mapas e conversões para tabulação)
      
	  esconder_box_ano();
	  esconder_box_uf();
	  carregaElementoIncremental("#tp_arquivo","TER","Bases Territoriais");
	 
      // alterar tipo de arquivo
      jQuery("#tp_arquivo").val("TER");
    } else if (value3 == 5) {
      //Modalidade Mapas - Fonte Base Territorial - Mapas e conversões para tabulação
      jQuery("#nu_ano").empty();
	  
	  mostrar_box_ano(ano_mapa);  
      mostrar_box_uf();  
	  esconder_box_mes();
	  carregaElementoIncremental("#tp_arquivo","MAP","Bases Mapas");	  
     // alert(1);
	  carregaElemento(abrag_todos,"#ds_uf");
      // alterar tipo de arquivo
      jQuery("#tp_arquivo").val("MAP");
     } else if (value3 == 6) {
       //Modalidade Conversões - Fonte Base Territorial - Mapas e conversões para tabulação
      
	  esconder_box_ano();
	  mostrar_box_uf(); 
	  carregaElementoIncremental("#tp_arquivo","CNV","Conversões");
      carregaElemento(abrag_todos,"#ds_uf");     
      // alterar tipo de arquivo
      jQuery("#tp_arquivo").val("CNV");
    }

  });
}
function esconder_box_ano(){
	jQuery("#nu_ano").empty();	 
	jQuery("#linha_competencia").hide("slow");
	
}
function esconder_box_mes(){
	jQuery("#box_mes").hide("slow");	
}
function esconder_box_uf(){
	jQuery("#ds_uf").empty();
	jQuery("#linha_uf").hide("slow");
}
function mostrar_box_ano(ano){
	jQuery("#linha_competencia").show("slow");	  
	carregaElemento(ano,"#nu_ano");
}
function mostrar_box_mes(){
	jQuery("#box_mes").show("slow");	
}
function mostrar_box_uf(){
	jQuery("#ds_uf").empty();
	jQuery("#linha_uf").show("slow");	  
	//carregaElemento(uf,"#ds_uf");
}

function enviar() {
  jQuery("#resultado tbody").empty();
  jQuery("#arquivo_compactado").empty();
  jQuery(".mensagem").empty();
  var dadosTipoArquivo = jQuery("#tp_arquivo").val();
  var dadosModalidade = jQuery("#modSelect").val();
  var dadosFonte = jQuery("#diretorio_ftp").val();
  var dadosAno = jQuery("#nu_ano").val();
  var dadosMes = jQuery("#nu_mes").val();
  var dadosUf = jQuery("#ds_uf").val();
 
  var request = jQuery.ajax({
   // url: "ftp.php",
    url: "https://datasus.saude.gov.br/wp-content/ftp.php",
    method: "POST",
    data: {
      tp_arquivo: dadosTipoArquivo,
      modalidade: dadosModalidade,
      fonte: dadosFonte,
      ano: dadosAno,
      mes: dadosMes,
      uf: dadosUf
    }
    // dataType: "html"
  });

  request.done(function(msg) {
    jQuery("#log").html(msg);
  });

  request.fail(function(jqXHR, textStatus) {
    alert("Request failed: " + textStatus);
  });
  request.always(function(jqXHR) {
    //console.log(jqXHR);
    //jQuery(".mensagem").empty();
    var arquivo = JSON.parse(jqXHR);
	
    if (arquivo.length == 0) {
      jQuery("<p>Dados não encontrados</p>").appendTo(".mensagem");
    }

    jQuery("#resultado tbody").empty();
    jQuery.each(arquivo, function(i, arquivos) {
      jQuery("#resultado tbody").append(
        jQuery("<tr>")
          .append(jQuery("<td>").append(i))
          .append(
            jQuery("<td>").append(
              '<input type="checkbox" id="' +
                arquivos.arquivo +
                '" name="horns" value="' +
                arquivos.endereco +
                '" checked></input>'
            )
          )
          .append(jQuery("<td>").append(arquivos.fonte))
          .append(jQuery("<td>").append(arquivos.modalidade))
          .append(jQuery("<td>").append(arquivos.link))
      );
    });
  });
}
function downloadSelected() {
  var dados = [];
  jQuery("#arquivo_compactado").empty();
  jQuery("input[type=checkbox]:checked").each(function() {
    var link = jQuery(this).val();
    var id = jQuery(this).attr("id");
    dados.push({ arquivo: id, link: link });

    //setTimeout(function() {
    //window.open(link);
    // descomentar depois window.location.href = link;
    //}, 5000);
  });
  var request2 = jQuery.ajax({
    //url: "download.php",
    url: "https://datasus.saude.gov.br/wp-content/download.php",
    method: "POST",
    data: {
      //arquivo: arquivo_download,
      //link: link_download
      dados: dados
    }
    // dataType: "html"
  });
  request2.always(function(jqXHR) {
    //console.log(jqXHR);

    var retorno = JSON.parse(jqXHR);
    console.log(retorno);
    jQuery("#arquivo_compactado").empty();
    jQuery("#arquivo_compactado").append(
      '<p>Os arquivos selecionados foram compactados no arquivo arquivo.zip. Clicar no nome do arquivo para baixar na pasta que você selecionar.<a href="' +
        retorno +
        '">arquivo.zip</a></p>'
    );
  });
}

jQuery(document).ready(function() {
  // jQuery("#linha_competencia").hide();
  // jQuery("#linha_uf").hide();
  // jQuery("#tp_arquivo").show();

  sort_elemento(fonte,"descricao");
  sort_elemento(arquivo,"desc_arquivo");
  carregaElemento_2(fonte,"#diretorio_ftp","sigla","descricao");
 
  
 
});