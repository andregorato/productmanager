(function(){
	angular.module('productController', [])
		// controller main of application
		.controller('mainController', function($scope, $http, Products) {
			$scope.formData = {};

			//binding of fields
			$scope.configureData = function(data){
				$scope.formData.id = data._id;
				$scope.formData.nome = data.nome;
				$scope.formData.descricao = data.descricao;
				$scope.formData.preco = data.preco;
			};

			//get product
			$scope.getProduct = function(){
				$scope.formData = {};
				$scope.product = {};

				Products.get()
				.success(function(data){					
					$scope.product = data;				
				});
				
			};

			//get product synchronous
			$scope.getProductSync = function(){
				$scope.formData = {};
				$scope.product = {};

				var product = Products.getSync();		
				product = JSON.parse(product);
				$scope.product = product;
			};		

			//create product
			$scope.createProduct = function() {
				Products.create($scope.formData)
				.success(function(data) {
					$scope.formData = {}; 
					$scope.product = data;
				});		
			};

			//update  product
			$scope.updateProduct = function() {
				Products.update($scope.formData)
				.success(function(data) {
					$scope.formData = {};
					$scope.product = data;
				});
			};
			
			//delete product
			$scope.deleteProduct = function(id) {
				Products.delete(id)
				.success(function(data) {
					$scope.getProduct();

				});
			};
		});
})();