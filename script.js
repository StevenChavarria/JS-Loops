//while loop
let i = 0;
document.write('<strong>While loop - number count</strong>');
while (i < 5) {
    document.write('</br>The number is: ' + i);
    i++;
}
document.write('<br><br>');

//for loop - print students from array
let students = new Array("Pedro", "Juan", "Cristofer", "Edwin", "Elizabeth");
document.write("<b>For loop - print students from array</b><br />");
for (i = 0; i < students.length; i++) {
    document.write(students[i] + "<br />");
}
document.write('<br><br>');

//do-while loop  - Even numbers less than 20
document.write("<strong>Do-While loop  - Even numbers less than 20</strong><br />");
i = 2;
do {
    document.write(i + "<br />");
    i = i + 2;
} while (i < 20)
document.write('<br><br>');


//for-in  - Iterate Through an Object
document.write("<strong>For-in  - Iterate Through an Object</strong><br />");
const student = {
    name: 'Carlos',
    class: 10,
    age: 15
}
for ( let key in student ) {
    document.write(key +': ' + student[key] + '</br>');
}
document.write('<br><br>');

//For-of  - print cars from array
document.write("<strong>For-of  - print cars from array</strong><br />");
let cars = ["Toyota", "Nissan", "BMW", "Mercedes"];
for (let car of cars) {
    document.write(car + "<br />");
}
