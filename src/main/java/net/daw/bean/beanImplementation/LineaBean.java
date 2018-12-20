/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.bean.beanImplementation;

import com.google.gson.annotations.Expose;
import java.sql.Connection;
import java.sql.ResultSet;
import net.daw.bean.genericBeanImplementation.GenericBeanImplementation;
import net.daw.bean.publicBeanInterface.BeanInterface;
import net.daw.dao.publicDaoInterface.DaoInterface;
import net.daw.dao.specificDaoImplementation_1.FacturaDao_1;
import net.daw.dao.specificDaoImplementation_1.ProductoDao_1;
import net.daw.factory.DaoFactory;

public class LineaBean extends GenericBeanImplementation implements BeanInterface {

//    @Expose
//    private int id;
    @Expose
    private int cantidad;
    @Expose(serialize = false)
    private int id_producto;
    @Expose(serialize = false)
    private int id_factura;
    @Expose(deserialize = false)
    private ProductoBean obj_Producto;
    @Expose(deserialize = false)
    private FacturaBean obj_Factura;

    public ProductoBean getObj_Producto() {
        return obj_Producto;
    }

    public void setObj_Producto(ProductoBean obj_Producto) {
        this.obj_Producto = obj_Producto;
    }

    public FacturaBean getObj_Factura() {
        return obj_Factura;
    }

    public void setObj_Factura(FacturaBean obj_Factura) {
        this.obj_Factura = obj_Factura;
    }

//    public int getId() {
//        return id;
//    }
//
//    public void setId(int id) {
//        this.id = id;
//    }
    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public int getId_producto() {
        return id_producto;
    }

    public void setId_producto(int id_producto) {
        this.id_producto = id_producto;
    }

    public int getId_factura() {
        return id_factura;
    }

    public void setId_factura(int id_factura) {
        this.id_factura = id_factura;
    }

    @Override
    public LineaBean fill(ResultSet oResultSet, Connection oConnection, Integer expand, UsuarioBean oUsuarioBeanSession) throws Exception {

        this.setId(oResultSet.getInt("id"));
        this.setCantidad(oResultSet.getInt("cantidad"));

        if (expand > 0) {
           // ProductoDao_1 oproductoDao = new ProductoDao_1(oConnection, "producto", oUsuarioBeanSession);
           DaoInterface oproductoDao = DaoFactory.getDao(oConnection, "producto", oUsuarioBeanSession);
            this.setObj_Producto((ProductoBean) oproductoDao.get(oResultSet.getInt("id_producto"), expand - 1));
        } else {
            this.setId_producto(oResultSet.getInt("id_producto"));
        }

        if (expand > 0) {
            //FacturaDao_1 oFacturaDao = new FacturaDao_1(oConnection, "factura", oUsuarioBeanSession);
            DaoInterface oFacturaDao = DaoFactory.getDao(oConnection, "factura", oUsuarioBeanSession);
            this.setObj_Factura((FacturaBean) oFacturaDao.get(oResultSet.getInt("id_factura"), expand - 1));
        } else {
            this.setId_factura(oResultSet.getInt("id_factura"));
        }

        return this;
    }

    @Override
    public String getPairs() {
        String strPairs = "";
        strPairs += "id=" + id + ",";
        strPairs += "cantidad=" + cantidad + ",";
        strPairs += "id_producto=" + id_producto + ",";
        strPairs += "id_factura=" + id_factura;
        strPairs += " WHERE id=" + id;
        return strPairs;

    }

    @Override
    public String getColumns() {
        String strColumns = "";
        strColumns += "id,";
        strColumns += "cantidad,";
        strColumns += "id_producto,";
        strColumns += "id_factura";
        return strColumns;
    }

    @Override
    public String getValues() {

        String strColumns = "";
        strColumns += "null,";
        strColumns += this.getCantidad() + ",";
        strColumns += this.getId_producto() + ",";
        strColumns += this.getId_factura();

        return strColumns;
    }

}
