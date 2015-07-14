var card = function(image, clas){
  this.image = image;
  this.class = clas;
}

var cards = [
  new card("images/IMG_0199.jpg", "rustyLock"),
  new card("http://regencypharmacy.com/images/puppy.png","puppy"),
  new card("images/IMG_0223.jpg","rustyGreen"),
  new card("http://www.pet-insurance-policy.com/images/kitten.jpg", "whiteKitty"),
  new card("http://orig02.deviantart.net/2bf2/f/2015/070/1/1/wolf_and_cat_by_jesibellwinterwolf-d8lb3c7.jpg", "wolfCat"),
  new card("https://s-media-cache-ak0.pinimg.com/236x/15/26/6f/15266f9abbe49aa19633286bbc7b61f1.jpg", "baby"),
  new card("http://www.ilikewallpaper.net/iphone-4s-wallpapers/download/3654/Planet-Earth-iphone-4s-wallpaper-ilikewallpaper_com_200.jpg","dryPlanet"),
  new card("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRRoHs-u1o14zH3WEMAryqaR8jyJbC08qmAW05ckwU_3Z8FP-cs","jupiter"),
  new card("http://hqmaniacs.uol.com.br/img/noticia/korra_11032011.jpg","korra")
]


function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

function setImage(){
  for(var i = 0; i < cardArray.length; i++){
    if(cardArray[i].class == classClicked){
      //return cardArray[i].image;
      $(event.target).css("background-image", "url('" + cardArray[i].image + "')");
    }
  }
};

function getTwoCards(){
  if(numClicks <= 2){
    classClicked = $(event.target).attr("class")
    compareArray.push(classClicked);
    setImage()
  }
};

function cardsMatch(array){
  console.log(array);
  var match = false;
  if(array[0] === array[1]){
    console.log("It's a match!");
    match = true;
  }
    return match;
}


  var cardNameArray = Object.keys(cards);
  console.log("cardNameArray is " + cardNameArray);
  var cardArray = [];
  var classClicked;
  var numClicks = 0;
  var compareArray = [];
  var sleeve = "url('https://pbs.twimg.com/profile_images/588424740223627264/oshWYgF9.jpg')"

  //populate card Array
  for(var i = 0; i < cardNameArray.length; i++){ //creates an array of objects
    cardArray.push(cards[cardNameArray[i]]) //how to access the card objects
    cardArray.push(cards[cardNameArray[i]]) //creates a double for every card
  }

  Shuffle(cardArray);
  ///I need to access class cards.cardA.class
  //Append to body
  for(var i = 0; i < cardArray.length; i++){
    $(".table").append("<div class =" + cardArray[i].class + "></div>")
  }

  //attach a click event to cards that will reveal it's bakcground image
  $("div").on("click", function(){
    numClicks++
    getTwoCards()
    if(numClicks == 2){

      if(cardsMatch(compareArray) === false){ //cards don't match
        //need to use compare array to target class
        console.log("nope");
        //need delay here
        var timeout = setTimeout(function(){
          $("." + compareArray[0]).css("background-image", sleeve)
          $("." + compareArray[1]).css("background-image", sleeve)
          compareArray = [];
        },500)
      }
      else if(cardsMatch(compareArray) === true){ //cards match
        console.log(compareArray);
        $("." + compareArray[0]).off()

        compareArray = [];
        //remove event listener
      }
      numClicks = 0;
    }
  })

  $(".reset").on("click", function(){
    for(var i = 0; i < cardNameArray.length; i++){ //creates an array of objects
      cardArray.push(cards[cardNameArray[i]]) //how to access the card objects
      cardArray.push(cards[cardNameArray[i]]) //creates a double for every card
    }

    Shuffle(cardArray);
    ///I need to access class cards.cardA.class
    //Append to body
    for(var i = 0; i < cardArray.length; i++){
      $(".table").append("<div class =" + cardArray[i].class + "></div>")
    }
  })




// var game = {
//   cardNameArray: Object.keys(cards),
//   cardArray: [],
//
//   Shuffle: function(o) {
//   	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
//   	return o;
//   }.bind(this),
//   PopulateArray: function(array) {
//     for(var i = 0; i < this.array.length; i++){ //creates an array of objects
//       this.cardArray.push(cards[cardNameArray[i]]) //how to access the card objects
//       this.cardArray.push(cards[cardNameArray[i]]) //creates a double for every card
//     }
//   }.bind(this),
//
// }
// game.PopulateArray(this.cardNameArray);
// game.Shuffle(this.cardArray);
//
// ///I need to access class cards.cardA.class
// for(var i = 0; i < game.cardArray.length; i++){
//   $("tr").append("<td class =" + game.cardArray[i].class + "></td>")
// }
//
// //attach a click event to cards that will reveal it's bakcground image
// $("table").on("click", function(){
//   //I clicked on a td, what is it's class?
//   classClicked = $(event.target).attr("class")
//   //$(event.target).css("background-image", )
// })
