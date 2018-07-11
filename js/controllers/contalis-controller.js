app.controller("ContalisController", function($scope, $firebaseAuth,$firebaseObject,$rootElement,$location) {

	var firebaseObj = $firebaseAuth();

	$scope.exibirLoading = false;

	$scope.dados = [];
	$scope.dados = ConexaoBanco.read('contas',firebaseObj);

});