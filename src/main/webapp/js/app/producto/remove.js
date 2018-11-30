'use strict'

moduleProducto.controller('productoRemoveController', ['$scope', '$http', 'toolService', '$routeParams', 'sessionService',
    function ($scope, $http, toolService, $routeParams, sessionService) {

        $http({
            method: 'GET',
            withCredentials: true,
            url: 'json?ob=producto&op=get&id=' + $routeParams.id
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDataProductos = response.data.message;
            if (response.data.message === '' || response.data.message === null) {
                $scope.boton = false;
            } else {
                $scope.boton = true;
            }
        }, function (response) {
            $scope.ajaxDataProductos = response.data.message || 'Request failed';
            $scope.status = response.status;
        });
        if (sessionService) {
            $scope.usuariologeado = sessionService.getUserName();
            $scope.idUsuariologeado = sessionService.getUserId();
            $scope.ocultar = true;
        }
        $scope.borrar = function () {
            $http({
                method: 'GET',
                withCredentials: true,
                url: 'json?ob=producto&op=remove&id=' + $routeParams.id
            }).then(function (response) {
                $scope.mensaje = true;
                $scope.boton = false;
                $scope.status = response.status;
                $scope.ajaxDataProductos = response.data.message;
            }, function (response) {
                $scope.ajaxDataProductos = response.data.message || 'Request failed';
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
            })
        }
        $scope.doTheBack = function () {
            window.history.back();
        };


        $scope.isActive = toolService.isActive;

    }]);