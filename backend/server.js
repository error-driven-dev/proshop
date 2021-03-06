import express from "express"
import products from "./data/products.js"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import colors from "colors"

dotenv.config()
connectDb()

const app = express()
const port = process.env.PORT

app.get("/", (req, res) => {
  res.send("API is running....")
})

app.get("/api/products", (req, res) => {
  res.json(products)
})

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id)

  res.json(product)
})

app.listen(
  port,
  console.log(
    `${process.env.NODE_ENV} server running on port ${port}`.yellow.bold
  )
)
