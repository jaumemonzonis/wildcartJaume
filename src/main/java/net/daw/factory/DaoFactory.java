/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.factory;
import java.sql.Connection;
import net.daw.bean.beanImplementation.UsuarioBean;
import net.daw.dao.specificDaoImplementation_1.FacturaDao_1;
import net.daw.dao.specificDaoImplementation_1.LineaDao_1;
import net.daw.dao.specificDaoImplementation_1.ProductoDao_1;
import net.daw.dao.specificDaoImplementation_1.TipoproductoDao_1;
import net.daw.dao.specificDaoImplementation_1.TipousuarioDao_1;
import net.daw.dao.specificDaoImplementation_1.UsuarioDao_1;
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
                oDao = new UsuarioDao_1(oConnection, ob,oUsuarioBeanSession);
                break;
            case "tipousuario":
                oDao = new TipousuarioDao_1(oConnection, ob,oUsuarioBeanSession);
                break;
            case "tipoproducto":
                oDao = new TipoproductoDao_1(oConnection, ob,oUsuarioBeanSession);
                break;
            case "producto":
                oDao = new ProductoDao_1(oConnection, ob,oUsuarioBeanSession);
                break;
            case "factura":
                oDao = new FacturaDao_1(oConnection, ob,oUsuarioBeanSession);
                break;
            case "linea":
                oDao = new LineaDao_1(oConnection, ob,oUsuarioBeanSession);
                break;
        }
        return oDao;
    }
}