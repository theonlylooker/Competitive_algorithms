var longestContinuousSubstring = function (s) {
  if (s.length == 1) {
    return 1;
  }
  let sumP = 1;
  let sumT = 1;
  let minC = s[0];
  for (let i = 0; i < s.length - 1; i++) {
    minC = s[i + 1];
    if (minC.charCodeAt() - s[i].charCodeAt() == 1) {
      sumP += 1;
    } else {
      if (sumP > sumT) {
        sumT = sumP;
      }
      sumP = 1;
    }
  }
  if (sumP > sumT) sumT = sumP;
  console.log(sumT);
  return sumT;
};
longestContinuousSubstring("abbdabc");
