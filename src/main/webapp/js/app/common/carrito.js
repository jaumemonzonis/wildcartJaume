'use strict'

moduleCommon.controller('carritoController', ['$scope', '$location', 'toolService', 'sessionService', '$http',
    function ($scope, $location, toolService, sessionService, $http) {
        if (sessionService) {
            $scope.usuariologeado = sessionService.getUserName();
            $scope.idUsuariologeado = sessionService.getUserId();
            $scope.ocultar = true;
        }

        $scope.logout = function () {
            $http({
                method: 'GET',
                url: '/json?ob=usuario&op=logout'
            }).then(function (response) {
                if (response.status === 200) {
                    sessionService.setSessionInactive();
                    sessionService.setUserName("");
                }
            });
        };
        $http({
            method: 'GET',
            url: '/json?ob=usuario&op=check'
        }).then(function (response) {
            if (response.status === 200) {
                if (sessionService.isSessionActive) {
                    $scope.usuariologeado = sessionService.getUserName();
                    if ($scope.usuariologeado === "") {
                        $scope.ocultar = false;
                    } else {
                        $scope.ocultar = true;
                    }
                }
            } else if (response.status === 401 || response.status === 500) {
                if (sessionService.setSessionInactive) {
                    $scope.usuariologeado = sessionService.getUserName();
                    if ($scope.usuariologeado === "") {
                        $scope.ocultar = true;
                    } else {
                        $scope.ocultar = false;
                    }
                }
            }
        });
//-----------------------------------------------------OBLIGATORIO DE MOMENTO------------------------------------------
        $http({
            method: 'GET',
            url: '/json?ob=carrito&op=show'
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxCarrito = response.data.message;

        }, function (response) {
            $scope.status = response.status;
            $scope.ajaxCarrito = response.data.message || 'Request failed';
        });
        
        //ELIMINA UN PRODUCTO DEL CARRITO
        $scope.deleteProducto = function (id) {

            $http({
                method: 'GET',
                url: '/json?ob=carrito&op=reduce&prod='+id
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxCarrito = response.data.message;

            }, function (response) {
                $scope.status = response.status;
                $scope.ajaxCarrito = response.data.message || 'Request failed';
            });
        };
        $scope.addProducto = function (id) {

            $http({
                method: 'GET',
                url: '/json?ob=carrito&op=add&prod='+id+'&cant=1'
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxCarrito = response.data.message;

            }, function (response) {
                $scope.status = response.status;
                $scope.ajaxCarrito = response.data.message || 'Request failed';
            });
        };
        
        $scope.isActive = toolService.isActive;

    }
]);