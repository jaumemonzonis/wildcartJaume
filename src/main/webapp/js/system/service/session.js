'use strict';



moduleService.service('sessionService', ['$location', function ($location) {
        var isSessionActive = false;
        var userName = "";
        var userId='';
        var tipoUserId= '';
        return {
            getUserName: function () {
                return userName;
            },
            setUserName: function (name) {
                userName = name;
            },
            isSessionActive: function () {
                return isSessionActive;
            },
            setSessionActive: function (name) {
                isSessionActive = true;
            },
            setSessionInactive: function (name) {
                isSessionActive = false;
            },
            getUserId: function () {
                return userId;
            },
            setUserId: function (id) {
                userId = id;
            },
            getTipoUserId: function () {
                return tipoUserId;
            },
            setTipoUserId: function (idTipoUsuario) {
                tipoUserId = idTipoUsuario;
            }
        }

    }]);