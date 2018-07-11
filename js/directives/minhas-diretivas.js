angular.module('minhasDiretivas', [])
	
	.directive('painelLogin', function() {

		var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;

		ddo.scope = {
			pass: '@',
			user: '@'
        };
		ddo.templateUrl = 'js/directives/painel-login.html';

		return ddo;
	})
	.directive('tituloMenu', function() {

		var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;

		ddo.scope = {
			titulo: '@'
        };
		ddo.templateUrl = 'js/directives/titulo-menu.html';

		return ddo;
	})
	.directive('filtroMenu', function() {

		var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;
		
		ddo.templateUrl = 'js/directives/filtro-menu.html';

		return ddo;
	})
	.directive('perfilUsuario', function() {

		var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;
		
		ddo.scope = {
			cargo: '@',
			empresa: '@',
			nome: '@',
			texto: '@',
			atividades: '@',
			videos: '@',
			projetos: '@'
        };

		ddo.templateUrl = 'js/directives/perfil-usuario.html';

		return ddo;
	})
	.directive('cardInfo', function() {

		var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;
		
		ddo.scope = {
			titulo: '@',
			valor: '@',
			icone: '@'
        };

		ddo.templateUrl = 'js/directives/card-info.html';

		return ddo;
	})
	.directive('itemMenu', function() {

		var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;

		ddo.scope = {
			texto: '@'
        };
		ddo.templateUrl = 'js/directives/item-menu.html';

		return ddo;
	});
	
