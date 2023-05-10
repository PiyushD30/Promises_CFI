let cfipromise = new Promise((resolve, reject) => {
    const prompt= require("prompt-sync")()
    const a= prompt("Enter 1st Number:")
    const b= prompt("Enter 2nd Number:")
   if (a % 2 == 0 && b % 2 ==0 )
     resolve("success")
  else
     reject("error")
 })
 
 async function async_await() {
   try {
     const result = await cfipromise
     console.log(result)
   } 
    catch (error) {
     console.log(error)
   }
 }
 async_await()
 