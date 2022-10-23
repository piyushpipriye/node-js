module.exports =reqFilter=(req,res,next)=>{                                // middleware in different file 
    if(!req.query.age){
        res.send("Please provide age")
    }
    else if(req.query.age < 18){
        res.send("You are not eligible to view the page")
    }
    else{
        next();
    }
    }