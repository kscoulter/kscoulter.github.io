var array = ["square", "star", "moon"];

for(var i = 0; i < array.length; i++){
  $("tr").append("<td class =" + array[i] + "></td>")
}

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

var keyArray = Object.keys(cards);
