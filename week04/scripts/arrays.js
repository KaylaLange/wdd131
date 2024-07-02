const steps = ["one", "two", "three"];
const listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join();

const grades = ['A', 'B', 'A'];
function convertGradeToPoints(grades) {
   let points = 0;
   if (grade === 'A') {
    points = 4;
   } else if (grade === 'B') {
    points = 3;
   }
   return points;
}
const gpaPoints = grades.map(convertGradeToPoints); 
const pointsTotal = gpaPoints.reduce(function (total, item){ // option 1
    return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

//option 2
// const pointsTotal = gpaPoints.reduce((total, item) => total + item); 
// const gpa = pointsTotal / gpaPoints.length; 

//option 3
// const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'] //option 1
const shortWords = words.filter(function (word) {
return word.length < 6;
});

//option 2
// const shortWords = words.filter((word) => word.length < 6);

const numbers = ['12', '34', '21', '54']
const luckyNumber = 21;
let luckyIndex = numbers.indexOf(luckyNumber);
