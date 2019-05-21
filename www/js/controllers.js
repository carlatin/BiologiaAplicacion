angular.module('starter.controllers', [])
.controller("functionAD",function($scope){})
.controller('DashCtrl', function($scope) {})
.controller("controljuego",function($scope){
  $(document).ready(function(){

var checkArray = []; // para verificar si las dos cartas con click son el mismo personaje
var idArray = []; //array para guardar los ids de las cartas que tienen click
var contador = 0;
var fin = 0;
var fields = document.querySelectorAll(".atras");


var images = [
"https://hips.hearstapps.com/es.h-cdn.co/quoes/images/naturaleza/el-tomate-es-una-fruta-una-hortaliza-una-verdura/924689-1-esl-ES/el-tomate-es-una-fruta-una-hortaliza-una-verdura.jpg?resize=480:*",
"https://www.gob.mx/cms/uploads/article/main_image/64946/zanahoria-secundaria.jpg",
"http://www.frutaseladio.com/res/uploads/20160504172132-eladio-broccoli-kg.jpg",
"https://vivatumusica.com/wp-content/uploads/2016/07/naranja-1.jpg",
"https://cdn.shopify.com/s/files/1/2216/7909/products/bananas_mano_2b85952b-96ca-48b8-8056-3d4ba2dc799e_1024x1024.jpg?v=1541215910",
"https://previews.123rf.com/images/atoss/atoss1305/atoss130500095/19695010-pi%C3%B1a-con-las-rebanadas-aisladas-en-blanco.jpg",
"https://comefruta.es/wp-content/uploads/sandia_rallada_sin_semillas2.jpg",
"http://www.delaquintaasucasa.com.ar/wordpress/wp-content/uploads/2015/08/pimientoMix.jpg",
"https://exoticfruitbox.com/wp-content/uploads/2015/10/aguacate.jpg",
"http://www.delaquintaasucasa.com.ar/wordpress/wp-content/uploads/2015/08/pimientoMix.jpg",
"https://exoticfruitbox.com/wp-content/uploads/2015/10/aguacate.jpg",
"https://comefruta.es/wp-content/uploads/sandia_rallada_sin_semillas2.jpg",
"https://previews.123rf.com/images/atoss/atoss1305/atoss130500095/19695010-pi%C3%B1a-con-las-rebanadas-aisladas-en-blanco.jpg",
"https://cdn.shopify.com/s/files/1/2216/7909/products/bananas_mano_2b85952b-96ca-48b8-8056-3d4ba2dc799e_1024x1024.jpg?v=1541215910",
"https://vivatumusica.com/wp-content/uploads/2016/07/naranja-1.jpg",
"http://www.frutaseladio.com/res/uploads/20160504172132-eladio-broccoli-kg.jpg",
"https://www.gob.mx/cms/uploads/article/main_image/64946/zanahoria-secundaria.jpg",
"https://hips.hearstapps.com/es.h-cdn.co/quoes/images/naturaleza/el-tomate-es-una-fruta-una-hortaliza-una-verdura/924689-1-esl-ES/el-tomate-es-una-fruta-una-hortaliza-una-verdura.jpg?resize=480:*"
];
// verificacion de los clicks
function clicked() {
  if ($(this).find(".inner-wrap").hasClass("flipped")) {
    return;
  }
  $(this).find(".inner-wrap").toggleClass("flipped");
  checkArray.push($(this).find("img").attr("src"));
  idArray.push($(this).attr("id"));
  check();
}

$(".carta").on("click", clicked);

//reiniciar el juego
function reiniciar() {
  $(".atras").find("img").remove(); //quitar todas las imagenes actuales
  $(".carta .inner-wrap").removeClass("flipped"); // quitar la classe flipped para volver a su estado inicial
  checkArray = [];
  idArray = [];
  contador = 0;
  fin = 0;
  iniciarJuego();
}
//para verificar el fin del juego
function verificarFin() {
  if (fin === 18) { //si todas las cartas estan volteadas
    alert("Juego finalizado, lo has logrado en " + contador + " intentos");
    reiniciar();
  }
}
//para random de las imagenes
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function iniciarJuego() {



  var arr = shuffleArray(images); //array con las imagenes de forma aleatoria
 // append de las imagenes a la clase para la parte de atras de las cartas
  for (var i = 0; i < fields.length; i++) {
    var img = document.createElement("img");
    img.src = arr[i];
    fields[i].appendChild(img);
  }


}

function check() {
  //si los fields se  han hecho dos clicks
  if (checkArray.length === 2) {
    $(".carta").off("click", clicked);
    setTimeout(function(){
      //si no hay match
      if (checkArray[0] !== checkArray[1]) {
        //voltear las dos cartas seleccionadas
        $("#" + idArray[0]).find(".inner-wrap").removeClass("flipped");
        $("#" + idArray[1]).find(".inner-wrap").removeClass("flipped");
        contador++;
        //vaciar los arrays para la siguiente eleccion
        checkArray = [];
        idArray = [];
        //habilitar el click de nuevo
        $(".carta").on("click", clicked);
      } else {

        contador++;

        fin += 2; // contador para el final del juego, se agregan dos para el contador de fin
        //vaciar los dos arrays
        checkArray = [];
        idArray = [];
        verificarFin();
        $(".carta").on("click", clicked);
      }
      document.querySelector(".counter").innerHTML = contador;
    }, 800);
  }
}



iniciarJuego();

});
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
