// Greet a user by name
function greet(name) {
  return "Hello, " + name + "!";
}
function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "even";
  }
  return "odd";
}
function convertMinutesToSec(minutes) {
  return minutes * 60;
}
function canRead(age) {
  return age >= 3;
}
function countDown(number) {
  if (number === 0) {
    return "Done!";
  }
  return number + " " + countDown(number - 1);
}
function maxOfTwo(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}