//impoet json-server
const jsonServer = require('json-server')

//create server
const employeeServer = jsonServer.create()

//router
const router = jsonServer.router('db.json')

//middleware
const middleware = jsonServer.defaults()

//use middleware
employeeServer.use(middleware)
employeeServer.use(router)

//set port

const port = 3000 || process.env.PORT 

//listen
employeeServer.listen(port,()=>{
    console.log(`employee server is running at ${port} and ready to fetch requests`);
})