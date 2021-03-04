const {Router}=require('express');
const router=Router();


router.get('/asistencia',(req,res)=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id=urlParams.get('idalumno')
    res.send(id);
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

module.exports=router;