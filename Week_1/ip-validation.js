function isValidIP(str) {
  const splitArray = str.split(".");
  if (splitArray.length !== 4) {
    return false;
  }

  for (i = 0; i < splitArray.length; i++) {
    const value = splitArray[i];
    console.log(value);
    if (!value.match(/^\d+$/)) {
      console.log("i am here");
      return false;
    } else if (value < 0 || value > 255) {
      return false;
    } else if (value.length > 1 && value[0] === "0") {
      return false;
    }
  }
  return true;
}

function isValidIP(str) {
  const splitArray = str.split(".");
  if (splitArray.length !== 4) {
    return false;
  }

  return splitArray.every(value => {
    if (!value.match(/^\d+$/)) {
      return false;
    } else if (value < 0 || value > 255) {
      return false;
    } else if (value.length > 1 && value[0] === "0") {
      return false;
    }
  });
  return true;
}

function isValidIP(str) {
  const splitArray = str.split(".");
  if (splitArray.length !== 4) {
    return false;
  }

  return !splitArray.some(value => {
    return (
      !value.match(/^\d+$/) ||
      (value < 0 || value > 255) ||
      (value.length > 1 && value[0] === "0")
    );
  });
}

//Tests
// console.log(isValidIP("0.0.0.0"), true);
// console.log(isValidIP("137.255.156.100"), true);
// console.log(isValidIP("12.255.56.1"), true);
// console.log(isValidIP(""), false);
console.log(isValidIP("abc.def.ghi.jkl"), false);
// console.log(isValidIP("123.456.789.0"), false);
// console.log(isValidIP("12.34.56"), false);
// console.log(isValidIP("01.02.03.04"), false);
// console.log(isValidIP("256.1.2.3"), false);
// console.log(isValidIP("1.2.3.4.5"), false);
// console.log(isValidIP("123,45,67,89"), false);
// console.log(isValidIP("1e0.1e1.1e2.2e2"), false);
// console.log(isValidIP(" 1.2.3.4"), false);
// console.log(isValidIP("1.2.3.4 "), false);
// console.log(isValidIP("12.34.56.-7"), false);
// console.log(isValidIP("1.2.3.4\n"), false);
// console.log(isValidIP("\n1.2.3.4"), false);
