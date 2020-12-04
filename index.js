const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

const pdfTemplate = require('./documents');
const chalanTemplate = require('./documents/chalan')
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// IDENTITY CARD
app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});
// CAHLAN COPY TEMPLATE
// pdf.create(htm, options).toFile('./pdfname.pdf', function(err, res) {
app.post('/createchalan', (req, res) => {
    pdf.create(chalanTemplate(req.body), {
        format: 'A4',
        orientation: 'landscape',
        margin: '1cm'
      }).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

// GET IDENTITY CARD PDF
app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})



// GET CHALAN COPY PDF
app.get('/chalan-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

app.listen(port, () => console.log(`Listening on port ${port}`));