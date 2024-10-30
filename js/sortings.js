// bubble sort 
let arr =  [1,4,1,6,3,9,3,2]
const bubbleSort = (arr)=>{
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
  return arr
}
const r = bubbleSort(arr)
console.log(r)


// const stringSort = (str)=>{
//   const arr =  str.split("")
// for(let i =0;i<arr.length;i++){
//   for(let j=0;j<arr.length-i-1;j++){
//     if(arr[j]>arr[j+1]){
//        [arr[j],arr[j+1]] =  [arr[j+1],arr[j]]
//     }  
//   }
// }
// return arr.join("")
// }
// const r = stringSort(str)
// console.log(r)


//check array sort or not 
// const isSorted = (newArr)=>{ 
//   for(let i=0;i<newArr.length-1;i++){
//   if(newArr[i]>newArr[i+1]){ 
//     return false
//   }
// }
// return true
// }