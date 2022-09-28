// const isIsomorphic = (s, t) => {
//   let myMap1 = new Map();
//   let myMap2 = new Map();
//   for (let i = 0; i < s.length; i++) {
//     if (myMap1.has(s[i])) myMap1.set(s[i], myMap1.get(s[i]) + 1);
//     else myMap1.set(s[i], 1);
//     if (myMap2.has(t[i])) myMap2.set(t[i], myMap2.get(t[i]) + 1);
//     else myMap2.set(t[i], 1);
//   }
//   const first = myMap1.values();
//   const second = myMap2.values();
//   let i = 0;
//   while (i < myMap1.size) {
//     if (first.next().value != second.next().value) {
//       return false;
//     }
//     i++;
//   }
//   console.log(i);
//   return true;
// };
// const isIsomorphic = (s, t) => {
//   const mydict = new Map();
//   const repeat = [];
//   let result = "";
//   for (let i = 0; i < s.length; i++) {
//     if (repeat.includes(t[i])) {
//       continue;
//     }

//     if (!mydict.has(s[i])) {
//       mydict.set(s[i], t[i]);
//       repeat.push(t[i]);
//     }
//   }
//   [...s].forEach((element) => (result += mydict.get(element)));
//   if (result == t) {
//     console.log("asd");
//     return true;
//   }
//   console.log(result);
//   return false;
// };

// const isIsomorphic = (s, t) => {
//   const myMap1 = new Map();
//   const myMap2 = new Map();

//   for (let i = 0; i < s.length; i++) {
//     if (!myMap1.has(s[i]) && !myMap2.has([t[i]])) {
//       myMap1.set(s[i], t[i]);
//       myMap2.set(t[i], s[i]);
//     } else if (myMap1.get(s[i]) != t[i] || myMap2.get(t[i]) != s[i]) {
//       console.log("error");
//       return false;
//     }
//   }
//   console.log("good to go");
//   return true;
// };
isIsomorphic("badc", "baba");
