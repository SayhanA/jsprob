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
// const nums1 = [1, 2, 3, 0, 0, 0],
//   m = 3,
//   nums2 = [2, 5, 6],
//   n = 3;

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
// const s = "()";

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

// console.log(isValid(s));

//21. Merge Two Sorted Lists -------------------------------------------------
const list1 = [1, 2, 4],
  list2 = [1, 3, 4];

var mergeTwoLists = function (list1, list2) {
  let list = [];

  for (let i = 0; i < list2.length; i++) {
    for (let i = 0; i < list1.length; i++) {}
  }

  return list;
};

// console.log(mergeTwoLists(list1, list2));

// 268. Missing Number ------------------------------------------------------

// const nums = [3, 0, 1];
// var missingNumber = function (nums) {
//   for (let i = 0; i < nums.length + 1; i++) {
//     if (nums.indexOf(i) === -1) {
//       return i;
//     }
//   }
// };

var missingNumber = function (nums) {
  const n = nums.length;
  const someOfn = (n * (n + 1)) / 2;
  const sumOfNums = nums.reduce((sum, num) => sum + num, 0);
  return someOfn - sumOfNums;
};

// console.log(missingNumber(nums));

// 58. Length of Last Word---------------------------------------------------
const s = "Hello World";

var lengthOfLastWord = function (s) {
  const arr = s.trim().split(" ");
  return arr[arr.length - 1].length;
};

// console.log(lengthOfLastWord(s));

// 83. Remove Duplicates from Sorted List ----------------------------------
const head = [1, 1, 2, 3, 3];

// Not Linked List soluteion
// var deleteDuplicates = function (head) {
//   const newlist = [];
//   for (let i = 0; i < head.length; i++) {
//     if (newlist[newlist.length - 1] !== head[i]) {
//       newlist.push(head[i]);
//     }
//   }
//   return newlist;
// };

// Linked List solution

var deleteDuplicates = function (head) {
  const current = head;
  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
};

// console.log(deleteDuplicates(head));

// 169. Majority Element ---------------------------------------------------
const nums = [2, 2, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3];

var majorityElement = function (nums) {
  const obj = {};
  let major = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]] = obj[nums[i]] + 1;
    }
  }

  for (let key in obj) {
    // console.log(key, obj[key]);
    if (obj[key] > obj[major]) {
      major = key;
    }
  }

  return Number(major);
};

// console.log(majorityElement(nums));

// 231. Power of Two -------------------------------------------------------
const n = 16;

var isPowerOfTwo = function(n) {
  if(n <= 0) return false;

  while(n%2 === 0){
    n=n/2
  }

  return n === 1;
};

console.log(isPowerOfTwo(n));