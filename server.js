const express = require('express')
const mongoose = require('mongoose')
const user= require('./models/user.model.js')
const address= require('./models/address.model.js')
const app = express()
const port = 5000



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

  



mongoose.connect("mongodb+srv://admin:Frd3ykXoLLozF1ZG@backend.iz8al.mongodb.net/?retryWrites=true&w=majority&appName=Backend")
.then(()=>{
    console.log("DB connected")
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
})
.catch(()=>{
    console.log("DB not connected")
})


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.post('/register', async(req, res) => {
    const { name, add } = req.body
    const newUser = await user.create({ name })
    await address.create({ address: add, userId: newUser._id });
    res.send(`Form submitted successfully. Name: ${name}, Address: ${add}`);
});