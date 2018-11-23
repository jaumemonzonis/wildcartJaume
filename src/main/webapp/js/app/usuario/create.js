'use strict';

moduleUsuario.controller('usuarioCreateController', ['$scope', '$http', 'sessionService',
    function ($scope, $http, sessionService) {
        
        if (sessionService) {
            $scope.usuariologeado = sessionService.getUserName();
            $scope.idUsuariologeado = sessionService.getUserId();
            $scope.ocultar = true;
        }
        
        $scope.crear = function () {
            var json = {
                id: $scope.ajaxDatoUsuario.id,
                dni: $scope.ajaxDatoUsuario.dni,
                nombre: $scope.ajaxDatoUsuario.nombre,
                ape1: $scope.ajaxDatoUsuario.ape1,
                ape2: $scope.ajaxDatoUsuario.ape2,
                login: $scope.ajaxDatoUsuario.login,
                id_tipoUsuario: $scope.ajaxDatoUsuario.obj_tipoUsuario.id
            }
            $http({
                method: 'GET',
                withCredentials: true,
                url: '/json?ob=usuario&op=create',
                params: {json: JSON.stringify(json)}
            }).then(function (response) {
                $scope.status = response.status;
                $scope.mensaje = true;
            }, function (response) {
                $scope.ajaxDataUsuario = response.data.message || 'Request failed';
                $scope.status = response.status;
            });
        };
        $scope.logout = function () {
            $http({
                method: 'GET',
                url: '/json?ob=usuario&op=logout'
            }).then(function (response) {
                if (response.status === 200) {
                    sessionService.setSessionInactive();
                    sessionService.setUserName("");
                }
            });
        };

    }]);