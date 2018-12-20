wildcart.run(['$rootScope', 'sessionService', '$location', '$http',
    function ($rootScope, sessionService, $location, $http) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {

            if (next.$$route != undefined) {
                var nextUrl = next.$$route.originalPath;
            }

            $http({
                method: 'GET',
                url: 'json?ob=usuario&op=check'
            }).then(function (response) {
                if (response.data.status === 200) {
                    sessionService.setSessionActive();
                    sessionService.setUserName(response.data.message.nombre + " " + response.data.message.ape1);
                    sessionService.setId(response.data.message.id);
                    sessionService.setTypeUserID(response.data.message.obj_tipoUsuario.id);
                } else {
                    sessionService.setSessionInactive;
                    if (nextUrl != '/' && nextUrl != '/home' && nextUrl != '/usuario/login') {
                        $location.path("/");
                    }
                }
            }, function (response) {
                sessionService.setSessionInactive;
                if (nextUrl != '/' && nextUrl != '/home' && nextUrl != '/usuario/login') {
                    $location.path("/");
                }
            });
        })
    }]);
