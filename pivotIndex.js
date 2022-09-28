//Sumando en izquierda y derecha al mismo tiempo, si es que uno de los dos es mayor se suma en el otro lado
// const pivotIndex = (nums) => {
//   let left = 0;
//   let right = nums.length - 1;
//   let i = 1;
//   while (left != right) {
//     nums[right]>nums[left] ?  :
//   }
// };

// const pivotIndex1 = (nums) => {
//   let i = 0;
//   let pivotSum = Math.floor(
//     nums.reduce((partialSum, a) => partialSum + a, 0) / 2
//   );
//   while (Math.abs(pivotSum) >= nums[i]) {
//     pivotSum -= nums[i];
//     i++;
//   }
//   if (pivotSum == 0) {
//     i = -1;
//   }
//   console.log(i);
//   return i;
// };

const pivotIndex2 = (nums) => {
  let s = 0;
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    s += nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    if (left == s - nums[i] - left) return i;
    left += nums[i];
  }
  return -1;
};

pivotIndex2([1, 7, 3, 6, 5, 6]);
pivotIndex2([1, 2, 3]);
pivotIndex2([2, 1, -1]);
pivotIndex2([-1, -1, -1, -1, -1, -1]);
