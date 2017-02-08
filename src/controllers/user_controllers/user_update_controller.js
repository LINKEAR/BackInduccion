
var modelUser = require('../../models/user_model');


function update(req,res,next){
    //var userreq=req.body.obj;
    var userReq=req.body;

    if(userReq != "undefined" && userReq != "null")
    {
            //var membership=JSON.parse(userreq);

            var ObjectID = require('mongodb').ObjectID;
            idUser=new ObjectID(userReq._id);
            userReq._id=idUser;
            console.log(userReq);
            var model=new modelUser(userReq);
            var err = model.validateSync();
            if(err) res.status(500).json({message:'ERROR_SERVER_VALIDATE'}); console.log("INTERNAL ERROR:"+err);
            

            modelUser.findOneAndUpdate(idUser,userReq,(err, user) =>{
             //modelUser.findOneAndUpdate({_id: idUser}, model,{upsert: true}).exec(function(err, user) {
                if (err) res.status(500).json({message:'ERROR_SERVER_UPDATE'}); 
                 res.status(200).json({user:userReq});
            });
    }
    else
        res.json(500,{message:'FORM_404'});


}
module.exports = {
                    update
                 };
