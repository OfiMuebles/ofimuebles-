const express= require('express');
const epxhbs=require('express-handlebars');
const app=express();
const path=require('path');

app.set('port',process.env.PORT||4000)

//
app.use(require('./router'));


// MOtor de vistas hand
app.set('views',path.join(__dirname,'./views'));

app.engine('.hbs', epxhbs({
    defaultLayout:'main',
    extname:'.hbs'


}));

app.set('view engine', '.hbs');
app.use(express.json()); 
app.use(express.urlencoded({extended: false}))
//archivos staticos

app.use(express.static(path.join(__dirname,"./public")));

app.listen(app.get('port'),()=>{
    console.log('Servidor escuchando en el puerto: ',4000)
});
