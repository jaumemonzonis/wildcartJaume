package net.daw.dao.specificDaoImplementation_1;

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
import net.daw.helper.SqlBuilder;

public class TipoproductoDao_1 extends GenericDaoImplementation implements DaoInterface{

  public TipoproductoDao_1(Connection oConnection, String ob,UsuarioBean oUsuarioBeanSession) {
        super(oConnection, ob, oUsuarioBeanSession);

    }

}
