'use strict'

moduleCommon.controller('homeController', ['$scope', '$location', 'toolService', 'sessionService',
    function ($scope, $location, toolService, sessionService) {

        if (sessionService) {
            $scope.usuariologeado = sessionService.getUserName();
            if ($scope.usuariologeado === "" ) {
                $scope.ocultar = false;
            }else{
                $scope.ocultar = true;
            }

        }
        $scope.ruta = $location.path();

        $scope.isActive = toolService.isActive;

    }
]);