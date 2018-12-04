export default function arrowFunction() {
  const square = function(number) {
    return number * number;
  };

  const square2 = number => number * number;

  console.log(square(3));
  console.log(square2(3));

  const adition = function(number1, number2) {
    return number1 + number2;
  };

  const adition2 = (number1, number2) => number1 + number2;

  console.log(adition(3, 2));
  console.log(adition2(3, 2));

  const adition3 = (number1, number2) => {
    console.log("just adding a line to not to erase the curly braces");
    return number1 + number2;
  };

  console.log(adition3(3, 2));
}
