const router = require('express').Router()
const connection = require('./config/connection')



//---------- Routes assign--------
//get movies
router.get('/',(req, res)=>{
    let sql ='select * from movie'
    connection.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)  
        }
    })

})

// get movie
router.get('/:mov_id',(req, res)=>{
    const {mov_id} = req.params
    let sql ='select * from movie where mov_id = ?'
    connection.query(sql,[mov_id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//post movie
router.post('/',( req, res)=>{
    const{mov_title,mov_year,mov_time,mov_lang,mov_dt_rel, mov_rel_country} = req.body

    let sql = `insert into movie(mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country) values('${mov_title}', '${mov_year}', '${mov_time}','${mov_lang}','${mov_dt_rel}','${mov_rel_country}')`
    connection.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Película agregada'})
        }
    })
})

//delete movie 
router.delete('/:mov_id',(req, res)=>{
    const{mov_id} = req.params

    let sql =`delete from movie where mov_id = '${mov_id}'`
    connection.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Película eliminada'})
        }
    })
});

//put movie
router.put('/:mov_id',(req, res)=>{
    const{mov_id}=req.params
    const{mov_title, mov_year, mov_time, mov_lang, mov_dt_rel,mov_rel_country} = req.body

    let sql = `update movie set 
                mov_title ='${mov_title}',
                mov_year='${mov_year}',
                mov_time='${mov_time}',
                mov_lang='${mov_lang}',
                mov_dt_rel='${mov_dt_rel}',
                mov_rel_country='${mov_rel_country}'
                where mov_id = '${mov_id}'`;

    connection.query(sql, (err, rows, fields)=>{

        if(err) throw err
        else{
            res.json({status: 'Película modificada'})
        }
    })

})

module.exports = router