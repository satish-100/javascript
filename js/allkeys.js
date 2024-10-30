//a, g, b, j, c, i, d


const obj = {
    "a": {
    "b": {
    "c": {
    "d": "h"
  }
  }
  },
  "g": {
  "j": {
  "i": "p"
  }
  }
  }
  let newArr =  []
    const getKeys = (obj)=>{
      
      for(let keys in obj){
        newArr.push(keys)
        if(typeof obj[keys] == 'object' && obj[keys] !== null){
          getKeys(obj[keys])
        }
      }
      
      return newArr
      
    }
    
    
    const r =  getKeys(obj)
    console.log(r)