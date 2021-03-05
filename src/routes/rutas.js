const {Router}=require('express');
const router=Router();

const data=require('./data.json');
console.log(data);
router.get('/asistencia',(req,res)=>{
    res.json(data);
});
router.get('/asistencia/:id',(req,res)=>{
    const {id}=req.params;
    data.forEach(juego => {
        if(juego.id==id){
            res.send(juego.title);
        }
    });
});
router.get('/asistencias',(req,res)=>{
    res.send('funciona');
});
router.get('/reporte',(req,res)=>{
    res.send('funciona');
});
router.get('/reportes',(req,res)=>{
    res.send('funciona');
});
router.get('/tarea',(req,res)=>{
    res.send('homie');
});
router.get('/tareasincumplidas',(req,res)=>{
    res.send('homie');
});
router.post('/asistencia',(req,res)=>{
    const {title,version,coleccion}=req.body;
    if(title && version && coleccion){
        const id=data.length+1;
        const nuevoJuego={id,...req.body};
        data.push(nuevoJuego);
        res.send(data);
    }
    else{
        res.status(500).json({error:'no data'});
    }

    console.log(title);
    res.send("ok");
});
module.exports=router;