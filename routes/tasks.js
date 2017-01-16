var express = require('express');
var router = express.Router();
var mongojs = require('mongojs') ;
var db = mongojs('mongodb://fadei:fadesa12@ds163718.mlab.com:63718/tasks',['tasks']);

router.get('/tasks', function(req , res, next ){
  //  res.send('task api');
  db.tasks.find(function(err,tasks){
    if (err){
        res.send(err);

    }
    else {
        res.json(tasks)

    }
  });

});


router.get('/task/:id', function(req, res, next){
    db.tasks.findOne({_id:mongojs.ObjectId(req.params.id)},function (err,task){
      if (err){
        res.sends(err);
      }else
      res.json(task)
    });
});


router.post('/task', function(req,res,next){
  var task = req.body;
  if (!task.title || (task.isDone+'')){
    res.status(400);
    res.json({"error":"Bad Data"})
  }else{

    db.tasks.save(task,function(err,task){
      if (err){
        res.sends(err);
      }else
      res.json(task)
    });
  }
});


router.delete('/task/:id', function(req, res, next){
    db.tasks.remove({_id:mongojs.ObjectId(req.params.id)},function (err,task){
      if (err){
        res.sends(err);
      }else
      res.json(task)
    });
});

// update

router.put('/task/:id', function(req, res, next){
  var task = req.body;
  var updatedTask = {};
  if(task.isDone){
    updatedTask.isDone = task.isDone;
  }
  if(task.title){
    updatedTask.title = task.title;
  }
  if (!updatedTask){
    res.status(400);
    res.json({"error" : "Bad data"})
  }else {
    db.tasks.update({_id:mongojs.ObjectId(req.params.id)},updatedTask,{},function (err,task){
      if (err){
        res.sends(err);
      }else
      res.json(task)
    });
  }

});

module.exports= router;
