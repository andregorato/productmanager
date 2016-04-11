(function(){
	//dependencies ======================================================================
	var Product = require('./models/product'),
	express = require('express'),
	router  = express.Router();
	
	/**
    * @api {get} api/product Obter todos os produtos cadastrados
    * @apiGroup Product Manager
	* @apiVersion 1.0.0
    * @apiSuccessExample Success-Response:
    *HTTP/1.1 200 Ok
	*[
	*  {
	*   "_id": "570a633aa00010940b20d9fa",
	*   "nome": "Sabão em pó",
	*   "descricao": "Item utilizado para lavar roupas",
	*   "preco": 1.99,
	*   "__v": 0
	*   },
	*   {
	*   "_id": "555a6340a00010940b20d9fa",
	*   "nome": "Detergente",
	*   "descricao": "Item utilizado para lavar louças",
	*   "preco": 1.99,
	*   "__v": 0
	*  }
	*]
	*
	* @apiErrorExample Error-Response:
    * HTTP/1.1 404 Not Found
    */
	router.get('/api/product', function(req, res) {
		//find in mongodb
		Product.find(function(err, product) {			
			if (err) return console.error(err);			

			if (product === undefined || product === "" || product === null)
				return res.sendStatus(404);	

			//success			
			return res.json(product); 
		});
	});

	
	/**
    * @api {get} api/product/:id Obter produto cadastrado através do seu id
    * @apiGroup Product Manager
    * @apiParam {String} Id  id de um produto cadastrado.    
    * @apiVersion 1.0.0
    * @apiSuccessExample Success-Response:
    * HTTP/1.1 200 Ok
	* {
	*  "_id": "570a633aa00010940b20d9fa",
	*  "nome": "Sabão em pó",
	*  "descricao": "Item utilizado para lavar roupas",
	*  "preco": 1.99,
	*  "__v": 0
	* }
	* @apiErrorExample Error-Response:
    * HTTP/1.1 400 Bad Request
	* HTTP/1.1 404 Not Found			
    */    
	router.get('/api/product/:id', function(req, res) {
		
		if(!req.params.id)
			return res.sendStatus(400);

		//find in mongodb
		Product.findById(req.params.id, function(err, product){
			if (err) return console.error(err);

			if (product === undefined || product === "" || product === null)
				return res.sendStatus(404);	

			//success
			return res.json(product);
	    });		    	
				
	});

	/**
    * @api {post} api/product Cadastrar um produto
    * @apiGroup Product Manager
    * @apiVersion 1.0.0
    * @apiParamExample {json} informações do produto a ser cadastrado.    
    * {
    *  "nome": "Sabonete",
    *  "descricao": "Item utilizado no banho",
    *  "preco": 1.99,
    *  "__v": 0
	* }
    * @apiSuccessExample Success-Response:
    * HTTP/1.1 201 Created
	* [
	*  {
	*   "_id": "570a633aa00010940b20d9fa",
	*   "nome": "Sabão em pó",
	*   "descricao": "Item utilizado para lavar roupas",
	*   "preco": 1.99,
	*   "__v": 0
	*   },
	*  {
	*   "_id": "570a6340a00010940b20d9fb",
	*   "nome": "Sabonete",
	*   "descricao": "Item utilizado no banho",
	*   "preco": 1.99,
	*   "__v": 0
	*  },
	*  {
	*   "_id": "570a796fbfb4322c1a040930",
	*   "nome": "Sabonete Líquido",
	*   "descricao": "Item utilizado no banho",
	*   "preco": 1.99,
	*   "__v": 0
	*  }
	* ]
	* @apiErrorExample Error-Response:
    * HTTP/1.1 400 Bad Request
	*		  
    */
	router.post('/api/product', function(req, res) {
		if(!req.body.nome || !req.body.descricao || !req.body.preco)
			return res.sendStatus(400);

		//creating in mongodb
		Product.create(
		{			
			nome : req.body.nome,
			descricao : req.body.descricao,
			preco : req.body.preco
		}, function(err, product) {
			if (err) return console.error(err);

			Product.find(function(err, product) {
				if (err) return console.error(err);

				//success
				res.statusCode = 201;
				return res.json(product);
			});
		});
	});

	/**
    * @api {put} api/product/:id Atualizar um produto
    * @apiGroup Product Manager
    * @apiVersion 1.0.0
    * @apiParam {String} id id do produto a ser atualizado
    * @apiParamExample {json} informações do produto a ser cadastrado (JSON)    
    * {
    *  "nome": "Sabonete Líquido",
    *  "descricao": "Item utilizado no banho todos os dias",
    *  "preco": 1.99,
    *  "__v": 0
	* }
    * @apiSuccessExample Success-Response:
    * HTTP/1.1 200 Ok
	* [
	*  {
	*   "_id": "570a633aa00010940b20d9fa",
	*   "nome": "Sabão em pó",
	*   "descricao": "Item utilizado para lavar roupas",
	*   "preco": 1.99,
	*   "__v": 0
	*   },
	*  {
	*   "_id": "570a6340a00010940b20d9fb",
	*   "nome": "Sabonete",
	*   "descricao": "Item utilizado no banho",
	*   "preco": 1.99,
	*   "__v": 0
	*  },
	*  {
	*   "_id": "570a796fbfb4322c1a040930",
	*   "nome": "Sabonete Líquido",
	*   "descricao": "Item utilizado no banho todos os dias",
	*   "preco": 1.99,
	*   "__v": 0
	*  }
	* ]
	* @apiErrorExample Error-Response:
    * HTTP/1.1 400 Bad Request
	* HTTP/1.1 404 Not Found
    */
	router.put('/api/product/:id', function(req, res) {
			if(!req.params.id || !req.body.nome || !req.body.descricao || !req.body.preco)
				return res.sendStatus(400);

		Product.findById(req.params.id, function(err, productOutdated){
			if (err) return console.error(err);


			if(!productOutdated)
				return res.sendStatus(404);				

			//update information of product
			productOutdated.nome = req.body.nome;
			productOutdated.descricao = req.body.descricao;
			productOutdated.preco = req.body.preco;

		    //persisting changes
		    productOutdated.save(function(err) {
		    	if (err) return console.error(err);		    	
		    	
		    	Product.find(function(err, product) {
		    		if (err) return console.error(err);

		    		//success
		    		return res.json(product);
	    		});		    	
		    				    
			});			
		});
	});

	/**
    * @api {delete} api/product/:id Deletar um produto
    * @apiVersion 1.0.0
    * @apiGroup Product Manager
    *@apiParam {String} id id do produto a ser deletado
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 204 No Content
	* @apiErrorExample Error-Response:
    *     HTTP/1.1 400 Bad Request
    */
	router.delete('/api/product/:id', function(req, res) {
			if(!req.params.id)
				return res.sendStatus(400);

		Product.remove({_id : req.params.id}, function(err, product) {
			if (err) return console.error(err);
			
			Product.find(function(err, product) {
				if (err) return console.error(err);

				//success		
				return res.sendStatus(204);//not content
			});							
		});
	});	

	module.exports = router;
})();