var expect = require('chai').expect;
var request = require('request');
var mongoose = require('mongoose');

var objectId = 0;


describe("Verificações de ambiente", function(){
	describe("Status do servidor node", function() {
		var uri = "http://localhost:3350";
		    it("Com servidor node rodando na porta 3350, deve retornar status http 200", function(done) {
		      request(uri, function(error, response, body){
		      	
		      	expect(response.statusCode).to.equal(200);
		      	done();
		      });
		    });
		  });


	describe("Status do MongoDb", function() {
		var uri = "http://localhost:27017";
		    it("Com mongoDb rodando na porta 27017, deve retornar status http 200", function(done) {
		      request(uri, function(error, response, body){	      	
		      	expect(response.statusCode).to.equal(200);
		      	done();
		      });
		    });
		  });	
});

 describe("Verificações de produtos da API (SUCESSO)", function() {  
 		var uri = "http://localhost:3350/api/product/";

		describe("Cadastrando um produto com informações válidas", function() {
		    it("Com informações válidas de um produto, deve ser possível cadastrá-lo retornando status http 201", function(done) {
		    	var formData = {
		    		nome:"produto criado", 
		    		descricao:"descricao produto criado",
		    		preco: 1.99
		    	};

		      request.post({url:uri, form: formData}, function(error, response, body) {
		        expect(response.statusCode).to.equal(201);
		        var objParse = JSON.parse(body);	        
		        objectId = objParse[objParse.length-1]._id;
		        done();
		      });
		    });
		  });

		describe("Atualizando um prouto com informações válidas", function() {
		    it("Com informações válidas de um produto, deve ser possível atualizá-lo retornando status http 200", function(done) {
		    	var uriPut = uri + objectId;
		    	var formData = {
		    		"nome":"produto alterado", 
		    		"descricao":"descricao produto alterado",
		    		"preco": 1.99
		    	};

		      	request.put({url:uriPut, form: formData}, function(error, response, body) {
		        expect(response.statusCode).to.equal(200);

		        done();
		      });
		    });
		  });

		describe("Buscando um ou mais produtos", function() {
		    it("Com produtos cadastrados, devemos encontrar ao menos um retornando status http 200", function(done) {
		      request.get(uri, function(error, response, body) {
		        expect(response.statusCode).to.equal(200);		        
		        done();
		      });
		    });
		  });

		describe("Buscando um produto", function() {
		    it("Com um id de produto cadastrado, deve ser possível encontrá-lo retornando o status http 200", function(done) {
		      var uriGetById = uri + objectId;	    	

		      request.get(uriGetById, function(error, response, body) {
		        expect(response.statusCode).to.equal(200);		        
		        done();
		      });
		    });
		  });

		describe("Deletando um produto", function() {
		    it("Com um id de produto cadastrado, deve ser possível deletar o produto, retornando o status http 204", function(done) {
		    	var uriDelete = uri + objectId;	    	

		      	request.del(uriDelete, function(error, response, body) {
		        expect(response.statusCode).to.equal(204);
		      
		        done();
		      });
		    });
		  });
});

describe("Verificações de produtos da API (FALHA)", function(){
	var uri = "http://localhost:3350/api/product/";

describe("Cadastrando um produto com informações inválidas", function() {
		    it("Com nome, descrição ou preço do produto inválidos, não devemos cadastrá-lo retornando status http 400", function(done) {
		    	var formData = {
		    		nome:"", 
		    		descricao:"descricao produto criado",
		    		preco: 1.99
		    	};

		      request.post({url:uri, form: formData}, function(error, response, body) {
		        expect(response.statusCode).to.equal(400);
		        done();
		      });
		    });
		  });


		describe("Buscando um produto por id não cadastrado", function() {
		    it("Com um id de produto não cadastrado devemos retornar status http 404", function(done) {
		      var objId = mongoose.Types.ObjectId();
		      var uriGet = uri + objId;
		      request.get(uriGet, function(error, response, body) {
		        expect(response.statusCode).to.equal(404);
		        
		        done();
		      });
		    });
		  });		

		describe("Atualizando um prouto com informações inválidas", function() {
		    it("Com informações inválidas de um produto, não deve ser possível atualizá-lo retornando status http 400", function(done) {
		    	var uriPut = uri + objectId;
		    	var formData = {
		    		"nome":"", 
		    		"descricao":"",
		    		"preco": 1.99
		    	};

		      	request.put({url:uriPut, form: formData}, function(error, response, body) {
		        expect(response.statusCode).to.equal(400);

		        done();
		      });
		    });
		  });

		describe("Atualizando um prouto não cadastrado", function() {
		    it("Com um id de produto não cadastrado, não deve ser possível atualizá-lo retornando status http 404", function(done) {
		    	var uriPut = uri + objectId;
		    	var formData = {
		    		"nome":"teste", 
		    		"descricao":"teste",
		    		"preco": 1.99
		    	};

		      	request.put({url:uriPut, form: formData}, function(error, response, body) {
		        expect(response.statusCode).to.equal(404);

		        done();
		      });
		    });
		  });	

});


