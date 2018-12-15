"use strict";

moduleFactura.controller("lineaEditController", [
    "$scope",
    "$http",
    "$routeParams",
    "toolService",
    "$window",
    'sessionService',
    function ($scope, $http, $routeParams, toolService, $window, sessionService) {

        $scope.edited = true;
        $scope.ob = "linea";

        $scope.obj = null;

        $scope.op = 'edit';
        $scope.result = null;
        $scope.title = "Edición de linea";
        $scope.icon = "fa-file-text-o";

//
//        if (sessionService.getUserName() !== "") {
//            $scope.loggeduser = sessionService.getUserName();
//            $scope.loggeduserid = sessionService.getId();
//            $scope.logged = true;
//            $scope.tipousuarioID = sessionService.getTypeUserID();
//        }

        if (!$routeParams.id) {
            $scope.id = 1;
        } else {
            $scope.id = $routeParams.id;
        }

        $http({
            method: "GET",
            url: 'json?ob=' + $scope.ob + '&op=get&id=' + $scope.id
        }).then(function (response) {
            console.log(response);
            $scope.id = response.data.message.id;
            $scope.cantidad = response.data.message.cantidad;

            $scope.obj_Producto = {
                id: response.data.message.obj_Producto.id,
                desc: response.data.message.obj_Producto.desc
            }
            
             $scope.obj_Factura = {
                id: response.data.message.obj_Factura.id
               
            }
            
        }), function (response) {
            console.log(response);
        };

        $scope.isActive = toolService.isActive;

        $scope.update = function () {

            var json = {
                id: $scope.id,
                cantidad: $scope.cantidad,
                id_factura:  $scope.obj_Factura.id,
                id_producto: $scope.obj_Producto.id

            }
            $http({
                method: 'GET',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                url: 'json?ob=' + $scope.ob + '&op=update',
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
        
        $scope.facturaRefresh = function (f, consultar) {
            var form = f;
            if (consultar) {
                $http({
                    method: 'GET',
                    url: 'json?ob=factura&op=get&id=' + $scope.obj_Factura.id
                }).then(function (response) {
                    $scope.obj_Factura = response.data.message;
                    form.userForm.obj_Factura.$setValidity('valid', true);
                }, function (response) {
                    form.userForm.obj_Factura.$setValidity('valid', false);
                });
            } else {
                form.userForm.obj_Factura.$setValidity('valid', true);
            }
        }

        $scope.back = function () {
            window.history.back();
        };
        $scope.close = function () {
            $location.path('/home');
        };
        $scope.plist = function () {
            $location.path('/' + $scope.ob + '/plist');
        };



        $scope.volver = function () {
            $window.history.back();
        }



    }
]);
