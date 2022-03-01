const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static('public'))

app.post('/ytUrl',(req,res)=>{

    console.log(req.body.url)
    res.redirect(req.body.url)

})

app.listen(9000,()=>{

    console.log('Listining on 9000')

})