const { json } = require('express/lib/response');
const https = require('https');
// Get Method 

const options1 ={
    hostname:"jsonplaceholder.typicode.com",
    port:443,
    path:"/users",
    method:"Get",
};

const req1 = https.request(options1,(res)=>{
     res.on("data", (data) => {
         process.stdout.write(data);
    });
});
req1.on("error",(error)=> {
      console.log(error);
});
req1.end();

//post method


const options2 ={
    hostname:"jsonplaceholder.typicode.com",
    port:443,
    path:"/users",
    method:"Post",
};

const req2 = https.request(options2,(res)=>{
     res.on("data", (data) => {
         process.stdout.write(data);
    });
});
req2.on("error",(error)=> {
      console.log(error);
});

const data = JSON.stringify({
      name:"jaswanth",
});
req2.write(data);
req2.end();


// put method

const options3 ={
    hostname:"jsonplaceholder.typicode.com",
    port:443,
    path:"/users/1",
    method:"Put",
};

const req3 = https.request(options3,(res)=>{
     res.on("data", (data) => {
         process.stdout.write(data);
    });
});
req3.on("error",(error)=> {
      console.log(error);
});
const data1 = JSON.stringify({
    name:"kavya",
})
req3.write(data1);
req3.end();


// Delete Method


const options4 ={
    hostname:"jsonplaceholder.typicode.com",
    port:443,
    path:"/users/1",
    method:"Delete",
};

const req4 = https.request(options4,(res)=>{
     res.on("data", (data) => {
         console.log("delete Status")
         process.stdout.write(data);
    });
});
req4.on("error",(error)=> {
      console.log(error);
});
req4.end();
