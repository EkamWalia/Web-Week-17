const express=require('express');
const mysql=require('mysql');
const config=require('../config');

const router=express.Router();

const connection = mysql.createConnection(config);
connection.connect();

//getting all the movies from the database
router.get('/',function(req,res,next){
	connection.query('SELECT * FROM movies',function(err,result,fields){
		if(err)
			throw err;
		res.json(result);
	});
});

//getting the details of a particular movie
router.get('/:id',function(req,res,next){
	const id=req.params.id;
	connection.query('SELECT * FROM movies WHERE id=?',[id],function(err,result,fields){
		if(err)
			throw err;
		if(result.length==0)
			res.send('No movie with id found');
		else
			res.json(result[0]);
	});
});


//adding a new movie
router.post('/',function(req,res,next){
	const params=req.body;
	if(params.name && params.duration){
		let insertJSON={};
		insertJSON['name']=params.name;
		insertJSON['duration']=params.duration;
		connection.query('INSERT INTO movies SET ?',insertJSON,function(err,result,fields){
			if(err)
				throw err;
			res.json({
				status: 'Successfully inserted',
				insertID : result.insertId
			});
		});
	}
});


//updating the details of a paticular movie
router.put('/:id',function(req,res,next){
	const id=req.params.id;
	const params=req.body;
	if(params.name && params.duration){
		let insertJSON={};
		insertJSON['name']=params.name;
		insertJSON['duration']=params.duration;
		connection.query('UPDATE movies SET ? WHERE id=?',[insertJSON,id],function(err,result,fields){
			if(err)
				throw err;
			if(result.changedRows==0){
				res.json({
					status : 'No record changed'
				});
			}
			else{
				res.json({
					status: 'Successfully updated'
				});
			}
		});
	}
});

//deleting a movie from the records
router.delete('/:id',function(req,res,next){
	const id=req.params.id;
	connection.query('DELETE FROM movies WHERE id=?',id,function(err,result,fields){
		if(err)
			throw err;
		if(result.affectedRows==0){
			res.json({
				status : "movie not found in db"
			});
		}
		else{
			res.json({
				status : "deleted Successfully"
			});
		}
	});
});

module.exports=router;