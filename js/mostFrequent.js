
const arr = [1, 2, 3, 1, 2, 1]

const mostFreq = (arr)=>{
 
 let mostFrequent = 0
 let temp 
 const obj  = {}
 
 for(let i of arr){
   
   obj[i] =  (obj[i] || 0) + 1
 }
 
 for(let j in obj){
   
   if(obj[j]>mostFrequent){
       mostFrequent = obj[j]
         temp = j
      
   }
 }
 
 return temp

 
 
}

const r = mostFreq(arr)

console.log(r)