// Plus One --------------------------------------------------------------------
const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

// My solution:
var plusOne1 = function (digits) {
  const number = BigInt(digits.join(""));
  const plusOne = (number + 1n)
    .toString()
    .split("")
    .map((i) => Number(i));

  return plusOne;
};

// Best practice:
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
};

// console.log(plusOne(digits));

// Merge Sorted Array -----------------------------------------------------
const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

var merge = function (nums1, m, nums2, n) {
  while (n) {
    let j = n + m - 1;
    nums1[j] = nums2[nums2.length - n];
    n--;
  }

  return nums1.sort(function (a, b) {
    return a - b;
  });
};

// console.log(merge(nums1, m, nums2, n));

// 20. Valid Parentheses -----------------------------------------------------
const s = "()";

var isValid = function (s) {
  let stack = [];
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid(s));
