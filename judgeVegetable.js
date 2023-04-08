const judgeVegetable = function (vegetables, metric) {
  var winner = 0;
  var winnerName = '';
  for (let index = 0; index < vegetables.length ; index++) {

    if ( metric === 'redness') {
      if (vegetables[index].redness >= winner) {
        winner = vegetables[index].redness;
        winnerName = vegetables[index].submitter;
      } 
    } else  if ( metric === 'plumpness') {
      if (vegetables[index].plumpness >= winner) {
        winner = vegetables[index].plumpness;
        winnerName = vegetables[index].submitter;
      } 
    }
    
  }
  return winnerName;
  
};

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
];
const metric = 'plumpness';
let result = judgeVegetable(vegetables, metric);
console.log(result);