var message = '';
var student;
var search;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport( student) {
  var report = '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  return report;
}
// kada ubacimo variablu unutar fukcije ona zivi samo unutrar te funkcije i ne postoji van ove funkcije
while (true) {
  search = prompt('Search students records: type a name [Jody] (or type "quit" to end)');
  if(search === null || search.toLowerCase() === "quit") {
    break;
  }
  
  for (var i = 0; i < students.length; i += 1) {
  student = students[i];
    if (student.name === search) {
      message = getStudentReport ( student);
      print(message);
    }

}
}
// sa while true smo stavili beskonacnu petlju..

