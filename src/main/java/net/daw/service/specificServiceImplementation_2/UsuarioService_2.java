/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.service.specificServiceImplementation_2;

import net.daw.service.specificServiceImplementation_1.*;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.sql.Connection;

import javax.servlet.http.HttpServletRequest;
import net.daw.bean.beanImplementation.ReplyBean;
import net.daw.bean.beanImplementation.UsuarioBean;
import net.daw.connection.publicinterface.ConnectionInterface;
import net.daw.constant.ConnectionConstants;
import net.daw.dao.specificDaoImplementation_0.UsuarioDao_0;
import net.daw.dao.specificDaoImplementation_1.UsuarioDao_1;
import net.daw.dao.specificDaoImplementation_2.UsuarioDao_2;
import net.daw.factory.ConnectionFactory;
import net.daw.helper.EncodingHelper;
import net.daw.service.genericServiceImplementation.GenericServiceImplementation;
import net.daw.service.publicServiceInterface.ServiceInterface;

/**
 *
 * @author Ramón
 */
public class UsuarioService_2 extends GenericServiceImplementation implements ServiceInterface {

    public UsuarioService_2(HttpServletRequest oRequest) {
        super(oRequest);
        ob = oRequest.getParameter("ob");
    }

    public ReplyBean fill() throws Exception {
        ReplyBean oReplyBean;
        ConnectionInterface oConnectionPool = null;
        Connection oConnection;
        try {
            Integer number = Integer.parseInt(oRequest.getParameter("number"));
            Gson oGson = (new GsonBuilder()).excludeFieldsWithoutExposeAnnotation().create();
            oConnectionPool = ConnectionFactory.getConnection(ConnectionConstants.connectionPool);
            oConnection = oConnectionPool.newConnection();
            UsuarioDao_2 oUsuarioDao = new UsuarioDao_2(oConnection, ob, oUsuarioBeanSession);
            UsuarioBean oUsuarioBean = new UsuarioBean();
            for (int i = 1; i <= number; i++) {
                oUsuarioBean.setDni("765934875A");
                oUsuarioBean.setNombre("Rigoberto");
                oUsuarioBean.setApe1("Pérez");
                oUsuarioBean.setApe2("Gómez");
                oUsuarioBean.setLogin("ripego");
                oUsuarioBean.setPass("hola");
                oUsuarioBean.setId_tipoUsuario(2);
                oUsuarioBean = (UsuarioBean) oUsuarioDao.create(oUsuarioBean);
            }
            oReplyBean = new ReplyBean(200, oGson.toJson(number));
        } catch (Exception ex) {
            throw new Exception("ERROR: Service level: create method: " + ob + " object", ex);
        } finally {
            oConnectionPool.disposeConnection();
        }

        return oReplyBean;
    }

//    public ReplyBean login() throws Exception {
//        ReplyBean oReplyBean;
//        ConnectionInterface oConnectionPool = null;
//        Connection oConnection;
//        String strLogin = oRequest.getParameter("user");
//        String strPassword = oRequest.getParameter("pass");
//
//        oConnectionPool = ConnectionFactory.getConnection(ConnectionConstants.connectionPool);
//        oConnection = oConnectionPool.newConnection();
//        UsuarioDao_0 oUsuarioDao = new UsuarioDao_0(oConnection, ob, oUsuarioBeanSession);
//
//        UsuarioBean oUsuarioBean = oUsuarioDao.login(strLogin, strPassword);
//        if (oUsuarioBean != null) {
//            if (oUsuarioBean.getId() > 0) {
//                oRequest.getSession().setAttribute("user", oUsuarioBean);
//                oRequest.getSession().setAttribute("user_id", oUsuarioBean.getId());
//                Gson oGson = (new GsonBuilder()).excludeFieldsWithoutExposeAnnotation().create();
//                oReplyBean = new ReplyBean(200, oGson.toJson(oUsuarioBean));
//            } else {
//                //throw new Exception("ERROR Bad Authentication: Service level: get page: " + ob + " object");
//                oReplyBean = new ReplyBean(401, "Bad Authentication");
//            }
//        } else {
//            oReplyBean = new ReplyBean(401, "Bad Authentication");
//        }
//        oConnectionPool.disposeConnection();
//        return oReplyBean;
//    }

    public ReplyBean logout() throws Exception {
        oRequest.getSession().invalidate();
        return new ReplyBean(200, EncodingHelper.quotate("OK"));
    }

    public ReplyBean check() throws Exception {
        ReplyBean oReplyBean;
        //Aquí  no haría falta el usuarioBean de session, ya lo cogemos del generic, pero lo dejo por ahora:
        UsuarioBean oUsuarioBean;
        oUsuarioBean = (UsuarioBean) oRequest.getSession().getAttribute("user");
        if (oUsuarioBean != null) {
            Gson oGson = (new GsonBuilder()).excludeFieldsWithoutExposeAnnotation().create();
            oReplyBean = new ReplyBean(200, oGson.toJson(oUsuarioBean));
        } else {
            oReplyBean = new ReplyBean(401, "No active session");
        }
        return oReplyBean;
    }
}
