'use strict';

moduleLogin.controller('loginController', ['$scope', '$http', '$location', 'toolService', '$routeParams',
    function ($scope, $http, $location, toolService, $routeParams) {
        $scope.validar = function () {
            $scope.ob = "usuario";
         $http({
            method: 'GET',
            url: 'json?ob='+$scope.ob+'&op=login&user='+$scope.login+'&pass='+$scope.password
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDataUsuarios = response.data.message;

        }, function (response) {
            $scope.status = response.status;
            $scope.ajaxDataUsuarios = response.data.message || 'Request failed';
        });
   
        }
    }]);