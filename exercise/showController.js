var showApp = angular.module("showApp",[]);
showApp.controller('showController', ['$scope', function($scope){
	$scope.toggle = {
		show:true
	};
	$scope.change = function(){
		$scope.toggle.show =  !$scope.toggle.show;
	}
}])