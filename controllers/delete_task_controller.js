const ToDo = require('../models/todo');
module.exports.deleteTask = function(req, res){
    console.log(req.body)
    console.log(typeof(req.body));
    let id = Object.keys(req.body);
    console.log(id);
    for(let i of id){
        ToDo.findByIdAndDelete(i, function(err){
            if(err){
                console.log("Error in deleting an object from database")
                return;
            }
            
        });
    }
    return res.redirect('back');

};