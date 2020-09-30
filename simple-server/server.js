const express = require('express')

const app = express()

//ce se intampla cand se da get la server
//intram pe google la localhost:8080/ping si va afisa pong
app.get('/ping',(req,res) => {

    res.send('pong')
} )

app.listen(8080) //tot traficul de pe portul 8080 ajunge la acest server
