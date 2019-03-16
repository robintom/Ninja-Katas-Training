var bowlingScore = function(rolls) {
  // If you knock down fewer than 10 pins with 2 balls, your frame score is the number of pins knocked down

  // If you knock down all 10 pins with 2 balls (spare), you score the amount of pins knocked down plus a bonus - amount of pins knocked down with the next ball

  // If you knock down all 10 pins with 1 ball (strike), you score the amount of pins knocked down plus a bonus - amount of pins knocked down with the next 2 balls
  return -1;
};

console.log(
  0 ==
    bowlingScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
);
console.log(
  190 ==
    bowlingScore([
      9,
      1,
      9,
      1,
      9,
      1,
      9,
      1,
      9,
      1,
      9,
      1,
      9,
      1,
      9,
      1,
      9,
      1,
      9,
      1,
      9
    ])
);
console.log(
  300 == bowlingScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])
);
console.log(
  11 ==
    bowlingScore([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      10,
      1,
      0
    ])
);
console.log(
  12 == bowlingScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 1, 0])
);
