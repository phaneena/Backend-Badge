const event=require("events")
const eventEmitter=new event()

eventEmitter.on("greet",(name)=>{
    console.log(`hello ${name}`)
})

eventEmitter.emit("greet","haneena")
eventEmitter.emit("greet","minha")

// eventEmitter.removeListener("greet","haneena")