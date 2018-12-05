moduloDirectivas.component('headerComponent', {
    templateUrl: 'js/components/header.html',
    bindings: {
    },
    controllerAs: 'c',
    controller: js
});

function js(toolService, sessionService, $http, $route) {
    var self = this;

    self.ocultar = sessionService.isSessionActive();
    console.log(self.ocultar);
    self.usuariologeado = sessionService.getUserName();
    self.idUsuariologeado = sessionService.getUserId();
    self.isActive = toolService.isActive;
    if (sessionService.getTipoUserId() == 1) {
        self.isAdmin = sessionService.getTipoUserId();
    } else {
        self.isUser = sessionService.getTipoUserId();
    }
    // self.carrito = sessionService.getCountCarrito();
    /*
     sessionService.registerObserverCallback( function (){
     self.carrito = sessionService.getCountCarrito();
     })*/

    self.logout = function () {
        $http({
            method: 'GET',
            url: '/json?ob=usuario&op=logout'
        }).then(function (response) {
            if (response.status == 200) {
                sessionService.setSessionInactive();
                sessionService.setUserName("");
                $route.reload();
            }
        });
    };
}