var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

var sort = students.sort(function(a,b){
  var nameA = a.name.toLowerCase();
  var nameB = b.name.toLowerCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  };
  if (nameA === nameB) {
    return a.age - b.age;
  } 
});

console.log(students);


// if (s)
// var results = students.sort(function (a,b) {
//   return a.age - b.age;
// });

// var namesort = students.sort(function(b) {
//   return b.name});
// console.log(results);
// console.log(namesort);