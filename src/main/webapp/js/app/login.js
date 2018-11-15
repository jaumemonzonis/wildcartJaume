'use strict';

moduleLogin.controller('loginController', ['$scope', '$http', 'sessionService',
    function ($scope, $http, sessionService) {
        
        $scope.validar = function () {
            $scope.ob = "usuario";
            $http({
                method: 'GET',
                url: 'json?ob=' + $scope.ob + '&op=login&user=' + $scope.login + '&pass=' + forge_sha256($scope.password)
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxDataUsuarios = response.data.message;
                if (response.status === 200) {
                    sessionService.setSessionActive();
                    $scope.mensaje = true;
                }


            }, function (response) {
                $scope.mensajeError = true;
                $scope.ajaxDataUsuarios = response.data.message || 'Request failed';
                $scope.status = response.status;
            });

        }
    }]);