const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const path = require("path");

const publicDirectory = path.join(__dirname, "../public");
app.use(express.static(publicDirectory));

app.set("view engine", "hbs");

const viewsPath = path.join(__dirname, "../templates/views");
app.set("views", viewsPath);

const hbs = require("hbs");
const partialsPath = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partialsPath);

const news = require("./tools/news");

app.get("/home", (req, res) => {
  news((error, data) => {
    console.log(data);
    return res.render("index.hbs", { data });
  });
});

//app.get('',(req,res)=>{
//     res.render('index', {
//         title: 'title',
//         text: 'text'
//   })
// })

// app.get('',(req,res)=>{
//   res.render('index',{
//   })
// })

// app.get('/', (req, res) => {
//     console.log(req.query.apiKey)
// })

app.listen(port, () => {
  console.log("Server is running", port)
})
