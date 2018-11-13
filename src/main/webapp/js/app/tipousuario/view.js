'use strict'

moduleTipousuario.controller('tipousuarioViewController', ['$scope', '$http', '$location', 'toolService', '$routeParams',
    function ($scope, $http, $location, toolService, $routeParams) {

            $http({
                method: 'GET',
                withCredentials: true,
                url: 'http://localhost:8081/trolleyes/json?ob=tipousuario&op=get&id='+$routeParams.id
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxDataUsuarios = response.data.message;
            }, function (response) {
                $scope.ajaxDataUsuarios = response.data.message || 'Request failed';
                $scope.status = response.status;
            });

        $scope.isActive = toolService.isActive;

    }]);