const express = require('express')
const {chain,last} = require('lodash')
const ytdl = require('ytdl-core')
const {validate, Joi} = require('express-validation')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static('public'))

const getResolutions = (formats) => {

    return chain(formats)
    .filter(format=>{return format.height})
    .map(format=>{return format.height})
    .uniq()
    .orderBy(null,'desc')
    .value()
}

app.get('/ytUrl',(req,res,next)=>{

    const {id,url} = req.query

    res.header('Content-Disposition','attachment; filename="video.mp4"')

    let a = ytdl(url,{
        format:'mp4'
    }).pipe(res)
    

    // ytdl.getInfo(id).then(({videoDetails,formats})=>{

    //     const {title, thumbnails} = videoDetails

    //     const thumbnailURL = last(thumbnails).url

    //     const resolutions = getResolutions(formats)

    //     console.log(formats)
    //     console.log(typeof formats)

    //     res.json({title,thumbnailURL,resolutions})

    // }).catch(err=>{next(err)})

})

app.listen(9000,()=>{

    console.log('Listining on 9000')

})