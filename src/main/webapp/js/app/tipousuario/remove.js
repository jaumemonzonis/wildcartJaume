'use strict'

moduleTipousuario.controller('usuarioRemoveController', ['$scope', '$http', '$location', 'toolService', '$routeParams','sessionService',
    function ($scope, $http, $location, toolService, $routeParams,sessionService) {

            $http({
                method: 'GET',
                withCredentials: true,
                url: 'http://localhost:8081/trolleyes/json?ob=usuario&op=get&id='+$routeParams.id
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxDataUsuarios = response.data.message;
            }, function (response) {
                $scope.ajaxDataUsuarios = response.data.message || 'Request failed';
                $scope.status = response.status;
            });
        if(sessionService){
            $scope.usuariologeado=sessionService.getUserName();
           $scope.ocultar= true;
        }
            $scope.borrar = function () {
                $http({
                    method: 'GET',
                    withCredentials: true,
                    url: 'http://localhost:8081/trolleyes/json?ob=usuario&op=remove&id='+$routeParams.id
                }).then(function (response) {
                    $scope.status = response.status;
                    $scope.ajaxDataUsuarios = response.data.message;
                }, function (response) {
                    $scope.ajaxDataUsuarios = response.data.message || 'Request failed';
                    $scope.status = response.status;
                }); 
            };
            $scope.doTheBack = function() {
                window.history.back();
              };


        $scope.isActive = toolService.isActive;

    }]);