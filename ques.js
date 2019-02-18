let inputArr = [3, 4, 2, 5, 2, 19, 8, 15, 1, 19, -10, -12],
  neededDiff = 2,
  counter = 0,
  arr = [...new Set(inputArr)],
  l = 0,
  r = 0,
  len = arr.length;

// Sort Arr
arr.sort(function(a, b) {
  return a - b;
});

console.log("Sorted and unrepeatative array");
console.log(arr);

// Checking for pairs with difference as neededDiff
while (r < len) {
  let diff = Number(arr[r]) - Number(arr[l]);

  if (diff == neededDiff) {
    console.log(`( ${arr[r]} , ${arr[l]} )`);
    counter++;
    l++;
    r++;
  } else if (diff > neededDiff) {
    l++;
  } else {
    r++;
  }
}

console.log(`No. of required pairs = ${counter}`);
