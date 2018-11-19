'use strict'

moduleFactura.controller('facturaRemoveController', ['$scope', '$http', 'toolService', '$routeParams', 'sessionService',
    function ($scope, $http, toolService, $routeParams, sessionService) {

        $http({
            method: 'GET',
            withCredentials: true,
            url: 'json?ob=factura&op=get&id=' + $routeParams.id
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDataFactura = response.data.message;
            if (response.data.message === '' || response.data.message === null) {
                $scope.boton = false;
            } else {
                $scope.boton = true;
            }
        }, function (response) {
            $scope.ajaxDataFactura = response.data.message || 'Request failed';
            $scope.status = response.status;
        });
        if (sessionService) {
            $scope.usuariologeado = sessionService.getUserName();
            $scope.ocultar = true;
        }
        $scope.borrar = function () {
            $http({
                method: 'GET',
                withCredentials: true,
                url: 'json?ob=factura&op=remove&id=' + $routeParams.id
            }).then(function (response) {
                $scope.mensaje = true;
                $scope.boton = false;
                $scope.status = response.status;
                $scope.ajaxDataFactura = response.data.message;
            }, function (response) {
                $scope.ajaxDataFactura = response.data.message || 'Request failed';
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



        $scope.isActive = toolService.isActive;

    }]);