// add solution here
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var array = []
  for ( let i = 0; i < musicians.length; i++ ){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  var array = []
  let i=0
  while (i < facts.length){
    array.push(`${facts[i]}!!!`)
  }
  return array
}

function iLoveTheBeatles(num){
  var array = []
  do {
    array.push("I love the Beatles!");
    num++; 
  } while (num < 15 && num >0);
    return array;
  }
