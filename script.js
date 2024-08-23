function getAreaOfCircle(radius) {
   const area = Math.PI * radius * radius;
   return area; 
}

let area = getAreaOfCircle(3);
console.log(area);

function getCircumfrenceOfCircle(radius) {
   const circumfrence = 2 * Math.PI * radius;
   return circumfrence; 
}

let circumfrence = getCircumfrenceOfCircle(5);
console.log(circumfrence);

function getAreaOfSquare(side) {
   const areaSquare = side * side;
   return areaSquare; 
}

let areaSquare = getAreaOfSquare(7);
console.log(areaSquare);

function getAreaOfTriangle(base, height) {
   const areaTriangle = base * height * .5;
   return areaTriangle; 
}

let areaTriangle = getAreaOfTriangle(12, 4);
console.log(areaTriangle);