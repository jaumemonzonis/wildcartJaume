'use strict'

moduleUsuario.controller('usuarioViewController', ['$scope', '$http','toolService', '$routeParams','sessionService',
    function ($scope, $http,toolService, $routeParams,sessionService) {

            $http({
                method: 'GET',
                withCredentials: true,
                url: 'json?ob=usuario&op=get&id='+$routeParams.id
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxDataUsuarios = response.data.message;
            }, function (response) {
                $scope.ajaxDataUsuarios = response.data.message || 'Request failed';
                $scope.status = response.status;
            });
            $scope.logout = function () {
            $http({
                method: 'GET',
                url: '/json?ob=usuario&op=logout'
            }).then(function(response){
                if (response.status===200){
                    sessionService.setSessionInactive();
                    sessionService.setUserName("");
                }
            })
        }
if(sessionService){
            $scope.usuariologeado=sessionService.getUserName();
           $scope.ocultar= true;
        }
        $scope.isActive = toolService.isActive;

    }]);