'use strict'

moduleTipoproducto.controller("tipoproductoViewController", ['$scope', '$http', '$routeParams', '$window','sessionService',
    function ($scope, $http, $routeParams, $window,sessionService) {

        $scope.ob = "tipoproducto";

        if (!$routeParams.id) {
            $scope.id = 1;
        } else {
            $scope.id = $routeParams.id;
        }
//          if (sessionService.getUserName() !== "") {
//            $scope.loggeduser = sessionService.getUserName();
//            $scope.loggeduserid = sessionService.getId();
//            $scope.logged = true;
//            $scope.tipousuarioID = sessionService.getTypeUserID();
//        }
        $http({
            method: 'GET',
            url: 'json?ob=' + $scope.ob + '&op=get&id=' + $scope.id
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDataUsuarios = response.data.message;
        }, function (response) {
            $scope.status = response.status;
            $scope.ajaxDataUsuarios = response.data.message || 'Request failed';
        });



        $scope.volver = function () {
            $window.history.back();
        };
       
    }

]);
