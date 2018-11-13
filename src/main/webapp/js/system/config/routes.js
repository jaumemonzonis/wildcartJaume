trolleyes.config(['$routeProvider', function ($routeProvider) {
    //USUARIO
    $routeProvider.when('/usuario/plist/:rpp?/:page?/:order?', {templateUrl:'js/app/usuario/plist.html', controller: 'usuarioPlistController'});
    $routeProvider.when('/usuario/plist', {templateUrl: 'js/app/usuario/plist.html', controller: 'usuarioPlistController'});
    $routeProvider.when('/usuario/view/:id?', {templateUrl: 'js/app/usuario/view.html', controller: 'usuarioViewController'});
    $routeProvider.when('/usuario/edit/:id?', {templateUrl: 'js/app/usuario/edit.html', controller: 'usuarioEditController'});
    $routeProvider.when('/usuario/remove/:id?', {templateUrl: 'js/app/usuario/remove.html', controller: 'usuarioRemoveController'});


    //TIPOUSUARIO
    $routeProvider.when('/tipousuario/plist/:rpp?/:page?/:order?', {templateUrl: 'js/app/tipousuario/plist.html', controller: 'tipousuarioPlistController'});
    $routeProvider.when('/tipousuario/edit/:id?', {templateUrl: 'js/app/tipousuario/edit.html', controller: 'tipousuarioEditController'});
    $routeProvider.when('/tipousuario/view/:id?', {templateUrl: 'js/app/tipousuario/view.html', controller: 'tipousuarioViewController'});

    //FACTURA
    $routeProvider.when('/factura/plist', {templateUrl: 'js/app/factura/plist.html', controller: 'facturaPlistController'});
    
    //TIPOPORDUCTO
    $routeProvider.when('/tipoproducto/plist', {templateUrl: 'js/app/tipoproducto/plist.html', controller: 'tipoproductoPlistController'});
    
    //PRODUCTO
    $routeProvider.when('/producto/plist', {templateUrl: 'js/app/producto/plist.html', controller: 'productoPlistController'});
    $routeProvider.when('/producto/view/:id?', {templateUrl: 'js/app/producto/view.html', controller: 'productoViewController'});
    
    //LOGIN
    $routeProvider.when('/login', {templateUrl: 'js/app/login.html', controller: 'loginController'});
    
    //OTROS
    $routeProvider.when('/', {templateUrl: 'js/app/common/home.html', controller: 'homeController'});
    $routeProvider.otherwise({redirectTo: '/'});
}]);
