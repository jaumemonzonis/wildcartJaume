'use strict'

var trolleyes = angular.module('MyApp', [
    'ngRoute',
    'services',
    'commonControllers',
    'tipousuarioControllers',
    'usuarioControllers',
    'tipoproductoControllers',
    'facturaControllers',
    'productoControllers',
    'loginControllers',
    'moduleComponent'
]);


var moduleCommon = angular.module ('commonControllers',[]);
var moduleService = angular.module ('services',[]);
var moduleTipousuario = angular.module ('tipousuarioControllers',[]);
var moduleUsuario = angular.module ('usuarioControllers',[]);
var moduleProducto = angular.module ('productoControllers',[]);
var moduleFactura = angular.module ('facturaControllers',[]);
var moduleTipoproducto = angular.module('tipoproductoControllers',[]);
var moduleLogin = angular.module('loginControllers',[]);
var moduleComponent = angular.module('moduleComponent',[]);