const express = require('express');
const path = require('path');
const port = 3000;


const app = express()
app.set('view engine', 'hbs');

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {

    res.render('index', {
        pageTitle: 'Nazwa Quizu',
    })
})

app.get('/quiz', (req, res) => {

    res.render('quiz', {
        pageTitle: 'Quiz',
    })
})

app.get('/addQuestion', (req, res) => {

    res.render('addQuestionForm', {
        pageTitle: 'Add Own Question',
    })
})

app.listen(port, () => {
    console.log('Serwer uruchomiony');
});