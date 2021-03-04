const express=require('express');
const app=express();
const morgan=require('morgan');

app.set('port',3000);

app.use(morgan('dev'));
app.use(express.json());

app.use(require('./routes/rutas'))

app.listen(app.get('port'));
console.log("mi primer servidor");
