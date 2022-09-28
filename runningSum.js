const runningSum = (nums) => {
  let suma = 0;
  let array = new Array();
  for (let i = 0; i < nums.length; i++) {
    suma += nums[i];
    array.push(suma);
  }
  console.log(array);
  return array;
};
//fastest
const runningSum2 = (nums) => {
  try {
    if (nums.length < 1 || nums.length > 1001)
      throw "Array length to big or to small";
    if (nums.some((element) => element > 10 ** 6 || element < -1 * 10 ** 6))
      throw "An element is bigger or lower than the specified range";
    let suma = 0;
    for (let i = 0; i < nums.length; i++) {
      suma += nums[i];
      nums[i] = suma;
    }
    console.log(nums);
    return nums;
  } catch (error) {
    console.log(error);
  }
};
//slowest
const runningSum3 = (nums) => {
  let suma = 0;
  const res = nums.map((element) => {
    suma += element;
    console.log(suma);
    return suma;
  });
  console.log(res);
  return res;
};

runningSum3([1, 2, 3, 4]);
