'use strict'

moduleUsuario.controller('usuarioLogoutController', ['$scope', '$http', 'toolService', 'sessionService','$location',
    function ($scope, $http, toolService, sessionService, $location) {

//            if (sessionService.getUserName() !== "") {
//            $scope.loggeduser = sessionService.getUserName();
//            $scope.loggeduserid = sessionService.getId();
//            $scope.logged = true;
//            $scope.tipousuarioID = sessionService.getTypeUserID();
//        }



        $http({
            method: 'GET',
            url: 'json?ob=usuario&op=logout'
        }).then(function () {
            $scope.validlog = false;
            $scope.failog = true;
            sessionService.setSessionInactive();
            $location.path('/home');
        });
        

        $scope.isActive = toolService.isActive;


        $scope.volver = function () {

            $location.path('/home');

        }

        

    }]);
