'use strict'

moduleTipousuario.controller('tipousuarioNewController', ['$scope', '$http', 'toolService', '$routeParams', 'sessionService',
    function ($scope, $http, toolService, $routeParams, sessionService) {
        $scope.id = $routeParams.id;
        $scope.ajaxData = "";
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
                url: '/json?ob=tipousuario&op=create',
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