const ex = require('express')
const app = ex()
const bodyx = require('body-parser')
const conx = require('./database/database-file')
const reportx = require('./database/Report')

// database
conx
   .authenticate()
   .then(() => {
       console.log('Connection made with database')
   })
   .catch((msgErro) => {
       console.log(msgErro)
   })

// View Engine
app.set('view engine', 'ejs') 
app.use(ex.static('public'))

// Body parser
app.use(bodyx.urlencoded({extended: false}))
app.use(bodyx.json())

// Pages
app.get('/', (req, res) => {
    res.render('home')
})


app.post('/save', (req, res) => {

    var titlex = req.body.title
    var descriptionx = req.body.description

    reportx.create({
        titulo: titlex,
        descricao: descriptionx
    }).then(() => {
        res.redirect('reports')
    })
})

app.get('/reports', (req, res) => {
    reportx.findAll({raw: true, order:[
        ['id','DESC']
    ]}).then(perguntas => {
        res.render('reports',{
            perguntasx: perguntas
        })
    })

})


// Server
app.listen(8080,() => {
      console.log('Running!')
})