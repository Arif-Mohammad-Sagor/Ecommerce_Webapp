const express = require('express');
const app = express();
const userRouter = require('./routes/userRoute');

app.use(express.json());

app.use('/api/user', userRouter);

app.use((req, res) => {
    res.send({message:"Invalid request"})
})

module.exports = app;