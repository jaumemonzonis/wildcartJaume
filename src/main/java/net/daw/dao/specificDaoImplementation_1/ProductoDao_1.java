/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao.specificDaoImplementation_1;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import net.daw.bean.beanImplementation.ProductoBean;
import net.daw.bean.beanImplementation.UsuarioBean;
import net.daw.dao.genericDaoImplementation.GenericDaoImplementation;
import net.daw.dao.publicDaoInterface.DaoInterface;
import net.daw.helper.SqlBuilder;

/**
 *
 * @author a044531896d
 */
public class ProductoDao_1 extends GenericDaoImplementation implements DaoInterface{

   public ProductoDao_1(Connection oConnection, String ob,UsuarioBean oUsuarioBeanSession) {
        super(oConnection, ob,oUsuarioBeanSession);

    }

}
