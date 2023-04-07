const judgeVegetable = function (vegetables, metric) {
 
  var startValue = 0;
  var winner = {};
  if (metric === 'redness') {
    for (let index = 0; index < vegetables.length; index++) {
      if (vegetables[index].redness > startValue) {
        startValue = vegetables[index].redness;
        winner = vegetables[index];
      }
    }
    return winner.submitter;
  } else if (metric === 'plumpness') {
    for (let index = 0; index < vegetables.length; index++) {
      if (vegetables[index].plumpness > startValue) {
        startValue = vegetables[index].plumpness;
        winner = vegetables[index].submitter;
        
      }
      
    } 
    return winner.submitter;
  } else {
    return ("sorry! your metric doesn't exist")
  };
}
const vegetables = [
  {
    submitter: 'old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
const metric = 'redness';
let result = judgeVegetable(vegetables, metric)
console.log(result)