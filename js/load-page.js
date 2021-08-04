/// Leitura completa do nosso documento HTML
$(document).ready(function(){

  // Monitorar todos os cliques em cima do elemento "a" do nosso documento HTML
  
  $('a').click(function(e){
      e.preventDefault()
  
      //Criar uma variável local que receba o atributo href do link
  
      let page = $(this).attr('href')
  
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
  
          //Se for para abrir a página Trabalhos...
          case 'trabalhos': 
              $('.modal-title').append('Projetos')
              $('.modal-body').append(`<p> <b>Montar um site completo e inteiro por mim</b> <br><br>
              Fazer um site de video mais para frente <br>
              </p>`)
              $('#modal-info').modal('show')
          break
  
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
  
          default: alert('Link não encontrado');
      }
  
      })
  
  })