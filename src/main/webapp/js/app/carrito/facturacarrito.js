
'use strict'
//http://localhost:8081/json?ob=usuario&op=login&user=ddd&pass=pass
moduleFactura.controller('facturaCarritoController', ['$scope', '$http', '$location', 'toolService', '$routeParams', 'sessionService',
    function ($scope, $http, $location, toolService, $routeParams, sessionService) {

        if (!$routeParams.id) {
            $scope.id = 1;
        } else {
            $scope.id = $routeParams.id;
        }

        $scope.miFormato = function (valor) {
            return isNaN(valor) ? valor : parseFloat(valor).toFixed(2);
        }
//       if (sessionService.getUserName() !== "") {
//            $scope.loggeduser = sessionService.getUserName();
//            $scope.loggeduserid = sessionService.getId();
//            $scope.logged = true;
//            $scope.tipousuarioID = sessionService.getTypeUserID();
//        }

        $scope.isActive = toolService.isActive;

        $http({
            method: 'GET',
            url: 'json?ob=linea&op=getlineafactura&rpp=10&page=1&idfactura=' + $scope.id
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDataUsuarios = response.data.message;
            var cant = 0;
            var precio = 0;
            var iva = 0;
            var acum = 0;
            $scope.total = null;

            if (response.data.message.length !== null) {
                for (var i = 0; i < response.data.message.length; i++) {
                    cant = response.data.message[i].cantidad;
                    precio = response.data.message[i].obj_Producto.precio;
                    iva = response.data.message[i].obj_Factura.iva;
                    acum = acum + ((((iva / 100) * precio) + precio) * cant);
                    $scope.total = acum;
                }
            }

        }, function (response) {
            $scope.status = response.status;
            $scope.ajaxDataUsuarios = response.data.message || 'Request failed';
        });


        $scope.volver = function () {
            $location.url(`carrito/plist/`);
}

       $scope.pdf = function () {
            var usuario;
            var fecha;
            var lineasTotales;
            var iva;
            var dni;
            var length = $scope.ajaxDataUsuarios.length;
            console.log(length);
            var doc = new jsPDF();
            for (var i = 0; i < length; i++) {
                console.log($scope.ajaxDataUsuarios[i]);
//                if ($scope.ajaxDataUsuarios[i].id === $scope.id) {
                usuario = $scope.ajaxDataUsuarios[i].obj_Factura.obj_Usuario.nombre + ' ' + $scope.ajaxDataUsuarios[i].obj_Factura.obj_Usuario.ape1 + ' ' + $scope.ajaxDataUsuarios[i].obj_Factura.obj_Usuario.ape2;
                fecha = $scope.ajaxDataUsuarios[i].obj_Factura.fecha;
                lineasTotales = $scope.ajaxDataUsuarios[i].obj_Factura.link_linea;
                iva = $scope.ajaxDataUsuarios[i].obj_Factura.iva;
                dni = $scope.ajaxDataUsuarios[i].obj_Factura.obj_Usuario.dni;
//                }
            }
            ;


            $http({
                method: 'GET',
                url: 'json?ob=linea&op=getlineafactura&rpp=10000&page=1&idfactura=' + $scope.id


            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxLineasFactura = response.data.message;
                console.log($scope.ajaxLineasFactura);
                var imgData = 'data:image/gif;base64,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';

                //CABECERA
                doc.setDrawColor(255,0,0);
                doc.rect(8, 10, 195, 70);
                doc.rect(8, 10, 85, 70);
                doc.addImage(imgData, 'JPEG', 155, 12, 42, 40);
                doc.setFontSize(13);
                doc.setFontType('bold');
                doc.text(100, 20, 'LIZ CIMIENTOS SL');
                doc.text(100, 40, 'Tel. 967 08 00 47');
                doc.text(100, 50, 'Email: liz@gmail.com');
                doc.text(100, 30, 'CIF. B8541236');
                doc.setFontType('normal');
                doc.text(100, 62, 'Direccion: C/ Juan Martinez n 45 Pta 78 Piso 2');
                doc.text(100, 72, 'C.P: 64522 Valencia (Valencia)');

                doc.setFontSize(30);
                doc.setFontType('bold');
                doc.text(15, 23, 'Factura N ' + $scope.id);
                doc.setFontSize(16);
                doc.setFontType('normal');
                doc.text(15, 40, 'Cliente: ' + usuario);
                doc.text(15, 50, 'DNI: ' + dni);
                doc.text(15, 60, 'Fecha: ' + fecha);


                doc.rect(8, 80, 195, 210);
                doc.setFontSize(15);
                doc.text(12, 90, 'Codigo');
                doc.text(50, 90, 'Descripcion');
                doc.text(125, 90, 'Cantidad');
                doc.text(170, 90, 'Precio');
                doc.setFillColor(10, 26, 244);
                doc.rect(9, 93, 193, 3, 'F');
                doc.setFontSize(15);

                //LINEAS DE LA FACTURA
                var linea = 107;
                var precio = 0;
                var cantidad = 0;
                for (var x = 0; x <= lineasTotales - 1; x++) {
                    if (x % 14 === 0 && x !== 0) {
                        doc.addPage('a4', 1);
                        //CABECERA
                        doc.rect(8, 10, 195, 70);
                        doc.rect(8, 10, 85, 70);
                        doc.addImage(imgData, 'JPEG', 155, 12, 42, 40);
                        doc.setFontSize(13);
                        doc.setFontType('bold');
                        doc.text(100, 20, 'LIZ CIMIENTOS SL');
                        doc.text(100, 40, 'Tel. 967 08 00 47');
                        doc.text(100, 50, 'Email: liz@gmail.com');
                        doc.text(100, 30, 'CIF. B8541236');
                        doc.setFontType('normal');
                        doc.text(100, 62, 'Direccion: C/ Juan Martinez n 45 Pta 78 Piso 2');
                        doc.text(100, 72, 'C.P: 64522 Valencia (Valencia)');


                        doc.setFontSize(30);
                        doc.setFontType('bold');
                        doc.text(15, 23, 'Factura N ' + $scope.id);
                        doc.setFontSize(16);
                        doc.setFontType('normal');
                        doc.text(15, 40, 'Cliente: ' + usuario);
                        doc.text(15, 50, 'DNI: ');
                        doc.text(15, 60, 'Fecha: ' + fecha);

                        doc.rect(8, 80, 195, 210);
                        doc.setFontSize(15);
                        doc.text(12, 90, 'Codigo');
                        doc.text(50, 90, 'Descripcion');
                        doc.text(125, 90, 'Cantidad');
                        doc.text(170, 90, 'Precio');
                      doc.setFillColor(10, 26, 244);                      
                        doc.rect(9, 93, 193, 3, 'F');
                        doc.setFontSize(15);
                        linea = 107;
                    }
                    doc.text(12, linea, $scope.ajaxLineasFactura[x].obj_Producto.codigo);
                    doc.text(50, linea, $scope.ajaxLineasFactura[x].obj_Producto.desc);
                    doc.text(125, linea, ($scope.ajaxLineasFactura[x].cantidad).toString());
                    doc.text(170, linea, (parseFloat(($scope.ajaxLineasFactura[x].obj_Producto.precio)).toFixed(2).toString()));
                    linea = linea + 13;
                    precio = (precio + $scope.ajaxLineasFactura[x].obj_Producto.precio);
                    cantidad = cantidad + $scope.ajaxLineasFactura[x].cantidad;
                }

                //FOOTER DE FACTURA
                doc.setFillColor(10, 26, 244);  
                doc.rect(9, 260, 193, 5, 'F');
                doc.text(12, 273, 'Cantidad Total');
                doc.text(70, 273, 'Precio');
                doc.text(115, 273, 'IVA');
                doc.text(150, 273, 'Precio Total()');

                doc.text(23, 285, cantidad.toString());
                doc.text(70, 285, (precio.toFixed(2).toString()));
                doc.text(115, 285, (precio * (iva / 100)).toFixed(2).toString());
                doc.text(158, 285, (precio * (iva / 100 + 1)).toFixed(2).toString());

                doc.output('save', 'Factura-' + $scope.id + '.pdf'); //Try to save PDF as a file (not works on ie before 10, and some mobile devices)
//                doc.output('datauristring');        //returns the data uri string
//                doc.output('datauri');              //opens the data uri in current window
//                doc.output('dataurlnewwindow');     //opens the data uri in new window
            }, function (response) {
                $scope.status = response.status;
                $scope.ajaxLineasFactura = response.data.message || 'Request failed';
            });





        };

        $scope.isActive = toolService.isActive;



    }
]);