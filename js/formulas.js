// Basic math formulaas
function addition(num1, num2){
  return num1 + num2;}
addition(2, 3)

function subtraction(num1, num2){
  return num1 - num2;}
subtraction(5,3)

function multiplication(num1, num2){
  return num1 * num2;}
  multiplication(5, 5)

function division(num1, num2){
  return num1 / num2;}
  division(36, 3)

// Area formulaas
function areaSquare(num){
  let a = (num * num * num * num)
  return a;} 
  areaSquare(2)


function areaRectangle(length, width){
  return length * width;}
  areaRectangle(6,4)

function areaParallelogram(base, height){
  return base * height;
}
  areaParallelogram(8,4)

function areaTriangle(base, height){
  return .5 * base * height;
}
  areaTriangle(6,8)

function Circle(radius) {
  return (radius * radius * Math.PI);
  radius(10)
}

function Sphere(radius){
  return (4 * Math.PI * (radius * radius));
}
radius(8)

// Surface Area formulas
function surfaceAreaCube(side){
  return 6(Math.pow(side,2));
}

function surfaceAreaCylinder(radius, height){
  return 2 * Math.PI * radius * height;
}

// Perimeter formulas
function perimeterSquare(side){
  return 4(side);
}

function perimeterRectangle(length, height){
  return 2(length) + 2(width);
}

function perimeterTriangle(side1, side2, side3){
  return side1 + side2 + side3;
}

function perimeterCircle(diameter){
  return Math.PI * diameter;
}

// Volume formulas
function volumeCube(side){
  return Math.pow(side,3);
}

function volumeRectangular(length, width, height){
  return length * width * height;
}

function volumeCylinder(radius, height){
  return Math.PI * Math.pow(radius,2) * height;
}
