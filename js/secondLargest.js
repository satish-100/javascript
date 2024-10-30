
const arr = [4,1,4,6,8,8,4,2]
const largestElement = (arr)=>{
  let largest =  -Infinity
  let secondLargest =  -Infinity
  for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
       secondLargest =  largest
       largest = arr[i]
    }
    else if(arr[i] > secondLargest && arr[i] !== largest){
       secondLargest = arr[i]
    }
  }
  return {secondLargest,largest}
}

const r =  largestElement(arr)
console.log(r)