(function(){
	module.exports = {
		init : function(callback){
			var Mongoose = require('mongoose');

			var db = Mongoose.connection;

			db.on('error', console.error.bind(console, 'Não foi possível estabelecer a conexão com MongoDb:\n\n'));
			db.once('open', function() {
				console.log('Conexão com MongoDb realizada com sucesso.')

				callback();
			});

			Mongoose.connect('mongodb://localhost:27017/product-manager');			
		}
	}	
})();