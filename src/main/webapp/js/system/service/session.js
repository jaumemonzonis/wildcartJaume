'use strict';



moduleService.service('sessionService', ['$location', function ($location) {
        var isSessionActive = false;
        var userName = "";
        var idUserLogged = "";
        var tipoUsuarioID = "";
        var sesion = "";

        return {
            getUserName: function () {
                return userName;
            },
            setId: function (id) {
                idUserLogged = id;
            },
            getId: function () {
                return idUserLogged;
            },
            setUserName: function (name) {
                userName = name;
            },
            isSessionActive: function () {
                return isSessionActive;
            },
            setSessionActive: function () {
                isSessionActive = true;
            },
            setTypeUserID: function (id) {
                tipoUsuarioID = id;
            },
            getTypeUserID: function () {
                return tipoUsuarioID;
            },
            setSessionInactive: function () {
                isSessionActive = false;
                userName = "";
                idUserLogged = "";
                tipoUsuarioID = "";
                sesion = "";


            },
            setSesion: function (data) {
                sesion = data;
            },
            getSesion: function () {
                return sesion;
            }
        }

    }]);