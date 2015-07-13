var cards = {
  cardA: {
    image: "images/IMG_0199.jpg",
    class:"rustyLock",
    matched: false
  },
  cardB: {
    image: "http://regencypharmacy.com/images/puppy.png",
    class: "puppy",
    matched: false
  },
  cardC: {
    image: "images/IMG_0223.jpg",
    class: "rustyGreen",
    matched: false
  }
}

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
    console.log(compareArray);
    setImage()
  }
};

function cardsMatch(array){
  if(array[0] == array[1]){
    console.log("It's a match!");
    return true
  }
  else{
    return false
  }
}

// function setSleve(){
//   $("." + compareArray[0]).css("background-image", sleeve)
//   $("." + compareArray[1]).css("background-image", sleeve)
//   compareArray = [];
// }

var cardNameArray = Object.keys(cards);
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
  $("tr").append("<td class =" + cardArray[i].class + "></td>")
}

//attach a click event to cards that will reveal it's bakcground image
$("table").on("click", function(){
  numClicks++
  getTwoCards()
  if(numClicks == 2){
    console.log(cardsMatch(compareArray));
    if(!cardsMatch(compareArray)){
      //need to use compare array to target class
      console.log("nope");
      //need delay here
      var timeout = setTimeout(function(){
        $("." + compareArray[0]).css("background-image", sleeve)
        $("." + compareArray[1]).css("background-image", sleeve)
        compareArray = [];
      },700)
    }
    else{
      compareArray = [];
      //remove event listener
    }
    numClicks = 0;
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
