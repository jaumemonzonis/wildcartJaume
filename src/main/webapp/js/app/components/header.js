moduloDirectivas.component('headerComponent', {
    templateUrl: 'js/app/components/header.html',
    bindings: {
    },
    controllerAs: 'c',
    controller: js
});


function js(toolService, sessionService, $http, $route) {
    var self = this;


    self.loggeduser = sessionService.getUserName();
    self.loggeduserid = sessionService.getId();
    self.logged = sessionService.isSessionActive();
    self.tipousuarioID = sessionService.getTypeUserID();
    self.isActive = toolService.isActive;
    self.limpiar = sessionService.isSessionActive();


}