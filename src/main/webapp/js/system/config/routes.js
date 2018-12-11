trolleyes.config(['$routeProvider', function ($routeProvider) {
        //USUARIO
        $routeProvider.when('/usuario/plist/:rpp?/:page?/:order?', {templateUrl: 'js/app/usuario/plist.html', controller: 'usuarioPlistController'});
        $routeProvider.when('/usuario/plist', {templateUrl: 'js/app/usuario/plist.html', controller: 'usuarioPlistController'});
        $routeProvider.when('/usuario/view/:id?', {templateUrl: 'js/app/usuario/view.html', controller: 'usuarioViewController'});
        $routeProvider.when('/usuario/edit/:id?', {templateUrl: 'js/app/usuario/edit.html', controller: 'usuarioEditController'});
        $routeProvider.when('/usuario/remove/:id?', {templateUrl: 'js/app/usuario/remove.html', controller: 'usuarioRemoveController'});
        $routeProvider.when('/usuario/create/', {templateUrl: 'js/app/usuario/create.html', controller: 'usuarioCreateController'});
        $routeProvider.when('/usuario/plistfactura/:id?/:rpp?/:page?/:order?', {templateUrl: 'js/app/usuario/plistfactura.html', controller: 'usuarioPlistFacturaController'});
        $routeProvider.when('/usuario/new', {templateUrl: 'js/app/usuario/new.html', controller: 'usuarioNewController'});

        //TIPOUSUARIO
        $routeProvider.when('/tipousuario/plist/:rpp?/:page?/:order?', {templateUrl: 'js/app/tipousuario/plist.html', controller: 'tipousuarioPlistController'});
        $routeProvider.when('/tipousuario/edit/:id?', {templateUrl: 'js/app/tipousuario/edit.html', controller: 'tipousuarioEditController'});
        $routeProvider.when('/tipousuario/view/:id?', {templateUrl: 'js/app/tipousuario/view.html', controller: 'tipousuarioViewController'});
        $routeProvider.when('/tipousuario/remove/:id?', {templateUrl: 'js/app/tipousuario/remove.html', controller: 'tipousuarioRemoveController'});
        $routeProvider.when('/tipousuario/new', {templateUrl: 'js/app/tipousuario/new.html', controller: 'tipousuarioNewController'});

        //FACTURA
        $routeProvider.when('/factura/plist/:rpp?/:page?/:order?', {templateUrl: 'js/app/factura/plist.html', controller: 'facturaPlistController'});
        $routeProvider.when('/factura/edit/:id?', {templateUrl: 'js/app/factura/edit.html', controller: 'facturaEditController'});
        $routeProvider.when('/factura/plistlinea/:id?/:rpp?/:page?/:order?', {templateUrl: 'js/app/factura/plistlinea.html', controller: 'facturaViewController'});
        $routeProvider.when('/factura/remove/:id?', {templateUrl: 'js/app/factura/remove.html', controller: 'facturaRemoveController'});
        $routeProvider.when('/factura/new', {templateUrl: 'js/app/factura/new.html', controller: 'facturaNewController'});
        $routeProvider.when('/factura/newfacturauser/:id?', {templateUrl: 'js/app/factura/newfacturauser.html', controller: 'facturaNewUserController'});


        //TIPOPORDUCTO
        $routeProvider.when('/tipoproducto/plist/:rpp?/:page?/:order?', {templateUrl: 'js/app/tipoproducto/plist.html', controller: 'tipoproductoPlistController'});
        $routeProvider.when('/tipoproducto/edit/:id?', {templateUrl: 'js/app/tipoproducto/edit.html', controller: 'tipoproductoEditController'});
        $routeProvider.when('/tipoproducto/view/:id?', {templateUrl: 'js/app/tipoproducto/view.html', controller: 'tipoproductoViewController'});
        $routeProvider.when('/tipoproducto/remove/:id?', {templateUrl: 'js/app/tipoproducto/remove.html', controller: 'tipoproductoRemoveController'});
        $routeProvider.when('/tipoproducto/new', {templateUrl: 'js/app/tipoproducto/new.html', controller: 'tipoproductoNewController'});

        //PRODUCTO
        $routeProvider.when('/producto/plist/:rpp?/:page?/:order?', {templateUrl: 'js/app/producto/plist.html', controller: 'productoPlistController'});
        $routeProvider.when('/producto/plist_1/:rpp?/:page?/:order?', {templateUrl: 'js/app/producto/plist_1.html', controller: 'productoPlistController'});
        $routeProvider.when('/producto/view/:id?', {templateUrl: 'js/app/producto/view.html', controller: 'productoViewController'});
        $routeProvider.when('/producto/edit/:id?', {templateUrl: 'js/app/producto/edit.html', controller: 'productoEditController'});
        $routeProvider.when('/producto/remove/:id?', {templateUrl: 'js/app/producto/remove.html', controller: 'productoRemoveController'});
        $routeProvider.when('/producto/new', {templateUrl: 'js/app/producto/new.html', controller: 'productoNewController'});
        
        //LINEA
        $routeProvider.when('/linea/edit/:id?', {templateUrl: 'js/app/linea/edit.html', controller: 'lineaEditController'});
        $routeProvider.when('/linea/lineafactura/:id?', {templateUrl: 'js/app/linea/lineafactura.html', controller: 'lineaNewController'});
        //LOGIN
        $routeProvider.when('/login', {templateUrl: 'js/app/login.html', controller: 'loginController'});

        //OTROS
        $routeProvider.when('/', {templateUrl: 'js/app/common/home.html', controller: 'homeController'});
        $routeProvider.when('/home', {templateUrl: 'js/app/common/home.html', controller: 'homeController'});
        $routeProvider.when('/carrito', {templateUrl: 'js/app/common/carrito.html', controller: 'carritoController'});
        
        
        $routeProvider.otherwise({redirectTo: '/'});
    }]);
