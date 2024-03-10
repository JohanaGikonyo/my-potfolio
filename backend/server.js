const express = require('express')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT
const MONGO_URI = process.env.MONGO_URI
app.use(cors())
app.use(express.json())
const usermodel = require('./models/Users')
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("successfully connected to the database")

    })
    .catch(e => {
        console.error("An error occured ", e)
    })
app.post("/signin", async (req, res) => {
    const { email, password, message } = req.body;

    try {
        const user = await usermodel.findOne({ email: email })

        if (user) {
            user.message.push(message)
            await user.save();
            res.json("success")
        } else {
            const salt = await bcrypt.genSalt(10)

            const hashedPassword = await bcrypt.hash(password, salt)
            const data = {
                email, password: hashedPassword
                ,
                message

            }
            await usermodel.insertMany(data)

            res.json("success")

        }
    }
    catch (e) {
        console.error("An error occured", e)

    }
})
app.get('/', (req, res) => {
    res.json({ "message": "Hello There!" })
})
app.listen(port, () => console.log("server running on port", port))



