const {Router} = require('express');
const router = Router();




router.get('/',(req,res)=>{
    // res.send('Hola Mundo')
     //res.sendFile(path.join(__dirname,'index.html'));
     res.render('index');
     });
     router.get('/admin',(req,res)=>{
     // res.send('Modulo administrador')    
    res.render('./admin/',{Nombre:'Jeison Lopez'})  
 
 });

 router.post('/',(req,res) =>{

   const fort = req.body;
   console.log(req.body);
 }
 );
 
 module.exports = router;
 
 