function sum (number1, number2) {
  var summed = number1 + number2;
  //console.log('The sum of ' + number1 + ' and ' + number2 + ' is ' + summed + '.');//
  return summed;
}

function multiply (number1, number2) {
  var multiplied = number1 * number2;
  //console.log('The product of ' + number1 + ' and ' + number2 + ' is ' + multiplied + '.');
  return multiplied;
}

function sumAndMultiply (number1, number2, number3){
  var summedAgain = sum(number1, sum(number2, number3));
  var multipliedAgain = multiply(number1, multiply(number2, number3));
  console.log(number1 + ' and ' + number2 + ' and ' + number3 + ' sum to ' + summedAgain + '.');
  console.log('The numbers ' + number1 + ' and ' + number2 + ' and ' + number3 + ' have a product of ' + multipliedAgain + '.');
  return [summedAgain, multipliedAgain];
}

function sumArray(newArray){
  var sumOfArray = 0;
  for (var i = 0; i < newArray.length; i++){
    currentNum = newArray[i];
    sumOfArray += currentNum;
  }
  console.log(newArray + ' was passed in as an array of numbers, and ' + sumOfArray + ' is their sum.');
}
