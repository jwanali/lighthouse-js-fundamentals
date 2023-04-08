var instructorWithLongestName = function (instructors) {
  longestName = instructors[0];
  for (let index = 1; index < instructors.length; index++) {
    if (instructors[index].name.length > longestName.name.length) {
      longestName = instructors[index];
    }
    
  }
  return longestName;
}


console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));