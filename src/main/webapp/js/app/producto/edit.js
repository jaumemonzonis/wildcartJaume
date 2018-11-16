'use strict';

moduleProducto.controller('productoEditController', ['$scope', '$http','$routeParams', 'sessionService',
    function ($scope, $http, $routeParams, sessionService) {
        $scope.id = $routeParams.id;

        $http({
            method: 'GET',
            url: '/json?ob=producto&op=get&id=' + $routeParams.id
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDatoProducto = response.data.message;
        }, function (response) {
            $scope.ajaxDatoProducto = response.data.message || 'Request failed';
            $scope.status = response.status;
        });

        if (sessionService) {
         $scope.usuariologeado = sessionService.getUserName();
         $scope.ocultar = true;
         }

        $scope.guardar = function () {
            var json = {
                id: $scope.ajaxDatoProducto.id,
                codigo: $scope.ajaxDatoProducto.codigo,
                desc: $scope.ajaxDatoProducto.desc,
                existencias: $scope.ajaxDatoProducto.existencias,
                foto: $scope.ajaxDatoProducto.foto,
                precio: $scope.ajaxDatoProducto.precio,
                id_tipoProducto: $scope.ajaxDatoProducto.obj_tipoProducto.id
            }
            $http({
                method: 'GET',
                withCredentials: true,
                url: '/json?ob=producto&op=update',
                params: {json: JSON.stringify(json)}
            }).then(function (response) {
                $scope.status = response.status;
                $scope.mensaje = true;
            }, function (response) {
                $scope.mensajeError = true;
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