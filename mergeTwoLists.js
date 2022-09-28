// const recursionMerge = (list1, list2, mergeList) => {
//   if (list1.val == undefined || list2.val == undefined) {
//     return;
//   }
//   if (list1.val <= list2.val) {
//     console.log(list1.val);
//     mergeList.push(list1.val);
//     return recursionMerge(list1.next, list2, mergeList);
//   } else if (list2.val < list2.val) {
//     console.log(list2.val);
//     mergeList.push(list2.val);
//     return recursionMerge(list1, list2.next, mergeList);
//   }
// };

// const mergeTwoLists = (list1, list2) => {
//   let list3 = [];
//   recursionMerge(list1, list2, mergeList);
//   console.log("what is in here", list3);
//   return list3;
// };

const recursiveMerge = (node1, node2) => {
  if (!node1) return (list.next = node2);
  if (!node2) return (list.next = node1);

  if (node1.val < node2.val) {
    list.next = node1;
    list = list.next;
    recursiveMerge(node1.next, node2);
  } else {
    list.next = node2;
    list = list.next;
    recursiveMerge(node1, node2.next);
  }
};

const mergeTwoLists = (list1, list2) => {
  let list = new ListNode();
  let result = list;
  recursiveMerge(list1, list2);
  console.log(result.val);
};
