var formApp = angular.module("formApp",[]);
formApp.controller("formCtrl",["$scope",function($scope){
  $scope.form = {
    email:"4545067820@qq.com",
    password:"12345566"
  }
  $scope.sayEmail = function(){
    console.log($scope.form.email)
  };
  $scope.sayPassword = function(){
    console.log($scope.form.password)
  }
}]);

