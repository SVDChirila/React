const http = require("http")
const fs = require("fs")
const url = require("url")
const path = require('path');



http.createServer((req, res) => {


    if ((/^\/categories($|\/$)/gi).test(req.url)) {
    categTest(req, res);
    }else  if (/^\/products($|\/)$/gi.test(req.url)) {
    prodTest(req, res)

    }else if((/^\/products\/[0-9]+($|\/$)/gi).test(req.url)) {
        
        prodGet(req,res);

    }else {
        res.writeHead(404)

    }
})
    .listen(5000, "127.0.0.1")



const categTest = (req, res) => {
// console.log('zzz',path.resolve(__dirname,"./categories.json"));
    
        res.writeHead(200, "Content-Type: Application/JSON")
        const categ = fs.readFile(path.resolve(__dirname,"./categories.json"), (err, data)=>{
            if(err) throw err;
            res.end(data);
        })

    }


const prodTest = (req, res) => {

   
        res.writeHead(200, "Content-Type: Application/JSON")

        const prod = fs.readFile(path.resolve(__dirname,"./prod.json"), (err,data) =>{
            if(err) throw err;
            res.end(data);
        })

    
}


const prodGet = (req, res) => {


        const id = req.url.split("/").pop();
        res.writeHead(200, "Content-Type: Application/JSON")

        const prod = fs.readFile(path.resolve(__dirname ,'./prod.json'), (err,data) =>{
            if(err) throw err;
            const prodList = JSON.parse(data)
        
            res.end(JSON.stringify(prodList.filter((item)=> {

            return item.id == id;
            
        }).pop()))
        })
        
}

