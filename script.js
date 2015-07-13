var cards = {
  cardA: {
    image: 'url("/Users/kcoulter/Documents/RicolettaCemeteryLocks/IMG_0199")',
    class:"rustyLock",
    matched: false
  },
  cardB: {
    image: 'url("/Users/kcoulter/Documents/RicolettaCemeteryLocks/IMG_O254")',
    class: "yale",
    matched: false
  },
  cardC: {
    image: 'url("/Users/kcoulter/Documents/RicolettaCemeteryLocks/IMG_0223")',
    class: "rustyGreen",
    matched: false
  }
}
function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

var cardNameArray = Object.keys(cards);
var cardArray = [];

for(var i = 0; i < cardNameArray.length; i++){ //creates an array of objects
  cardArray.push(cards[cardNameArray[i]]) //how to access the card objects
  cardArray.push(cards[cardNameArray[i]]) //creates a double for every card
}

Shuffle(cardArray);
///I need to access class cards.cardA.class
for(var i = 0; i < cardArray.length; i++){
  $("tr").append("<td class =" + cardArray[i].class + "></td>")
}

//attach a click event to cards that will reveal it's bakcground image
