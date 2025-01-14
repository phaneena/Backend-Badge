let success=false
const pr=new Promise((resolve,reject)=>{
    if(success){
        resolve("promise successfully")
    }
    else{
        reject("rejected successfully")
    }
})
pr.then(()=>{
    console.log("Resolved",success)
})
.catch((error)=>{
    console.log(error)
})


