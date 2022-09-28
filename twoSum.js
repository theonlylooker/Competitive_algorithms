function quickSort(arr, leftPos, rightPos, arrLength) {
  let initialLeftPos = leftPos;
  let initialRightPos = rightPos;
  let direction = true;
  let pivot = rightPos;
  while (leftPos - rightPos < 0) {
    if (direction) {
      if (arr[pivot] < arr[leftPos]) {
        quickSort.swap(arr, pivot, leftPos);
        pivot = leftPos;
        rightPos--;
        direction = !direction;
      } else leftPos++;
    } else {
      if (arr[pivot] <= arr[rightPos]) {
        rightPos--;
      } else {
        quickSort.swap(arr, pivot, rightPos);
        leftPos++;
        pivot = rightPos;
        direction = !direction;
      }
    }
  }
  if (pivot - 1 > initialLeftPos) {
    quickSort(arr, initialLeftPos, pivot - 1, arrLength);
  }
  if (pivot + 1 < initialRightPos) {
    quickSort(arr, pivot + 1, initialRightPos, arrLength);
  }
}
quickSort.swap = (arr, el1, el2) => {
  let swapedElem = arr[el1];
  arr[el1] = arr[el2];
  arr[el2] = swapedElem;
};

function nthIndex(str, pat, n) {
  var L = str.length,
    i = -1;
  while (n-- && i++ < L) {
    i = str.indexOf(pat, i);
    if (i < 0) break;
  }
  return i;
}

const twoSum = (nums, target) => {
  console.time("measure");
  numsLength = nums.length;
  quickSort(nums, 0, numsLength - 1, numsLength);
  let index = -1;
  let i = 0;

  while (index == -1) {
    const isLeft = Math.abs(target - nums[i]);
    index = nums.findIndex((element) => element == isLeft);
    i++;
  }
  console.log(nums);
  console.log([i - 1, index]);
  console.timeEnd("measure");
};

const twoSum2 = (nums, target) => {
  try {
    if (nums.length < 2 || nums.length > 10 ** 4)
      throw "Array length is too long";
    console.time("measure");
    let index = -1;
    let i = 0;
    isLeft = 0;
    while (index == -1) {
      if (target > 0) {
        if (target > nums[i]) {
          isLeft = target - nums[i];
        } else {
          isLeft = nums[i] - target;
        }
      } else {
        if (nums[i] > 0) {
          if (target > nums[i]) {
            isLeft = nums[i] - target;
          } else {
            isLeft = target - nums[i];
          }
        } else {
          isLeft = target - nums[i];
        }
      }
      console.log(isLeft);
      if (isLeft == nums[i]) {
        index = nthIndex(nums, isLeft, 2);
      } else {
        index = nums.indexOf(isLeft);
      }
      i++;
    }
    console.log(nums);
    console.log([i - 1, index]);
    console.timeEnd("measure");
  } catch (error) {
    console.log(error);
    return -1;
  }
};

const twoSum3 = (nums, target) => {
  const mymap = new Map();
  let i = 0;
  while (!mymap.has(target - nums[i])) {
    mymap.set(nums[i], i);
    i++;
  }
  console.log(nums, target);
  console.log(mymap.get(target - nums[i]), i);
};

// twoSum([3, 2, 4], 6);
// twoSum2([3, 2, 4], 6);
// twoSum([2, 7, 11, 15], 9);
//twoSum2([2, 7, 11, 15], 9);
// twoSum([3, 3], 6);
// twoSum2([-1, -2, -3, -4, -5], -8);

//twoSum3([3, 2, 4], 6);
//twoSum3([2, 7, 11, 15], 9);
//twoSum3([3, 3], 6);
twoSum3([-1, -2, -3, -4, -5], -8);
