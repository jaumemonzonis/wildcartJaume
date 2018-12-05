moduloDirectivas.component('headerComponent', {
    templateUrl: 'js/components/header.html',
    bindings: {
    },
    controllerAs: 'c',
    controller: js
});

function js(toolService,sessionService){
    var self = this;

    self.logged = sessionService.isSessionActive();
    console.log(self.logged);
    self.usuariologeado = sessionService.getUserName();
    self.idUsuariologeado = sessionService.getUserId();

    self.isActive = toolService.isActive;

   // self.isAdmin = sessionService.isAdmin();

   // self.carrito = sessionService.getCountCarrito();
/*
    sessionService.registerObserverCallback( function (){
        self.carrito = sessionService.getCountCarrito();
    })*/
}