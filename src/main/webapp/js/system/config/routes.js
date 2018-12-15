
wildcart.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'js/app/common/home.html', controller: 'homeController'});
        $routeProvider.when('/usuario/plist/:rpp?/:page?/:order?', {templateUrl: 'js/app/usuario/plist.html', controller: 'usuarioPlistController'});
        $routeProvider.when('/usuario/editpass/:id', {templateUrl: 'js/app/usuario/editpass.html', controller: 'usuarioEditpassController'});

        $routeProvider.when('/tipousuario/plist/:rpp?/:page?/:order?', {templateUrl: 'js/app/tipousuario/plist.html', controller: 'tipousuarioPlistController'});
        $routeProvider.when('/tipousuario/view/:id', {templateUrl: 'js/app/tipousuario/view.html', controller: 'tipousuarioViewController'});
        $routeProvider.when('/tipousuario/edit/:id?', {templateUrl: 'js/app/tipousuario/edit.html', controller: 'tipousuarioEditController'});
        $routeProvider.when('/tipousuario/remove/:id', {templateUrl: 'js/app/tipousuario/remove.html', controller: 'tipousuarioRemoveController'});
        $routeProvider.when('/usuario/view/:id', {templateUrl: 'js/app/usuario/view.html', controller: 'usuarioViewController'});
        $routeProvider.when('/usuario/new', {templateUrl: 'js/app/usuario/new.html', controller: 'usuarioNewController'});
        $routeProvider.when('/tipousuario/new', {templateUrl: 'js/app/tipousuario/new.html', controller: 'tipousuarioNewController'});
        $routeProvider.when('/producto/new', {templateUrl: 'js/app/producto/new.html', controller: 'productoNewController'});
        $routeProvider.when('/usuario/edit/:id', {templateUrl: 'js/app/usuario/edit.html', controller: 'usuarioEditController'});
        $routeProvider.when('/producto/edit/:id', {templateUrl: 'js/app/producto/edit.html', controller: 'productoEditController'});
        $routeProvider.when('/usuario/remove/:id', {templateUrl: 'js/app/usuario/remove.html', controller: 'usuarioRemoveController'});
        $routeProvider.when('/producto/remove/:id', {templateUrl: 'js/app/producto/remove.html', controller: 'productoRemoveController'});

        $routeProvider.when('/factura/plist/:rpp?/:page?/:order?', {templateUrl: 'js/app/factura/plist.html', controller: 'facturaPlistController'});
        $routeProvider.when('/factura/plistxusuario/:rpp?/:page?/:id?/:order?', {templateUrl: 'js/app/factura/plistxusuario.html', controller: 'facturaplistxusuarioController'});
        $routeProvider.when('/factura/remove/:id', {templateUrl: 'js/app/factura/remove.html', controller: 'facturaRemoveController'});
        $routeProvider.when('/factura/view/:id?', {templateUrl: 'js/app/factura/view.html', controller: 'facturaViewController'});
        $routeProvider.when('/factura/new', {templateUrl: 'js/app/factura/new.html', controller: 'facturaNewController'});
        $routeProvider.when('/factura/edit/:id', {templateUrl: 'js/app/factura/edit.html', controller: 'facturaEditController'});
        $routeProvider.when('/factura/newxusuario/:id', {templateUrl: 'js/app/factura/newxusuario.html', controller: 'facturanewxusuarioController'});

        $routeProvider.when('/linea/plistxusuario/:rpp?/:page?/:id?/:order?', {templateUrl: 'js/app/linea/plistxusuario.html', controller: 'lineaplistxusuarioController'});
        $routeProvider.when('/linea/newxusuario/:id', {templateUrl: 'js/app/linea/newxusuario.html', controller: 'lineanewxusuarioController'});


        $routeProvider.when('/tipoproducto/plist/:rpp?/:page?/:order?', {templateUrl: 'js/app/tipoproducto/plist.html', controller: 'tipoproductoPlistController'});
        $routeProvider.when('/tipoproducto/remove/:id', {templateUrl: 'js/app/tipoproducto/remove.html', controller: 'tipoproductoRemoveController'});
        $routeProvider.when('/tipoproducto/view/:id?', {templateUrl: 'js/app/tipoproducto/view.html', controller: 'tipoproductoViewController'});
        $routeProvider.when('/tipoproducto/new', {templateUrl: 'js/app/tipoproducto/new.html', controller: 'tipoproductoNewController'});
        $routeProvider.when('/tipoproducto/edit/:id', {templateUrl: 'js/app/tipoproducto/edit.html', controller: 'tipoproductoEditController'});


        $routeProvider.when('/linea/plist/:rpp?/:page?/:order?', {templateUrl: 'js/app/linea/plist.html', controller: 'lineaPlistController'});
        $routeProvider.when('/linea/view/:id', {templateUrl: 'js/app/linea/view.html', controller: 'lineaViewController'});
        $routeProvider.when('/linea/remove/:id', {templateUrl: 'js/app/linea/remove.html', controller: 'lineaRemoveController'});
        $routeProvider.when('/linea/edit/:id', {templateUrl: 'js/app/linea/edit.html', controller: 'lineaEditController'});
        $routeProvider.when('/linea/new', {templateUrl: 'js/app/linea/new.html', controller: 'lineaNewController'});


        $routeProvider.when('/producto/plist/:rpp?/:page?/:order?', {templateUrl: 'js/app/producto/plist.html', controller: 'productoPlistController'});
        $routeProvider.when('/producto/view/:id?', {templateUrl: 'js/app/producto/view.html', controller: 'productoViewController'});
        $routeProvider.when('/usuario/login', {templateUrl: 'js/app/usuario/login.html', controller: 'usuarioLoginController'});
        $routeProvider.when('/usuario/logout', {templateUrl: 'js/app/usuario/logout.html', controller: 'usuarioLogoutController'});

        $routeProvider.when('/carrito/plist/:rpp?/:page?/:order?', {templateUrl: 'js/app/carrito/plist.html', controller: 'carritoPlistController'});
        $routeProvider.when('/carrito/carrito/:rpp?/:page?/:order?', {templateUrl: 'js/app/carrito/carrito.html', controller: 'carritoCarritoController'});
        $routeProvider.when('/carrito/facturacarrito/:id?', {templateUrl: 'js/app/carrito/facturacarrito.html', controller: 'facturaCarritoController'});
        $routeProvider.otherwise({redirectTo: '/'});
    }]);
