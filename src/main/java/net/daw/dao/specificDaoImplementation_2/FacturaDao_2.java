/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao.specificDaoImplementation_2;

import net.daw.dao.specificDaoImplementation_1.*;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import net.daw.bean.beanImplementation.FacturaBean;
import net.daw.bean.beanImplementation.UsuarioBean;
import net.daw.bean.publicBeanInterface.BeanInterface;
import net.daw.dao.genericDaoImplementation.GenericDaoImplementation;
import net.daw.dao.publicDaoInterface.DaoInterface;

/**
 *
 * @author a044531896d
 */
public class FacturaDao_2 extends GenericDaoImplementation implements DaoInterface {

    public FacturaDao_2(Connection oConnection, String ob, UsuarioBean oUsuarioBeanSession) {
        super(oConnection, ob, oUsuarioBeanSession);

    }

    @Override
    public BeanInterface get(int id, Integer expand) throws Exception {
        FacturaBean oFacturaBean = (FacturaBean) super.get(id, expand);
        if (oFacturaBean.getObj_Usuario().getId() == oUsuarioBeanSession.getId()) {
            return oFacturaBean;
        } else {
            throw new Exception("Error en Dao get de " + ob + ": No autorizado");
        }
    }

    @Override
    public int remove(int id) throws Exception {
        throw new Exception("Error en Dao remove de " + ob + ": No autorizado");
    }

    @Override
    public int getcount() throws Exception {        
         strSQL_getcount = "SELECT COUNT(id) FROM " + ob + " WHERE id_usuario=" +  oUsuarioBeanSession.getId();         
         return super.getcount();
    }

//    @Override
//    public BeanInterface create(BeanInterface oBean) throws Exception {
//        FacturaBean oFacturaBean = (FacturaBean) oBean;
//        if (oFacturaBean.getId_usuario() == oUsuarioBeanSession.getId()) {
//            super.create(oFacturaBean);
//            return oFacturaBean;
//        } else {
//            throw new Exception("Error en Dao create de " + ob + ": No autorizado");
//        }
//
//    }

    @Override
    public int update(BeanInterface oBean) throws Exception {
        throw new Exception("Error en Dao update de " + ob + ": No autorizado");
    }

    @Override
    public ArrayList<BeanInterface> getpage(int iRpp, int iPage, HashMap<String, String> hmOrder, Integer expand) throws Exception {
        throw new Exception("Error en Dao getpage de " + ob + ": No autorizado");

    }

    public int getcountXusuario(int idusuario) throws Exception {        
       String strSQL = "SELECT COUNT(id) FROM " + ob + " WHERE id_usuario=? ";

        int res = 0;
        ResultSet oResultSet = null;
        PreparedStatement oPreparedStatement = null;
        try {
            oPreparedStatement = oConnection.prepareStatement(strSQL);
            oPreparedStatement.setInt(1, idusuario);
            oResultSet = oPreparedStatement.executeQuery();
            if (oResultSet.next()) {
                res = oResultSet.getInt(1);
            }
        } catch (SQLException e) {
            throw new Exception("Error en Dao get de " + ob, e);
        } finally {
            if (oResultSet != null) {
                oResultSet.close();
            }
            if (oPreparedStatement != null) {
                oPreparedStatement.close();
            }
        }
        return res;
    }

    public ArrayList<FacturaBean> getpageXusuario(int iRpp, int iPage, int idUsuario, Integer expand) throws Exception {
        String strSQL = "SELECT * FROM " + ob;
        ArrayList<FacturaBean> alFacturaBean;
        if (iRpp > 0 && iRpp < 100000 && iPage > 0 && iPage < 100000000) {
            strSQL += " WHERE id_usuario=? ";
            strSQL += " LIMIT " + (iPage - 1) * iRpp + ", " + iRpp;
            ResultSet oResultSet = null;
            PreparedStatement oPreparedStatement = null;
            try {

                oPreparedStatement = oConnection.prepareStatement(strSQL);
                oPreparedStatement.setInt(1, idUsuario);
                oResultSet = oPreparedStatement.executeQuery();
                alFacturaBean = new ArrayList<FacturaBean>();

                while (oResultSet.next()) {
                    FacturaBean oFacturaBean = new FacturaBean();
                    oFacturaBean.fill(oResultSet, oConnection, expand, oUsuarioBeanSession);
                    alFacturaBean.add(oFacturaBean);
                }
            } catch (SQLException e) {
                throw new Exception("Error en Dao getpage de " + ob, e);
            } finally {
                if (oResultSet != null) {
                    oResultSet.close();
                }
                if (oPreparedStatement != null) {
                    oPreparedStatement.close();
                }
            }
        } else {
            throw new Exception("Error en Dao getpage de " + ob);
        }
        return alFacturaBean;

    }

}
