function theBeatlesPlay(musicians, instruments) {
var arr = []
for (let i=0; i<musicians.length; i++) {
  var string = musicians[i] + " plays " + instruments[i]
  arr.push(string)
}
return arr
}

function johnLennonFacts(facts) {
  let i=0
  while(i<facts.length) {
    facts[i] += "!!!"
  }
  return facts
}

function iLoveTheBeatles(number) {
  var arr = []
  let num = number
  do {
    arr.push("I love the Beatles!")
    num++
  } while (num<15) {
    arr.push(15-num)
  }
  return arr
}
