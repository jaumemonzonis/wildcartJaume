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
import net.daw.dao.specificDaoImplementation.TipoproductoDao;
import net.daw.factory.DaoFactory;
import net.daw.helper.EncodingHelper;

/**
 *
 * 
 */
public class ProductoBean extends GenericBeanImplementation implements BeanInterface{


    @Expose
    private String codigo;
    @Expose
    private String desc;
    @Expose
    private int existencias;
    @Expose
    private float precio;
    @Expose
    private String foto;
    @Expose
    private TipoproductoBean obj_TipoproductoBean;

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public int getExistencias() {
        return existencias;
    }

    public void setExistencias(int existencias) {
        this.existencias = existencias;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public TipoproductoBean getObj_TipoproductoBean() {
        return obj_TipoproductoBean;
    }

    public void setObj_TipoproductoBean(TipoproductoBean obj_TipoproductoBean) {
        this.obj_TipoproductoBean = obj_TipoproductoBean;
    }
    
    @Override
    public ProductoBean fill(ResultSet oResultSet, Connection oConnection, Integer expand) throws Exception{
        this.setId(oResultSet.getInt("id"));
        this.setCodigo(oResultSet.getString("codigo"));
        this.setDesc(oResultSet.getString("desc"));
        this.setExistencias(oResultSet.getInt("existencias"));
        this.setPrecio(oResultSet.getFloat("precio"));
        this.setFoto(oResultSet.getString("foto"));
        if(expand > 0){
            DaoInterface oTipoproductoDao = DaoFactory.getDao(oConnection, "tipoproducto");
            this.setObj_TipoproductoBean((TipoproductoBean) oTipoproductoDao.get(oResultSet.getInt("id_tipoProducto"), expand -1));
        }
        return this;
        
    }
    
    @Override
    public String getColumns(){
        String strColumns="";
        strColumns += "id,";
        strColumns += "codigo,";
        strColumns += "producto.desc,";
        strColumns += "existencias,";
        strColumns += "precio,";
        strColumns += "foto,";
        strColumns += "id_tipoProducto";
        return strColumns;
    }
    
    @Override
    public String getValues(){
        String strColumns = "";
        strColumns += "null,";
        strColumns += EncodingHelper.quotate(codigo) + ",";
        strColumns += EncodingHelper.quotate(desc) + ",";
        strColumns += existencias + ",";
        strColumns += precio + ",";
        strColumns += EncodingHelper.quotate(foto) + ",";
        strColumns += obj_TipoproductoBean.getId();
        return strColumns;
    }
    
    @Override
    public String getPairs(){
        String strPairs = "";
        strPairs += "id=" + id + ",";
        strPairs += "codigo=" + EncodingHelper.quotate(codigo) + ",";
        strPairs += "producto.desc=" + EncodingHelper.quotate(desc) + ",";
        strPairs += "existencias=" + existencias + ",";
        strPairs += "precio=" + precio + ",";
        strPairs += "foto=" + EncodingHelper.quotate(foto) + ",";
        strPairs += "id_tipoProducto=" + obj_TipoproductoBean.getId();
        strPairs += " WHERE id=" + id;
        return strPairs;
    }
}