'use strict'

moduleLinea.controller('lineaEditController', ['$scope', '$http', 'toolService', '$routeParams', 'sessionService',
    function ($scope, $http, toolService, $routeParams, sessionService) {
        $scope.id = $routeParams.id;
        $scope.ajaxData = "";

        $http({
            method: 'GET',
            url: '/json?ob=linea&op=get&id=' + $scope.id
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDatoTipoUsuario = response.data.message;
        }, function (response) {
            $scope.ajaxDatoTipoUsuario = response.data.message || 'Request failed';
            $scope.status = response.status;
        });
        if (sessionService) {
            $scope.usuariologeado = sessionService.getUserName();
            $scope.ocultar = true;
        }
        $scope.guardar = function () {
            var json = {
                id: $scope.ajaxDatoTipoUsuario.id,
                cantidad: $scope.ajaxDatoTipoUsuario.cantidad,
                id_factura: $scope.ajaxDatoTipoUsuario.id_factura,
                id_producto: $scope.ajaxDatoTipoUsuario.obj_Producto.id

            };
            $http({
                method: 'GET',
                withCredentials: true,
                url: '/json?ob=linea&op=update',
                params: {json: JSON.stringify(json)}
            }).then(function (response) {
                $scope.status = response.status;
                $scope.mensaje = true;
            }, function (response) {
                $scope.ajaxDatoTipoUsuario = response.data.message || 'Request failed';
                $scope.status = response.status;
            });
        };
        $scope.isActive = toolService.isActive;

    }]);