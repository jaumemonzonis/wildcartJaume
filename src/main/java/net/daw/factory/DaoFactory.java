/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.factory;
import java.sql.Connection;
import net.daw.bean.beanImplementation.UsuarioBean;
import net.daw.dao.specificDaoImplementation.FacturaDao;
import net.daw.dao.specificDaoImplementation.LineaDao;
import net.daw.dao.specificDaoImplementation.ProductoDao;
import net.daw.dao.specificDaoImplementation.TipoproductoDao;
import net.daw.dao.specificDaoImplementation.TipousuarioDao;
import net.daw.dao.specificDaoImplementation.UsuarioDao;
import net.daw.dao.publicDaoInterface.DaoInterface;

/**
 *
 * @author a044531896d
 */
public class DaoFactory {

    public static DaoInterface getDao(Connection oConnection, String ob,UsuarioBean oUsuarioBeanSession) {
        DaoInterface oDao = null;
        switch (ob) {
            case "usuario":
                oDao = new UsuarioDao(oConnection, ob,oUsuarioBeanSession);
                break;
            case "tipousuario":
                oDao = new TipousuarioDao(oConnection, ob,oUsuarioBeanSession);
                break;
            case "tipoproducto":
                oDao = new TipoproductoDao(oConnection, ob,oUsuarioBeanSession);
                break;
            case "producto":
                oDao = new ProductoDao(oConnection, ob,oUsuarioBeanSession);
                break;
            case "factura":
                oDao = new FacturaDao(oConnection, ob,oUsuarioBeanSession);
                break;
            case "linea":
                oDao = new LineaDao(oConnection, ob,oUsuarioBeanSession);
                break;
        }
        return oDao;
    }
}