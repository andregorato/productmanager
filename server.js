(function(){
	//dependencies ======================================================================
	var express  	= require('express'),
	app      		= express(),
	mongoose 		= require('mongoose'), 					
	database 		= require('./config/database'), 			
	logger 			= require('morgan'),
	bodyParser 		= require('body-parser'),
	methodOverride	= require('method-override'),
	routes 			= require('./app/routes.js');

	//set configurations ================================================================
	app.set('port', process.env.PORT || 3350);
	app.use(logger('dev')); 						
	app.use(methodOverride()); 						
	app.use(bodyParser.json()); 					
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(express.static(__dirname + '/public')); 
	app.use('/', routes);

	//initialize connection with mongoDB ================================================
	database.init(onInitSuccess);

	//callback called when the database is ok
	function onInitSuccess(){
		app.listen(app.get('port'), function(){
			console.log("Server rodando na porta " + app.get('port'));
		});
	}
})();
