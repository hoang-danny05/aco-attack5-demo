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
  let s = "<b>THIS IS THE WEBSITE ROOT</b>"
  s += `: ${req.method} to ${req.url}`
  s += `<br/> Parameters: ${stringify(req.params)}`
  s += `<br/> Query: ${stringify(req.query)}`
  res.send(s)
})

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
app.listen(8080)
