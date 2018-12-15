'use strict'
moduleComponent.component('facturaSelection', {
    templateUrl: 'js/app/factura/selection.html',
    controllerAs: 'c',
    controller: cController,
    bindings: {
        obj: '=',
        onFacturaSet: '&'
    },
});

function cController($http) {
    var self = this;
    self.ob = "factura";
    self.page = 1;
    self.totalPages = 1;
    self.orderURLServidor = "";
    self.rpp = 10;
    self.id = 1;



    $http({
        method: 'GET',
        url: 'json?ob=' + self.ob + '&op=getcount'
    }).then(function (response) {
        self.status = response.status;
        self.ajaxDataUsuariosNumber = response.data.message;
        self.totalPages = Math.ceil(self.ajaxDataUsuariosNumber / self.rpp);
        if (self.page > self.totalPages) {
            self.page = self.totalPages;
        }
    }, function (response) {
        self.ajaxDataUsuariosNumber = response.data.message || 'Request failed';
        self.status = response.status;
    });

    $http({
        method: 'GET',
        url: 'json?ob=' + self.ob + '&op=getpage&rpp=' + self.rpp + '&page=' + self.page + self.orderURLServidor
    }).then(function (response) {
        self.status = response.status;
        self.data = response.data.message;
    }, function (response) {
        self.status = response.status;
        self.data = response.data.message || 'Request failed';
    });

    self.save = function (id, id_usuario) {
        self.obj.id = id;
        self.obj.id_usuario = id_usuario;
        self.onFacturaSet();
    };


}



