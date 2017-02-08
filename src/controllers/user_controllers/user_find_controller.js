var modelUser = require('./user_model_environment');
function findAll(req, res, next) {
    modelUser.find({}).sort('-user').exec((err, userFind)=> {
         if (err) res.status(500).json({message:'ERROR_SERVER_FIND'});
         if (!userFind) res.status(404).json({message:'FIND_EMPTY'});
         res.status(500).json(userFind);
    });
};


module.exports = {
					findAll
				 };
