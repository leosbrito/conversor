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
          }
          else{
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
	  carregaElemento(abrag_todos,"#moduf");
      // alterar tipo de arquivo
      jQuery("#tp_arquivo").val("MAP");
     } else if (value3 == 6) {
       //Modalidade Conversões - Fonte Base Territorial - Mapas e conversões para tabulação
      
	  esconder_box_ano();
	  mostrar_box_uf(); 
	  carregaElementoIncremental("#tp_arquivo","CNV","Conversões");
      carregaElemento(abrag_todos,"#moduf");     
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
	jQuery("#moduf").empty();
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
	jQuery("#moduf").empty();
	jQuery("#linha_uf").show("slow");	  
	//carregaElemento(uf,"#moduf");
}