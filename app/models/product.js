(function(){
	var mongoose = require('mongoose');

	module.exports = mongoose.model('Product', {
		nome: String,
		descricao: String,
		preco: Number
	});	
})();

