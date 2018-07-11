'use strict';

var app = angular.module('portfolio', ["firebase","minhasDiretivas","ngAnimate","ngRoute"]);

    app.config(function ($routeProvider,$locationProvider) {
   
        //$locationProvider.html5Mode(true);

        app.config(function($logProvider){
            $logProvider.debugEnabled(true);
        });
        
        $routeProvider.when('/', {
			templateUrl: 'partials/principal.html',
			controller: 'LoginController'
        });

        $routeProvider.when('/home', {
			templateUrl: 'partials/home.html',
			controller: 'HomeController'
        });
        
        $routeProvider.when('/listas/contas', {
			templateUrl: 'partials/contalis.html',
			controller: 'ContalisController'
		});
       
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });

    /*routeConfig.$inject = ['$routeProvider'];
    app.config(routeConfig);


            $locationProvider.html5Mode(true);
    
            $routeProvider.when('/fotos', {
                templateUrl: 'partials/principal.html',
                controller: 'FotosController'
            });
    
            $routeProvider.when('/fotos/new', {
                templateUrl: 'partials/foto.html'
            });
    
            $routeProvider.otherwise({redirectTo: '/fotos'});
    
        });*/