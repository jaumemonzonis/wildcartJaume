'use strict'

moduleLinea.controller('lineaNewController', ['$scope', '$http', 'toolService', '$routeParams', 'sessionService',
    function ($scope, $http, toolService, $routeParams, sessionService) {
        $scope.idfactura = $routeParams.id;
        $scope.ajaxData = "";
        $scope.guardar = function () {
            var json = {
                id: null,
                cantidad: $scope.ajaxDatoTipoUsuario.cantidad,
                id_factura: $routeParams.id,
                id_producto: $scope.ajaxDatoTipoUsuario.obj_Producto.id

            };
            $http({
                method: 'GET',
                withCredentials: true,
                url: '/json?ob=linea&op=create',
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