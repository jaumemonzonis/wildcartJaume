'use strict'

moduleCarrito.controller('carritoPlistController', ['$scope', '$http', '$location', 'toolService', '$routeParams', 'sessionService',
    function ($scope, $http, $location, toolService, $routeParams, sessionService) {

        $scope.totalPages = 1;
        $scope.conectado = false;

//        if (sessionService.getUserName() !== "") {
//            $scope.loggeduser = sessionService.getUserName();
//            $scope.loggeduserid = sessionService.getId();
//            $scope.logged = true;
//            $scope.tipousuarioID = sessionService.getTypeUserID();
//        }


        $http({
            method: 'GET',
            url: 'json?ob=carrito&op=show'
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDataAdd = response.data.message;
        }, function (response) {
            $scope.status = response.status;
            $scope.ajaxDataAdd = response.data.message || 'Request failed';
        });

        function show() {

            $http({
                method: 'GET',
                url: 'json?ob=carrito&op=show'
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxDataAdd = response.data.message;
            }, function (response) {
                $scope.status = response.status;
                $scope.ajaxDataAdd = response.data.message || 'Request failed';
            });
        }

        if (!$routeParams.order) {
            $scope.orderURLServidor = "";
            $scope.orderURLCliente = "";
        } else {
            $scope.orderURLServidor = "&order=" + $routeParams.order;
            $scope.orderURLCliente = $routeParams.order;
        }

        if (!$routeParams.rpp) {
            $scope.rpp = "10";
        } else {
            $scope.rpp = $routeParams.rpp;
        }

        if (!$routeParams.page) {
            $scope.page = 1;
        } else {
            if ($routeParams.page >= 1) {
                $scope.page = $routeParams.page;
            } else {
                $scope.page = 1;
            }
        }

        $scope.stock = false;
        $scope.add = function (id) {

            $http({
                method: 'GET',
                url: 'json?ob=carrito&op=add&prod=' + id
            }).then(function (response) {
                $scope.status = response.status;

                if ($scope.status == 400) {

                    $scope.stock = true;
                }

                $scope.ajaxDataAdd = response.data.message;
                show();
            }, function (response) {
                $scope.status = response.status;
                $scope.ajaxDataAdd = response.data.message || 'Request failed';
            });
            
            //animacion
            
//            https://css-tricks.com/animations-the-angular-way/
            
            
            
            
            
            
        };

        $scope.reduce = function (id) {

            $http({
                method: 'GET',
                url: 'json?ob=carrito&op=reduce&prod=' + id
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxDataAdd = response.data.message;
                show();
            }, function (response) {
                $scope.status = response.status;
                $scope.ajaxDataAdd = response.data.message || 'Request failed';
            });
        };


        $scope.resetOrder = function () {
            $location.url(`producto/plist/` + $scope.rpp + `/` + $scope.page);
        }


        $scope.ordena = function (order, align) {
            if ($scope.orderURLServidor == "") {
                $scope.orderURLServidor = "&order=" + order + "," + align;
                $scope.orderURLCliente = order + "," + align;
            } else {
                $scope.orderURLServidor = $scope.orderURLServidor + "-" + order + "," + align;
                $scope.orderURLCliente = $scope.orderURLCliente + "-" + order + "," + align;
            }
            $location.url(`producto/plist/` + $scope.rpp + `/` + $scope.page + `/` + $scope.orderURLCliente);
        }

        //getcount
        $http({
            method: 'GET',
            url: 'json?ob=producto&op=getcount'
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDataNum = response.data.message;
            $scope.totalPages = Math.ceil($scope.ajaxDataNum / $scope.rpp);
            if ($scope.page > $scope.totalPages) {
                $scope.page = $scope.totalPages;
                $scope.update();
            }
            pagination2();
        }, function (response) {
            $scope.ajaxDataNum = response.data.message || 'Request failed';
            $scope.status = response.status;
        });

        $http({
            method: 'GET',
            url: 'json?ob=producto&op=getpage&rpp=' + $scope.rpp + '&page=' + $scope.page + $scope.orderURLServidor
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxData = response.data.message;
        }, function (response) {
            $scope.status = response.status;
            $scope.ajaxData = response.data.message || 'Request failed';
        });



        $scope.update = function () {
            $location.url(`carrito/plist/` + $scope.rpp + `/` + $scope.page + '/' + $scope.orderURLCliente);
        };


        $scope.carrito = function () {
            $location.url(`carrito/carrito`);
        };

        //paginacion neighbourhood
        function pagination2() {
            $scope.list2 = [];
            $scope.neighborhood = 3;
            for (var i = 1; i <= $scope.totalPages; i++) {
                if (i === $scope.page) {
                    $scope.list2.push(i);
                } else if (i <= $scope.page && i >= ($scope.page - $scope.neighborhood)) {
                    $scope.list2.push(i);
                } else if (i >= $scope.page && i <= ($scope.page - -$scope.neighborhood)) {
                    $scope.list2.push(i);
                } else if (i === ($scope.page - $scope.neighborhood) - 1) {
                    $scope.list2.push("...");
                } else if (i === ($scope.page - -$scope.neighborhood) + 1) {
                    $scope.list2.push("...");
                }
            }
        }


        $scope.isActive = toolService.isActive;



        $scope.existencias = function (idProd) {
            var arrayLength = $scope.ajaxDataAdd.length;
            for (var i = 0; i < arrayLength; i++) {
                if ($scope.ajaxDataAdd !== null && $scope.ajaxDataAdd !== "Carrito vacio") {
                    if ($scope.ajaxDataAdd[i].obj_producto.id === idProd) {
                        return $scope.ajaxDataAdd[i].cantidad;
                    }
                }
            }
            return 0;

        }



    }

]);