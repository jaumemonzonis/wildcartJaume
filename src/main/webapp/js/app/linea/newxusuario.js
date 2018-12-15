"use strict";


moduleLinea.controller('lineanewxusuarioController', ['$scope', '$http', '$location', 'toolService', '$routeParams', '$window', 'sessionService',
    function ($scope, $http, $location, toolService, $routeParams, $window, sessionService) {
//        if (sessionService.getUserName() !== "") {
//            $scope.loggeduser = sessionService.getUserName();
//            $scope.loggeduserid = sessionService.getId();
//            $scope.logged = true;
//            $scope.tipousuarioID = sessionService.getTypeUserID();
//        }

        if (!$routeParams.id) {
            $scope.id_factura = 0;
        } else {
            $scope.id_factura = $routeParams.id;
        }

        $scope.ob = "linea";
        $scope.id = null;
        $scope.edited = true;
        $scope.isActive = toolService.isActive;

        $scope.obj_Producto = {
            id: null,
            desc: null
        }

        $http({
            method: 'GET',
            url: 'json?ob=factura&op=get&id=' + $scope.id_factura
        }).then(function (response) {
            $scope.status = response.status;
            $scope.idfactura = response.data.message.id;

        }, function (response) {
            $scope.status = response.status;

        });

        $scope.update = function () {

            var json = {
                id: null,
                cantidad: $scope.cantidad,
                id_factura: $scope.id_factura,
                id_producto: $scope.obj_Producto.id
            };

            $http({
                method: 'GET',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                url: 'json?ob=' + $scope.ob + '&op=create',
                params: {json: JSON.stringify(json)}
            }).then(function () {
                $scope.edited = false;
            })
        }
        
        $scope.productoRefresh = function (f, consultar) {
            var form = f;
            if (consultar) {
                $http({
                    method: 'GET',
                    url: 'json?ob=producto&op=get&id=' + $scope.obj_Producto.id
                }).then(function (response) {
                    $scope.obj_Producto = response.data.message;
                    form.userForm.obj_Producto.$setValidity('valid', true);
                }, function (response) {
                    form.userForm.obj_Producto.$setValidity('valid', false);
                });
            } else {
                form.userForm.obj_Producto.$setValidity('valid', true);
            }
        };
        
        $scope.volver = function () {
            $window.history.back();
        };


    }
]);
