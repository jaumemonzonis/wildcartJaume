package net.daw.service;

import java.sql.Connection;

import javax.servlet.http.HttpServletRequest;

import com.google.gson.Gson;

import net.daw.bean.beanImplementation.ReplyBean;
import net.daw.bean.beanImplementation.TipousuarioBean;
import net.daw.connection.publicinterface.ConnectionInterface;
import net.daw.constant.ConnectionConstants;
import net.daw.dao.specificDaoImplementation.TipousuarioDao;
import net.daw.factory.ConnectionFactory;
import net.daw.service.genericServiceImplementation.GenericServiceImplementation;
import net.daw.service.publicServiceInterface.ServiceInterface;

public class TipousuarioService extends GenericServiceImplementation implements ServiceInterface{

    HttpServletRequest oRequest;
    String ob = null;

    public TipousuarioService(HttpServletRequest oRequest) {
        super(oRequest);
        ob = oRequest.getParameter("ob");
    }

}