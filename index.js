// THIS IS THE ENTRY POINT FOR MY APPLICATION
//

import express from "express"

const app = express()

function stringify(s) {
  return JSON.stringify(s)
}

/* -----------------------------------------------
 * defines the behavior of a single path of website 
 * This particular app.route is to the root path.
 * req, res : request and response
 * -----------------------------------------------*/
app.get("/", (req, res) => {
  console.log("GET request received! root")
  console.log(req.query)
  //HTML of the website!
  let s = "<b>THIS IS THE WEBSITE ROOT</b>"
  s += `: ${req.method} to ${req.url}<br />`

  // potential function to filter stuff :) 
  // blue team you know what to do
  s += `
  <script>
    function filter(input) {
      return input;
    }
  </script>
  `

  // the (javascript) function that runs on submit
  // I could have made this more fancy, but this is the easiest form to read
  s += `
  <script>
    function test() {
      // visible in inspect element
      console.log("clicked!!");

      const text = document.getElementById("body");
      console.log(text.value);

      const current = document.getElementById("output").innerHTML;
      console.log(current);

      document.getElementById("output").innerHTML = current + "<br />Post: " + filter(text.value);
    }
  </script>
  `

  //the input form for the user
  s += `
  <form onsubmit="test(); return false"> 
    <label for="body">Text:</label>
    <input type="text" id="body">
    <input type="submit" value="Post">
  </form>
  `

  s += `
  <div id="output">
    <b>Submitted Posts:</b>
  </div>
  `

  s += `<br/> Parameters: ${stringify(req.params)}`
  s += `<br/> Query: ${stringify(req.query)}`
  res.send(s)
})

/* -----------------------------------------------
 * takes in the first path after root as anything.
 * the path taken is stored as req.params.test
 * -----------------------------------------------*/
// app.get("/:test", (req, res) => {
//   console.log("GET request received!")
//   console.log(req.params)
//   console.log(req.query)
//   let s = "THIS IS THE WEBSITE"
//   s += `: ${req.method} to ${req.url}`
//   s += `<br/> Parameters: ${stringify(req.params)}`
//   s += `<br/> Query: ${stringify(req.query)}`
//   res.send(s)
// })

//the website will listen on port 8080.
// visit localhost:8080 when running the server
// WILL ONLY BE VISIBLE ON THE SAME MACHINE 
// app.listen(8080, "172.21.109.129")
app.listen(8080)

