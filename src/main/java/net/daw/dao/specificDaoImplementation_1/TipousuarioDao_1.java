package net.daw.dao.specificDaoImplementation_1;

import java.sql.Connection;
import net.daw.bean.beanImplementation.UsuarioBean;
import net.daw.dao.genericDaoImplementation.GenericDaoImplementation;
import net.daw.dao.publicDaoInterface.DaoInterface;

public class TipousuarioDao_1  extends GenericDaoImplementation implements DaoInterface{

public TipousuarioDao_1(Connection oConnection, String ob,UsuarioBean oUsuarioBeanSession) {
        super(oConnection, ob, oUsuarioBeanSession);

    }

}
