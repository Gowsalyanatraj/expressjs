import express from "express"

const app = express()

app.get("/hello", (request, response) => {
    response.send("hy hai");
})

app.get("/abc", (request, response) => {
    response.send("hy hai-1");
})

app.get("/xyz", (request, response) => {
    response.send("hy hai-2");
})


var data = [1, 2, 3, 4, 5]

app.get("/printdata", (request, response) => {
    console.log(user_data[1].rol);
    response.send(data)
})

var user_data = [{
    "name": "sachin",
    "rol": "s:dev"
},
{
    "name": "Mr.x",
    "rol": "any"
}]

// task to print Mr.x's rol
//  router name or api name  === > /printmrx

app.get("/printmrx", (request, response) => {
    // .rol

    response.send(user_data[1].rol)
})


// print with status 
/**
    {
        "status":"true"
        "data":user_data
    }
 */

app.get("/userdata", (request, response) => {
    // .rol
var obj = {
   
   "status":true,
   "data":user_data

}
    response.send(obj)
})


app.listen(2002, () => {
    console.log("app  is running on 2002");
}) //www.atre.com/