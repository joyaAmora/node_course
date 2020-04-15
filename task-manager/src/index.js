const express = require('express')
require("./db/mongoose")
const userRouter = require("./routes/user.routes")
const taskRouter = require("./routes/user.routes")

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log("Server listening on"+port)
})