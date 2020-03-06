// add solution here
function theBeatlesPlay(arrMusicians, arrInstruments) {
  let result = [];
  for (let i = 0; i < arrMusicians.length; i++) {
    let string = `${arrMusicians[i]} plays ${arrInstruments[i]}`;
    result.push(string);
  }
  return result;
}

function johnLennonFacts(arrFacts) {
  let result = [];
  while(arrFacts.length > 0) {
    result.push(arrFacts.unshift() + '!');
  }
  return result;
}