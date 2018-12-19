'use strict'

moduleFactura.controller('facturaplistxusuarioController', ['$scope', '$http', '$location', 'toolService', '$routeParams', 'sessionService',
    function ($scope, $http, $location, toolService, $routeParams, sessionService) {

        $scope.ob = "factura";
        $scope.totalPages = 1;
        
        
//          if (sessionService.getUserName() !== "") {
//            $scope.loggeduser = sessionService.getUserName();
//            $scope.loggeduserid = sessionService.getId();
//            $scope.logged = true;
//            $scope.tipousuarioID = sessionService.getTypeUserID();
//        }

         $scope.tipousuarioID=sessionService.getTypeUserID();
         console.log($scope.tipousuarioID);
     
        
        if (!$routeParams.id) {
            $scope.id= 1;  
        } else {
            $scope.id= $routeParams.id;
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
        $scope.linea = function (id) {
            $location.url(`linea/plistxusuario/10/1/${id}`);
        }

        $scope.resetOrder = function () {
            $location.url($scope.ob + `/plistxusuario/` + $scope.rpp + `/` + $scope.page + `/` + $scope.id);
        }

        $scope.view = function (id) {
            $location.url($scope.ob + `/view/${id}`);
        }

        $scope.remove = function (id) {
            $location.url($scope.ob + `/remove/${id}`);
        }

        $scope.edit = function (id) {
            $location.url($scope.ob + `/edit/${id}`);
        }

        $scope.ordena = function (order, align) {
            if ($scope.orderURLServidor == "") {
                $scope.orderURLServidor = "&order=" + order + "," + align;
                $scope.orderURLCliente = order + "," + align;
            } else {
                $scope.orderURLServidor = $scope.orderURLServidor + "-" + order + "," + align;
                $scope.orderURLCliente = $scope.orderURLCliente + "-" + order + "," + align;
            }
            $location.url($scope.ob + `/plistxusuario/` + $scope.rpp + `/` + $scope.page + `/` + $scope.id + `/` + $scope.orderURLCliente);
        }
        
        
        $scope.vacio=false;
        //getcount
        $http({
            method: 'GET',
           url: 'json?ob=factura&op=getcountxusuario&id=' + $routeParams.id
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDataUsuariosNumber = response.data.message;
//            if ($scope.ajaxDataUsuariosNumber === 0) {
//                $scope.vacio=true;
//            }
            
            $scope.totalPages = Math.ceil($scope.ajaxDataUsuariosNumber / $scope.rpp);
            if ($scope.page > $scope.totalPages) {
                $scope.page = $scope.totalPages;
                $scope.update();
            }
            pagination2();
        }, function (response) {
            $scope.ajaxDataUsuariosNumber = response.data.message || 'Request failed';
            $scope.status = response.status;
        });
        
     
        
        
        
        $http({
            method: 'GET',
            url: 'json?ob=factura&op=getpagexusuario&id=' + $routeParams.id + '&rpp=' + $scope.rpp + '&page=' + $scope.page + $scope.orderURLServidor
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDataUsuarios = response.data.message;
            
        }, function (response) {
            $scope.status = response.status;
            $scope.ajaxDataUsuarios = response.data.message || 'Request failed';
        });

        $http({
            method: 'GET',
            url: 'json?ob=usuario&op=get&id=' + $scope.id
        }).then(function (response) {
            $scope.status = response.status;
            $scope.nombre2 = response.data.message.nombre;
            $scope.ape1 = response.data.message.ape1;
        }, function (response) {
            $scope.status = response.status;
            
        });

        $scope.update = function () {
             $location.url($scope.ob + `/plistxusuario/` + $scope.rpp + `/` + $scope.page + `/` + $scope.id + `/` + $scope.orderURLCliente);
        }




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
        $scope.openModal = function () {

        }


    }
]);
