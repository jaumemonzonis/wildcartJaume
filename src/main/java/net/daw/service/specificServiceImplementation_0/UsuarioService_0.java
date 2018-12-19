 /*
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
  * and open the template in the editor.
  */
 package net.daw.service.specificServiceImplementation_0;
 
 import net.daw.service.specificServiceImplementation_2.*;
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
 import net.daw.factory.ConnectionFactory;
 import net.daw.helper.EncodingHelper;
 import net.daw.service.genericServiceImplementation.GenericServiceImplementation;
 import net.daw.service.publicServiceInterface.ServiceInterface;
 
 /**
  *
  * @author Ramón
  */
 public class UsuarioService_0 extends GenericServiceImplementation implements ServiceInterface {
 
     public UsuarioService_0(HttpServletRequest oRequest) {
         super(oRequest);
         ob = oRequest.getParameter("ob");
     }
 
 
 
     public ReplyBean login() throws Exception {
         ReplyBean oReplyBean;
         ConnectionInterface oConnectionPool = null;
         Connection oConnection;
         String strLogin = oRequest.getParameter("user");
         String strPassword = oRequest.getParameter("pass");
 
         oConnectionPool = ConnectionFactory.getConnection(ConnectionConstants.connectionPool);
         oConnection = oConnectionPool.newConnection();
         UsuarioDao_0 oUsuarioDao = new UsuarioDao_0(oConnection, ob, oUsuarioBeanSession);
 
         UsuarioBean oUsuarioBean = oUsuarioDao.login(strLogin, strPassword);
         if (oUsuarioBean != null) {
             if (oUsuarioBean.getId() > 0) {
                 oRequest.getSession().setAttribute("user", oUsuarioBean);
                 oRequest.getSession().setAttribute("user_id", oUsuarioBean.getId());
                 Gson oGson = (new GsonBuilder()).excludeFieldsWithoutExposeAnnotation().create();
                 oReplyBean = new ReplyBean(200, oGson.toJson(oUsuarioBean));
             } else {
                 oReplyBean = new ReplyBean(401, "Bad Authentication");
             }
         } else {
             oReplyBean = new ReplyBean(401, "Bad Authentication");
         }
         oConnectionPool.disposeConnection();
         return oReplyBean;
     }
 
 
     public ReplyBean check() throws Exception {
         ReplyBean oReplyBean;
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