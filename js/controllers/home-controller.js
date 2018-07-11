app.controller("HomeController", function($scope, $firebaseAuth,$rootElement,$location) {

	$scope.exibirLoading = false;
	$scope.filtro = '';
	$scope.modulos = [
		{texto:'Administração'},	
		{texto:'Contratos'},	
		{texto:'Contábil'},
		{texto:'Financeiro'},
		{texto:'Contas a receber'},
		{texto:'Contas a pagar'},
		{texto:'Fluxo de caixa'}
	  ];
	

	
	
});