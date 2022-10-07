const express = require('express')
const app = express()
const axios = require('axios')
const port = 3000

app.get('/',(req, res)=>{
    res.send("AWS lambda function available to test. http://159.203.181.243:3000/say?keyword=hello")
})

app.get('/say', (req,res) => {
    axios.get(`https://4iextolskg4tmhfly4lsbfrjmi0wvxts.lambda-url.us-east-1.on.aws/test/say?keyword=${req.query.keyword}`)
    .then(result => {
        res.status(200)
        res.send(result.data)
    })
    .catch(err => {
        res.status(400)
        res.send(err)
    })
})

app.listen(port, () => {
    console.log('API listening on port',port)
})