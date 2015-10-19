var testApp = angular.module("testApp",[]);
testApp.controller('changeColor', ['$scope', function($scope){
	$scope.errostate = false;
	$scope.warningstate = false
	$scope.erro = function(){
		$scope.text = "this is an erro."
		$scope.errostate = true;
		$scope.warningstate = false;
	};
	$scope.warning = function(){
		$scope.text = "this is a warnings."
		$scope.warningstate = true;
		$scope.errostate = false;
	};
}])