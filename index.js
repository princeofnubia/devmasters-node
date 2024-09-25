// Importing the function in the trigonometry module
const {
  calculateAreaOfTriangle,
  calculatePerimeterOfTriangle,
} = require("./trigonometry");

let triangleA = {
  base: 12,
  height: 15,
  s1: 12,
  s2: 12,
  s3: 14,
};

let triangleB = {
  base: 16,
  height: 40,
};

let triangleC = {
  base: 10,
  height: 20,
};

console.log(
  "Area of Triangel",
  calculateAreaOfTriangle(triangleA.base, triangleA.height)
);

console.log(
  "Area of Triangel",
  calculatePerimeterOfTriangle(triangleA.base, triangleA.height)
);
