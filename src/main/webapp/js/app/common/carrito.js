'use strict'

moduleCommon.controller('carritoController', ['$scope', '$location', 'toolService', 'sessionService', '$http',
    function ($scope, $location, toolService, sessionService, $http) {
        $scope.idusuario = sessionService.getUserId();
       
        //-----------------------------------------------------OBLIGATORIO DE MOMENTO------------------------------------------
        $http({
            method: 'GET',
            url: '/json?ob=carrito&op=show'
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxCarrito = response.data.message;
            $scope.carrito = true;
            $scope.cantidadTotal = 0;
            $scope.precioTotalProd = 0.0;
            if (($scope.ajaxCarrito === "Carrito vacio") || ($scope.ajaxCarrito === null)) {
                $scope.carrito = false;
                $scope.carritoVacio = true;
                $scope.carritoComprado = false;
            } else {
                for (var i = 0; i < $scope.ajaxCarrito.length; i++) {
                    $scope.cantidadTotal += response.data.message[i].cantidad;
                    $scope.precioTotalProd += (response.data.message[i].obj_producto.precio * response.data.message[i].cantidad);
                }
            }

        }, function (response) {
            $scope.status = response.status;
            $scope.ajaxCarrito = response.data.message || 'Request failed';
        });

        //ELIMINA UN PRODUCTO DEL CARRITO
        $scope.deleteProducto = function (id) {

            $http({
                method: 'GET',
                url: '/json?ob=carrito&op=reduce&prod=' + id
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxCarrito = response.data.message;
                $scope.cantidadTotal = 0;
                $scope.precioTotalProd = 0.0;

                for (var i = 0; i < $scope.ajaxCarrito.length; i++) {
                    $scope.cantidadTotal += response.data.message[i].cantidad;
                    $scope.precioTotalProd += (response.data.message[i].obj_producto.precio * response.data.message[i].cantidad);
                }
                if (($scope.cantidadTotal === 0) || ($scope.ajaxCarrito === "Carrito vacio") || ($scope.ajaxCarrito === null) || ($scope.ajaxCarrito === '')) {
                    $scope.carrito = false;
                    $scope.carritoVacio = true;
                }

            }, function (response) {
                $scope.status = response.status;
                $scope.ajaxCarrito = response.data.message || 'Request failed';
            });
        };

        $scope.addProducto = function (id) {

            $http({
                method: 'GET',
                url: '/json?ob=carrito&op=add&prod=' + id + '&cant=1'
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxCarrito = response.data.message;
                $scope.carrito = true;
                $scope.cantidadTotal = 0;
                $scope.precioTotalProd = 0.0;
                if (($scope.ajaxCarrito === "Carrito vacio") || ($scope.ajaxCarrito === null)) {
                    $scope.carrito = false;
                } else {
                    for (var i = 0; i < $scope.ajaxCarrito.length; i++) {
                        $scope.cantidadTotal += response.data.message[i].cantidad;
                        $scope.precioTotalProd += (response.data.message[i].obj_producto.precio * response.data.message[i].cantidad);
                    }
                }
            }, function (response) {
                $scope.status = response.status;
                $scope.ajaxCarrito = response.data.message || 'Request failed';
            });
        };
        $scope.restarProducto = function (id,cantidad) {
            if(cantidad<= 0){
                cantidad = 0;
                $scope.deleteProducto(id);
            }
            $http({
                method: 'GET',
                url: '/json?ob=carrito&op=update&prod=' + id + '&cant='+cantidad
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxCarrito = response.data.message;
                $scope.carrito = true;
                $scope.cantidadTotal = 0;
                $scope.precioTotalProd = 0.0;
                if (($scope.ajaxCarrito === "Carrito vacio") || ($scope.ajaxCarrito === null)) {
                    $scope.carrito = false;
                } else {
                    for (var i = 0; i < $scope.ajaxCarrito.length; i++) {
                        $scope.cantidadTotal += response.data.message[i].cantidad;
                        $scope.precioTotalProd += (response.data.message[i].obj_producto.precio * response.data.message[i].cantidad);
                    }
                }
            }, function (response) {
                $scope.status = response.status;
                $scope.ajaxCarrito = response.data.message || 'Request failed';
            });
        };
        $scope.buyCart = function () {

            $http({
                method: 'GET',
                url: '/json?ob=carrito&op=buy'
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxCarritoComprado = response.data.message;
                $scope.carritoVacio = true;
                $scope.carritoComprado = true;
            }, function (response) {
                $scope.status = response.status;
                $scope.ajaxCarritoComprado = response.data.message || 'Request failed';
            }),
                    $http({
                        method: 'GET',
                        url: '/json?ob=carrito&op=show'
                    }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxCarrito = response.data.message;
                $scope.carrito = true;
                $scope.cantidadTotal = 0;
                $scope.precioTotalProd = 0.0;
                if (($scope.ajaxCarrito === "Carrito vacio") || ($scope.ajaxCarrito === null)) {
                    $scope.carrito = false;
                    $scope.carritoVacio = true;
                    $scope.carritoComprado = false;
                } else {
                    for (var i = 0; i < $scope.ajaxCarrito.length; i++) {
                        $scope.cantidadTotal += response.data.message[i].cantidad;
                        $scope.precioTotalProd += (response.data.message[i].obj_producto.precio * response.data.message[i].cantidad);
                    }
                }

            }, function (response) {
                $scope.status = response.status;
                $scope.ajaxCarrito = response.data.message || 'Request failed';
            });
        };
        $scope.emptyCart = function () {

            $http({
                method: 'GET',
                url: '/json?ob=carrito&op=empty'
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxCarrito = response.data.message;
                $scope.carritoVacio = true;
                $scope.carritoComprado = false;
            }, function (response) {
                $scope.status = response.status;
                $scope.ajaxCarrito = response.data.message || 'Request failed';
            });
        };
        $scope.isActive = toolService.isActive;

    }
]);