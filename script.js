///Card set up
///Creating cart constructor
var card = function(image, clas){
  this.image = image;
  this.class = clas;
}
//////////////////////setting the card images/////////////////////
var cards = [
  new card("images/earth.jpg", "earth"),
  new card("images/Jupiter.jpg","jupiter"),
  new card("images/planet.jpg","planet"),
  new card("images/rings.jpg", "rings"),
  new card("images/saturn.jpg", "saturn"),
  new card("images/sun.jpg", "sun"),
  new card("images/venus.jpg","venus"),
  new card("images/alien.png","alien"),
  new card("images/purpleplanet.jpg","purplep")
]

///////////////////Memory Game////////////////
var game = function(){

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
    var numClicks = 0;
    var cardArray = [];
    var classClicked;
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
      if($(event.target).attr("class") == "alien"){
        var audio = new Audio('sound/alien.m4a');
        audio.play();
      }
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
}

game()

$(".reset").on("click",function(){
  $(".table").empty()
  game()
})
