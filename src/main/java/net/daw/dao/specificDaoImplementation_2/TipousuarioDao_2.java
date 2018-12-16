package net.daw.dao.specificDaoImplementation_2;

import net.daw.dao.specificDaoImplementation_1.*;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.HashMap;
import net.daw.bean.beanImplementation.TipousuarioBean;
import net.daw.bean.beanImplementation.UsuarioBean;
import net.daw.bean.publicBeanInterface.BeanInterface;
import net.daw.dao.genericDaoImplementation.GenericDaoImplementation;
import net.daw.dao.publicDaoInterface.DaoInterface;

public class TipousuarioDao_2 extends GenericDaoImplementation implements DaoInterface {

    public TipousuarioDao_2(Connection oConnection, String ob, UsuarioBean oUsuarioBeanSession) {
        super(oConnection, ob, oUsuarioBeanSession);

    }

    public TipousuarioBean get(int id, Integer expand) throws Exception {
        if (id == oUsuarioBeanSession.getId_tipoUsuario()) {
            return (TipousuarioBean) super.get(id, expand);
        } else {
            throw new Exception("Error en Dao get de " + ob + ": No autorizado");
        }
    }

    	public int remove(int id) throws Exception {
		throw new Exception("Error en Dao remove de " + ob + ": No autorizado");
	}

	public int getcount() throws Exception {
		throw new Exception("Error en Dao getcount de " + ob + ": No autorizado");
	}

	public TipousuarioBean create(TipousuarioBean oTipousuarioBean) throws Exception {
		throw new Exception("Error en Dao create de " + ob + ": No autorizado");
	}

	public int update(TipousuarioBean oTipousuarioBean) throws Exception {
		throw new Exception("Error en Dao update de " + ob + ": No autorizado");
	}

public ArrayList<BeanInterface> getpage(int iRpp, int iPage, HashMap<String, String> hmOrder, Integer expand) throws Exception {
        throw new Exception("Error en Dao getpage de " + ob + ": No autorizado");

    }
    
}
