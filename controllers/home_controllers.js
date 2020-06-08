const ToDo=require('../models/todo');
module.exports.home = function(req, res){
    // console.log('from the route controller');

    ToDo.find({}, function(err, todos){
        if(err){
            console.log("Error in fetching task from db");
            return;
        };
        return res.render('home', {
            title: "ToDo App",
            todo_list: todos
        });
    });
};
//okay so here u need to exxport todo.from models..
//now try