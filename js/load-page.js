//Leitura de todo o meu documento HTML
$(document).ready(function(){ //Executou a leitura do nosso documento e o preparou para executar uma função
    /// Leitura completa do nosso documento HTML
    $(document).ready(function(){
    
      // Monitorar todos os cliques em cima do elemento "a" do nosso documento HTML
    
        //Monitorar todos os clicks em nosso elemento link "a" do HTML
        $('a').click(function(e){
      $('a').click(function(e){
          e.preventDefault()
    
          let pagina = $(this).attr('href')
          //Criar uma variável local que receba o atributo href do link
    
          $('.modal-title').empty() 
          $('.modal-body').empty() 
          let page = $(this).attr('href')
    
          switch(pagina){
            case 'projetos': 
              $('.modal-title').append('Meus Projetos') 
              $('.modal-body').append('<p>Projetos ...........</p>') 
          $('.modal-title').empty()//Limpar o titúlo
          $('.modal-body').empty()//Limpar o Corpo do HTML
    
          //Verificar qual conteúdo eu devo carregar
          switch(page){
              //Se for para abrir a página sobre mim...
              case 'SobreMim': 
                  $('.modal-title').append('Sobre mim')
                  $('.modal-body').append(`<p>
                  Meu nome é Alex Pelloso, tenho 15 anos e moro na cidade de Guaimbê-SP.<br>
                  Eu curso o 2° ano do Ensino Médio em Desenvolvimento de Sistemas da Etec de Lins
                  </p>`)
                  $('#modal-info').modal('show')
              break
    
              //Se for para abrir a página Parcerias...
              case 'Parcerias': 
                  $('.modal-title').append('Minhas Parcerias')
                  $('.modal-body').append(`<p>
                  <b>Parceiros</b> <br><br>
                  Como parceiros, tenho amigos e meus pais!
                  </p>`)
                  $('#modal-info').modal('show')
              break
            case 'parceiros':
              $('.modal-title').append('Meus Clientes/Parceiros') 
              $('.modal-body').append('<p>Clientes ...........</p>') 
    
              //Se for para abrir a página Trabalhos...
              case 'trabalhos': 
                  $('.modal-title').append('Projetos')
                  $('.modal-body').append(`<p> <b>Montar um site completo e inteiro por mim</b> <br><br>
                  Fazer um site de video mais para frente <br>
                  </p>`)
                  $('#modal-info').modal('show')
              break
            case 'contatos':
              $('.modal-title').append('Meus Contatos') 
              $('.modal-body').append('<p>Contatos ...........</p>') 
    
              //Se for para abrir a página Contatos...
              case 'contato': 
                  $('.modal-title').append('Contatos')
                  $('.modal-body').append(`<p>
                  <b>Telefone:</b> <br><br>
                  +55 14 99705-8363<br>
                  pellosoalex@gmail.com
                  </p>`)
                  $('#modal-info').modal('show')
              break
            default: alert('Página não encontrada')
    
              default: alert('Link não encontrado');
          }
    
          $('#modal-info').modal('show')
          })
    
        })
      }) 