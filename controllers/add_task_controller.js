const ToDo = require('../models/todo');
module.exports.addTask = function(req, res){
    ToDo.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    }, function(err, newToDo){
            if(err){console.log("Error in creating new task");
        return;}

        console.log("******", newToDo);
        return res.redirect('back');
    });
}