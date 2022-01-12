function palindromoFrom1(string) {
  let stringReverse = string.split("").reverse().join("");

  return stringReverse;
}

function palindromoFrom2(string) {
  let stringReverse = [];
  string.split("").map(stg => {
    stringReverse.unshift(stg);
  })


  return string == stringReverse.join("");
}

console.log(palindromoFrom2("oi"))