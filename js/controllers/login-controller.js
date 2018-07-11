app.controller("LoginController", function($scope, $firebaseAuth, $rootElement,$location) {
	
	$scope.user = "";
	$scope.pass = "";
	$scope.exibirLoading = false;
	
	var auth = $firebaseAuth();

	$scope.submit = function() {


		$scope.exibirLoading = true;

		auth.$signInWithEmailAndPassword(this.user, this.pass)
			.then(function(authData) {
				$scope.exibirLoading = false; 
				$location.path('/home');
			})
			.catch(function(error) {

                $scope.exibirLoading = false;    
				if (error.code === 'auth/wrong-password') {
					swal('Senha incorreta');
				} else if (error.code === 'auth/invalid-email') {
					swal('E-mail inválido');
				} else if (error.code === 'auth/user-disabled') {
					swal('Usuário desabilitado');
				} else if (error.code === 'auth/user-not-found') {
					swal('Usuário incorreto');
				} else {
					swal(error.message);
				}
			});   
	};

	
	
});