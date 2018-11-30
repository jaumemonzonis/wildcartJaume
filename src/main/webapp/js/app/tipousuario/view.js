'use strict'

moduleTipousuario.controller('tipousuarioViewController', ['$scope', '$http', 'toolService', '$routeParams','sessionService',
    function ($scope, $http, toolService, $routeParams,sessionService) {
        
        if (sessionService) {
            $scope.usuariologeado = sessionService.getUserName();
            $scope.idUsuariologeado = sessionService.getUserId();
            $scope.ocultar = true;
        }
            $http({
                method: 'GET',
//                withCredentials: true,
                url: '/json?ob=tipousuario&op=get&id='+$routeParams.id
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxDataTipoUsuarios = response.data.message;
            }, function (response) {
                $scope.ajaxDataTipoUsuarios = response.data.message || 'Request failed';
                $scope.status = response.status;
            });

        $scope.isActive = toolService.isActive;

    }]);