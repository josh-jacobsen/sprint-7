//// Mimimum
//// Write a function min that takes two arguments and returns
//// their minimum.

function minimum(val1, val2){
  if (val1 < val2){
    return val1;
  } else {
    return val2;
  }
}

console.log(minimum(30, 20));

//// Recursion

function isEven(val){
  // termination condition
  if (val < 0){
    return "Negative numbers are not permitted";
  }
  // base action
  else if (val === 0){
    return true;
  }
  else if (val === 1){
    return false;
  }
  // recursive action
  else {
    return isEven(val - 2);
  }
}


console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));


//// Bean Counter
function countBs(str){
  count = 0;
  for (i = 0; i < str.length; i++){
    if (str[i] === "B"){
      count++;
    }
  }
  if (count === 0){
    return "Character not found";
  } else {
    return count;
  }
}

function countChar(str, target){
  count = 0;
  for (i = 0; i < str.length; i++){
    if (str[i] === target){
      count++;
    }
  }
  if (count === 0){
    return "Character not found";
  } else {
    return count;
  }
}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4