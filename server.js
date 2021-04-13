const express = require('express')
const app = express()
const morgan = require('morgan')
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.get('/', (req,res,next) => {
    res.send('HI')
})
app.listen(3000, () => {
    console.log('listening on port 3000')
})