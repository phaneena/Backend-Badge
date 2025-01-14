// const express=require("express")
// const app=express()

// app.get("/",(req,res)=>{
//     res.send("Hello world")
// })

// app.listen(7001,()=>{
//     console.log("server running")
// })

const express = require('express');
const app = express();

// Application-Level Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Pass control to the next middleware or route
});

// Route with middleware
app.get('/', (req, res) => {
    res.send('Welcome to the Homepage!');
});

// Error-Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
