const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthPlace': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthPlace': 'Illinois'
    },
    'dylan': {
        'age': 29,
        'birthName': 'Dylan',
        'birthPlace': 'Dylan'
    },
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname+ '/index.html')
})

app.get('/api/:rapperName', (req, res)=>{
    const rappersName = (req.params.rapperName.toLowerCase())
    if(rappers[rappersName]){
        res.json(rappers[rappersName])
    } else {
        res.json(rappers['dylan'])
    }
        
})

app.listen(PORT, ()=>{
    console.log(`The server is running on PORT ${PORT}! You better go catch it!`)
})