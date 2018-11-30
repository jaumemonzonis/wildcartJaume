'use strict'

moduleTipoproducto.controller('tipoproductoEditController', ['$scope', '$http', 'toolService', '$routeParams', 'sessionService',
    function ($scope, $http, toolService, $routeParams, sessionService) {
        $scope.id = $routeParams.id;
        $scope.ajaxData = "";

        $http({
            method: 'GET',
            url: '/json?ob=tipoproducto&op=get&id=' + $scope.id
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDatoTipoUsuario = response.data.message;
        }, function (response) {
            $scope.ajaxDatoTipoUsuario = response.data.message || 'Request failed';
            $scope.status = response.status;
        });
        if (sessionService) {
            $scope.usuariologeado = sessionService.getUserName();
            $scope.idUsuariologeado = sessionService.getUserId();
            $scope.ocultar = true;
        }
        $scope.guardar = function () {
            var json = {
                id: $scope.ajaxDatoTipoUsuario.id,
                desc: $scope.ajaxDatoTipoUsuario.desc

            }
            $http({
                method: 'GET',
                withCredentials: true,
                url: '/json?ob=tipoproducto&op=update',
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