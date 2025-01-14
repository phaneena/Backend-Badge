// const http=require("http")

// const PORT=7000
// const server=http.createServer((req,res)=>{
//     res.write("hello haneena")
//     res.end()
// })
// server.listen(PORT,()=>{
//     console.log(`server creteed http://localhost:${PORT}`)
// })


const http=require("http")

const server=http.createServer((req,res)=>{
    if(req.url==="/home"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.write("hiii wvwwww")
        res.end()
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("404 Not Found");
        res.end();
    }
})
server.listen(7000,()=>{
    console.log(`server running http://localhost:${7000}`)
})