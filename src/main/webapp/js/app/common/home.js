'use strict'

moduleCommon.controller('homeController', ['$scope', '$location', 'toolService', 'sessionService',
    function ($scope, $location, toolService, sessionService) {
        $scope.logged = false;
        $scope.ruta = $location.path();
        $scope.isActive = toolService.isActive;
//
//   if (sessionService.getUserName() !== "") {
//            $scope.loggeduser = sessionService.getUserName();
//            $scope.loggeduserid = sessionService.getId();
//            $scope.logged = true;
//            $scope.tipousuarioID = sessionService.getTypeUserID();
//        }
    }]);
