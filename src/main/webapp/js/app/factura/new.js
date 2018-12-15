"use strict";

moduleFactura.controller("facturaNewController", [
    "$scope",
    "$http",
    "$routeParams",
    "toolService",
    "$window",
    'sessionService',
    function ($scope, $http, $routeParams, toolService, $window, sessionService) {

        $scope.edited = true;
        $scope.ob = "factura";
        $scope.id = null;
        $scope.obj = null;

        $scope.op = 'create';
        $scope.result = null;
        $scope.title = "Crear factura";
        $scope.icon = "fa-file-text-o";

//
//        if (sessionService.getUserName() !== "") {
//            $scope.loggeduser = sessionService.getUserName();
//            $scope.loggeduserid = sessionService.getId();
//            $scope.logged = true;
//            $scope.tipousuarioID = sessionService.getTypeUserID();
//        }



        $scope.obj_Usuario = {
            id: null,
            nombre: null

        }

        $scope.myDate = new Date();
        $scope.isActive = toolService.isActive;

        $scope.update = function () {

            
            var json = {
                id: null,
                fecha: $scope.myDate,
                iva: $scope.iva,
                id_usuario: $scope.obj_Usuario.id

            }
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

        $scope.usuarioRefresh = function (f, consultar) {
            var form = f;
            if (consultar) {
                $http({
                    method: 'GET',
                    url: 'json?ob=usuario&op=get&id=' + $scope.obj_usuario.id
                }).then(function (response) {
                    $scope.obj_usuario = response.data.message;
                    form.userForm.obj_usuario.$setValidity('valid', true);
                }, function (response) {
                    form.userForm.obj_usuario.$setValidity('valid', false);
                });
            } else {
                form.userForm.obj_usuario.$setValidity('valid', true);
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
