//  1
// Input: [1, 2, 3, 2, 4, 3] Finding Duplicates in an Array
// Output: [2, 3]
// const arr = [1, 2, 3, 2, 4, 3]
// const f1 = (arr)=>{
//     //return arr.filter((item,i)=>arr.indexOf(item)==i)
//     let newArr = []
//      let obj = {}
//      for(let i=0;i<arr.length;i++){

//      if(obj[arr[i]]){
//         obj[arr[i]] +=1
//      }
//      else{
//         obj[arr[i]] =1
//      }
//      }
//      for(let i in obj){
//         if(obj[i] !==1){
//             newArr.push(Number(i))
//         }
//      }
//      return newArr
// }
// const result = f1(arr)
//console.log(result)

//  2
//debounce
// function debounce(func, delay) {
//     let timeout;
//     return function(...args) {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => func.apply(this, args), delay);
//     };
// }

// 3
// Input: "Hello World"
// Output: 3 (vowels: e, o, o) Count Vowels in a String

// const f1 = (str) => {
//   const s = "aeiouAEIOU";
//   let count = 0;
//   for (let i of str) {
//     if (s.includes(i)) {
//       count++;
//     }
//   }

//   return count;
// };
// const result = f1("Hello World");
// console.log(result);

// 4 capitilize
// const s = "my name is satish"
// const f1 = (str)=>{
//     let reverseStr = ""
//     let shouldCapital = true
//     for (let i=0;i<str.length;i++){
//          if(shouldCapital){
//              reverseStr += str[i].toUpperCase()
//              shouldCapital = false
//          }
//          else{
//              reverseStr += str[i]
//          }
//          if(str[i]==" "){
//              shouldCapital = true
//          }

//     }
//     return reverseStr
// }

// const result = f1(s)
// console.log(result)

//5 first non repeating

// const s = "satish";
// const f1 = (str) => {
//   let obj = {};
//   for (let i of str) {
//     if (obj[i]) {
//       obj[i] += 1;
//     } else {
//       obj[i] = 1;
//     }
//   }
//   for (let i of str) {
//     if (obj[i] == 1) {
//       return i;
//     }
//   }

//   return obj;
// };

// const result = f1(s);
// console.log(result);

//6

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1] (because nums[0] + nums[1] = 2 + 7 = 9)
// let nums = [2, 7, 11, 15,5,4]
// let target = 9
// const f1 = (n,k)=>{
//     let newArr = []
//      for(let i=0;i<n.length;i++){
//          for(let j=i+1;j<n.length;j++){
//              if(n[i]+n[j]==k){
//                  newArr.push(i,j)
//              }
//          }
//      }

//    return newArr

// }

// const result = f1(nums,target)
// console.log(result)

//7

// Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3
// Output: [5, 6, 7, 1, 2, 3, 4]
// let nums = [1, 2, 3, 4, 5, 6, 7]
// let k = 2
// const f1 = (n,k)=>{

//     let arr = n.slice(n.length-k)
//     let arr1 = n.slice(0,n.length-k)

//    return [...arr,...arr1]

// }

// const result = f1(nums,k)
// console.log(result)

//8  Kadane's Algorithm
// Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6 (because the subarray [4, -1, 2, 1] has the largest sum)
// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const f1 = (nums) => {
//   let maxSoFar = nums[0];
//   let maxEndingHere = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
//     maxSoFar = Math.max(maxSoFar, maxEndingHere);
//   }
//   return maxSoFar;
// };

// const result = f1(nums);
// console.log(result);

//9
// const obj = [
//     { id:1 ,name:"satish",score :2 },
//     { id:2 ,name:"satish",score :4 },
//     { id:1 ,name:"satish",score :3 },
//     { id:3 ,name:"satish",score: 6 },
   
//   ]
//   const f1 = (obj)=>{
//        let newObj = {}
      // for (const {id,name,score} of obj){
      //     if(newObj[id]){
      //         newObj[id].score += score
      //     }
      //     else{
      //         newObj[id] =  {id,name,score}
      //     }
      // }
  // using reduce 
//        return obj.reduce((acc,item)=>{
//            let {id,name,score} = item
//            if(acc[id]){
//                acc[id].score += score
//            }
//            else{
//                acc[id] = {id,name,score}
//            }
//            return acc
//        },{})
//      return Object.values(acc)
  
       
//   }
  
//   const result = f1(obj)
//   console.log(result)



// flaten array 
// const arr = [1,[2,4,[2,5,6]]]
// const flattenArr = (arr)=>{
//   //return arr.flat(Infinity)
//   let newArr = []
//   for(let i=0;i<arr.length;i++){
//     if(Array.isArray(arr[i])){
//       newArr.push(...flattenArr(arr[i]))
//     }
//     else{
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }
// const r =  flattenArr(arr)
// console.log(r)

//largest element find
// const arr = [4,1,4,6,8,4,2]
// const largestElement = (arr)=>{
//   let largest =0; 
//   for(let i=0;i<arr.length;i++){
//        if(arr[i]>largest){
//          largest = arr[i]
//        }
//   }
//   return largest
// }
// const r =  largestElement(arr)
// console.log(r)

// longest common prefix 
// const arr =  ["flower", "flow", "flight"]
// const longestCommon = (arr)=>{
// let prefix =  arr[0] 
// console.log(arr[0].indexOf(prefix))
//   for(let i=0;i<arr.length;i++){
//     while(arr[i].indexOf(prefix) !== 0){
//       prefix =  prefix.slice(0,-1)
//     }
//   }
//   return prefix
// }
// const r =  longestCommon(arr)
// console.log(r)

//rotation of array 
// const arr =  [1,4,1,2,6,8,4]
// const rotatArray = (arr,k)=>{
//   const l =  arr.length
//  const arr1=  arr.slice(l-k)
//  const arr2=  arr.slice(0,l-k)
//  return [...arr1,...arr2]
// }
// const r =  rotatArray(arr,3)
// console.log(r)


//Intersection of two array 
//// Input: [1, 2, 2, 1], [2, 2]
// Output: [2, 2]
// const arr1 = [1, 2, 2, 1]
// const arr2 = [2, 2]
// const Intersection = (arr1,arr2)=>{
//  return  arr1.filter((item,i)=>arr2.includes(item))
// }
// const r =  Intersection(arr1,arr2)
// console.log(r)

// capitilize first char 
// const str = "hello world"
// const capitalize = (str)=>{
//   const arr =  str.split(" ")
//   return arr.map((item)=>{  
//       return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()      
//   }).join(" ")
// }
// const r = capitalize(str)
// console.log(r)

