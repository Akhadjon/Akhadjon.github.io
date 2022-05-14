const express = require("express");
const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
    let view = "<ul>"

    for(element of array){
        view+='<li>${element}</li>'
    }
  res.send(view);
});
app.post("/result", (req, res) => {
  res.redirect(`/output?name=${req.body.name}&age=${req.body.age}`);
});

app.get("/add", (req, res) => {
  res.send(<form method= "POST">
      <input name ="value">
        <input type="Submit"></input>
  </form>);
});

app.listen(3000, () => {
  console.log(`Server is running at port 3000`);
});
