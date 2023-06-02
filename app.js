express = require('express');
const port=3000;
const bodyParser = require("body-parser");
app=express();
// app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/static', express.static('public'));
app.set('view engine', 'pug');


app.get('/',(req,res)=>{
    res.render('bmi');
})

app.post('/', (req,res)=>{
    var weight = req.body.col2w;
    var height = req.body.col3h;
    var bmi = weight/(height/100)**2;
    console.log(bmi);
    res.render('bmi',{bmi:bmi});

})

app.listen(port,()=>{console.log('assignment 2 server running')});


/*

Formula: weight (kg) / [height (m)]2

The formula for BMI is weight in kilograms divided by height in meters squared. If height has been measured in centimeters, divide by 100 to convert this to meters.

*/