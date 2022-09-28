const isSubsequence = (s, t) => {
  let size = 0;
  let i = 0;
  for (let j = 0; j < s.length; j++) {
    while (i < t.length) {
      if (s[j] == t[i]) {
        size += 1;
        i++;
        break;
      }
      i++;
    }
  }
  if (size == s.length) {
    console.log("yep");
    return true;
  }
  return false;
};

const isSubsequence2 = (s, t) => {
  let j = 0;
  let size = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[j] == t[i]) {
      size++;
      j++;
    }
  }
  if (size == s.length) {
    console.log("yep");
    return true;
  }
  return false;
};

isSubsequence2("aaaaaa", "bbaaaa");
