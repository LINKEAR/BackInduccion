var modelUser = require('./user_model_environment');
exports.save = function (req, res, next) {
    //var userRequest=req.body.obj;
     var userRequest=req.body;
    if(userRequest != "undefined" && userRequest != "null")
        {
          //var user=JSON.parse(userRequest);
          console.log(userRequest);
          //console.log(user);
          //crea un nuevo objeto de tipo User
          var model=new modelUser(userRequest);
          var err = model.validateSync();
          if(err) res.status(500).json({message:'ERROR_SERVER_VALIDATE'});

          model.save((err,userStore)=>{
            if (err) res.status(500).json({message:'ERROR_SERVER_SAVE'});
            res.status(200).json({user:userStore});
          });
        }
    else
       res.status(401).json({message:'FORM_404'});
};

