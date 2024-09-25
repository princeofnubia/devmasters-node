const { calculateSum } = require("./arithmetic");
const calculateAreaOfTriangle = (base, height) => {
  return (1 / 2) * base * height;
};

const calculatePerimeterOfTriangle = (s1, s2, s3) => {
  return calculateSum([s1, s2, s3]);
};

module.exports = {
  calculateAreaOfTriangle,
  calculatePerimeterOfTriangle,
};
