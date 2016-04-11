(function(){
	angular.module('productService', [])

	//service what execute requests for api
	.factory('Products', function($http) {
		var uri = "/api/product/";

		return {
			get : function() {
				return $http.get(uri);
			},
			getSync: function(){
				var request = new XMLHttpRequest();
				request.open('GET', uri, false);//set as synchronous
				request.send(null);
			
				return request.responseText;
			},
			create : function(product) {
				return $http.post(uri, product);
			},
			delete : function(id) {
				return $http.delete(uri + id);
			},
			update: function(product){
				return $http.put(uri + product.id, product);	
			}
		};
	});
})();	

	