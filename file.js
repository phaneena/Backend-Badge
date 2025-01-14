const fs=require("fs")

fs.writeFileSync("file1","hello everyone")
fs.writeFileSync("file1","hiii everyone")

// fs.writeFile("file1","hello haneena",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("file creted successfully")
// })
fs.appendFile("file1","\nhaneena",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("file updated")
})

fs.readFile("file1","utf-8",(err,message)=>{
    if(err){
        console.log(err)
    }
    console.log(message)
})



// fs.unlink("file1",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("delete success")
// })

for(i=1;i<=10;i++){
    fs.writeFile(`file${i}`,`hello evryone`, (err)=>{
        if(err){
            console.log(err)
        }
        console.log("file created")
    })
}

for(i=1;i<=10;i++){
    fs.unlink(`file${i}`,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("delete success")
})
}