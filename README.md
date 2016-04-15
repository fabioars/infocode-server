# infoCode - Server

Esse servidor abastece o aplicativo infoCode

## Requisitos

Os requisitos do servidor são:
- Node.js
- MongoDB


Esse servidor foi criado para o [cliente](https://github.com/fsoares1/infocode-client)

## Instalação

Com o Node.js intalado, vá em um prompt de comando no diretório e instale os pacotes adicionais

    npm install

Depois dos pacotes instalados só usar os comandos

    npm start
  
  ou
    
    node server.js
    
### Banco de dados

É necessario criar um banco de dados chamado "infocode"

    use infocode

Insira os dados na coleção "convenio"

    db.convenio.insert({...});
    
### Exemplo de convenio de convenio

    {
     "numeroConvenio": "900154",
      "uf": "SANTA CATARINA",
     "codigoSIAFIMunicipio": "8189",
      "nomeMunicipio": "LAURO MULLER",
      "situacaoConvenio": "Prestacao de Contas Aprovada",
     "numeroOriginal": "06159/2009",
      "objetoConvenio": "AQUISICAO DE 01 (UM) CAMINHAO TRUQUE NOVO E 01 (UM) TANQUE DE CHAPA METALICA PARA LIMPEZA POR SUCCAO.",
      "codigoOrgaoSuperior": "22000",
      "nomeOrgaoSuperior": "MINIST. DA AGRICUL.,PECUARIA E ABASTECIMENTO",
      "codigoConcedente": "135098",
     "nomeConcedente": "CAIXA ECONOMICA FEDERAL/MA",
     "codigoConvenente": "82558909000124",
      "nomeConvenente": "MUNICIPIO DE LAURO MULLER",
      "tipoEnteConvenente": "'M' (municipal)",
     "valorConvenio": "195000,00",
      "valorLiberado": "195000,00",
     "dataPublicacao": "2010-01-20",
      "dataInicioVigencia": "2009-12-31",
     "dataFimVigencia": "2010-12-31",
     "valorContrapartida": "55000,00",
      "dataUltimaLiberacao": "2010-10-20",
      "valorUltimaLiberacao": "195000,00"
    }

## QR CODE

Pode se usar o comando 

    db.convenio.find({numeroConvenio:"900154"});
    
e pegar o campo **_id** para criar o QRCode

O QR Code precisa ser do tipo **TEXTO** e seguir o seguinte padrão:

    convenio?=idDoConvenio

### Exemplo

    convenio?=56eb4b4c32e787800100002a

### [Cliente](https://github.com/fsoares1/infocode-client)!

## GNU GENERAL PUBLIC LICENSE

### Version 2, June 1991

Copyright (C) 1989, 1991 Free Software Foundation, Inc.  
51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA

Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.
