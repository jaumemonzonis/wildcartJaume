package net.daw.dao.specificDaoImplementation_2;

import net.daw.dao.specificDaoImplementation_1.*;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;

import net.daw.bean.beanImplementation.TipoproductoBean;
import net.daw.bean.beanImplementation.UsuarioBean;
import net.daw.dao.genericDaoImplementation.GenericDaoImplementation;
import net.daw.dao.publicDaoInterface.DaoInterface;

public class TipoproductoDao_2 extends GenericDaoImplementation implements DaoInterface {

    public TipoproductoDao_2(Connection oConnection, String ob, UsuarioBean oUsuarioBeanSession) {
        super(oConnection, ob, oUsuarioBeanSession);

    }

    public int remove(int id) throws Exception {
        throw new Exception("Error en Dao remove de " + ob + ": No autorizado");
    }

    public TipoproductoBean create(TipoproductoBean oTipoproductoBean) throws Exception {
        throw new Exception("Error en Dao create de " + ob + ": No autorizado");
    }

    public int update(TipoproductoBean oTipoproductoBean) throws Exception {
        throw new Exception("Error en Dao update de " + ob + ": No autorizado");
    }
}
