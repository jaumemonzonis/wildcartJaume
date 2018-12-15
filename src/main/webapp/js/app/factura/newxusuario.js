"use strict";


moduleFactura.controller('facturanewxusuarioController', ['$scope', '$http', '$location', 'toolService', '$routeParams', '$window', 'sessionService',
    function ($scope, $http, $location, toolService, $routeParams, $window, sessionService) {
//      if (sessionService.getUserName() !== "") {
//            $scope.loggeduser = sessionService.getUserName();
//            $scope.loggeduserid = sessionService.getId();
//            $scope.logged = true;
//            $scope.tipousuarioID = sessionService.getTypeUserID();
//        }
        
        if (!$routeParams.id) {
            $scope.id_usuario= 0;  
        } else {
            $scope.id_usuario= $routeParams.id;
        }
        
        $scope.ob = "factura";
        $scope.id = null;
        $scope.myDate = new Date();

        $scope.isActive = toolService.isActive;
        
           $http({
            method: 'GET',
            url: 'json?ob=usuario&op=get&id=' + $scope.id_usuario
        }).then(function (response) {
            $scope.status = response.status;
            $scope.nombre2 = response.data.message.nombre;
            $scope.ape1 = response.data.message.ape1;
        }, function (response) {
            $scope.status = response.status;
            
        });

        $scope.update = function () {
            $scope.visualizar = false;
            $scope.error = false;
            var json = {
                id: null,
                fecha: $scope.myDate,
                iva: $scope.iva,
                id_usuario: $scope.id_usuario
            };

            $http({
                method: 'GET',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                url: 'json?ob=' + $scope.ob + '&op=create',
                params: {json: JSON.stringify(json)}
            }).then(function (response) {
                console.log(response);
                $scope.visualizar = true;
            }), function (response) {
                console.log(response);
                $scope.error = true;
            }
        }

        $scope.volver = function () {
            $window.history.back();
        };


    }
]);
