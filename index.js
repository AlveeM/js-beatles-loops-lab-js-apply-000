// add solution here
function theBeatlesPlay(arrMusicians, arrInstruments) {
  let result = [];
  for (let i = 0; i < arrMusicians; i++) {
    let string = `${arrMusicians[i]} plays ${arrInstruments[i]}`;
    result.push(string);
  }
}