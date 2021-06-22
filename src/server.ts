import express from "express";

const app = express();

app.get("/test", (request, response) => {
    
    return response.send("Ola NLW 06");  

});

app.post("/test-post", (request, response) => {

    return response.send("Ola NLW metodo POST");

});

app.listen(3000, () => console.log("Server is running"));