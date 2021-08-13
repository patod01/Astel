function tryRUT(rutIn) {
     let RUTS = ['197420170', '189076959'];
     let rut;

     for (rut in RUTS) {
          if (RUTS[rut] === rutIn) {
               return true;
          }
     }
     return false;
}

alert('I am a powerful lord')


$('#pdf-button').click(function(){
     console.log('wanna be my Queen?!!')
     var linkSpawn = $('#pdf-spawn').html()
     var rutInput = $('#rut-field').val()
     console.log(linkSpawn)
     console.log(rutInput)
     console.log(typeof(rutInput))
     if (linkSpawn === '' && tryRUT(rutInput)) {
          $('#pdf-spawn').append(
               '<br>\
               <div>\
                    Descargar --> <a id="pdf-link" href="./src/'
                    + rutInput + '.pdf" download>PDF</a> <--\
               </div>'
          )
          $('.pdf-container').append(
               '<br><div>Para ingresar otro RUT,\
               <a id="btn-recargar" href="">recargue</a>\
               el sitio web.</div>'
          )
     }
})


$('p').click(function(){
     console.log('hola')
})

$("#on-off").click(function(){
     $("#contenedor").toggle()
})

$("#add").click(function(){
     $("#contenedor").addClass("container")
})

$("#add").hover(function(){
     console.log('nanii')
})
