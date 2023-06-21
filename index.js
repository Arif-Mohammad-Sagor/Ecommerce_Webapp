const app = require('./app');
const connectToMongoDB = require('./config/connectDB')
const port = process.env.PORT || 4000;

app.listen(port, async() => {
    await connectToMongoDB();
    console.log(`my server is running well on  port: ${port}`)
})