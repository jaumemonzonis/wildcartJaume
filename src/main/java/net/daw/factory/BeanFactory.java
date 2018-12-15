/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.factory;

import com.google.gson.Gson;
import net.daw.bean.publicBeanInterface.BeanInterface;
import net.daw.bean.beanImplementation.TipoproductoBean;
import net.daw.bean.beanImplementation.LineaBean;
import net.daw.bean.beanImplementation.FacturaBean;
import net.daw.bean.beanImplementation.ProductoBean;
import net.daw.bean.beanImplementation.TipousuarioBean;
import net.daw.bean.beanImplementation.UsuarioBean;

/**
 *
 * @author raznara
 */
public class BeanFactory {

    public static BeanInterface getBean(String ob) {
        BeanInterface oBean = null;
        switch (ob) {
            case "usuario":
                oBean = (BeanInterface) new UsuarioBean();
                break;
            case "tipousuario":
                oBean = (BeanInterface) new TipousuarioBean();
                break;
            case "tipoproducto":
                oBean = (BeanInterface) new TipoproductoBean();
                break;
            case "producto":
                oBean = (BeanInterface) new ProductoBean();
                break;
            case "factura":
                oBean = (BeanInterface) new FacturaBean();
                break;
            case "linea":
                oBean = (BeanInterface) new LineaBean();
                break;
        }
        return oBean;
    }
    
     public static BeanInterface getBeanFromJson(String ob, Gson oGson, String strJsonFromClient) {
        BeanInterface oBean = null;
        switch (ob) {
            case "usuario":
                oBean = oGson.fromJson(strJsonFromClient, UsuarioBean.class);
                break;
            case "tipousuario":
                oBean = oGson.fromJson(strJsonFromClient, TipousuarioBean.class);
                break;
            case "tipoproducto":
                oBean = oGson.fromJson(strJsonFromClient, TipoproductoBean.class);
                break;
            case "producto":
                oBean = oGson.fromJson(strJsonFromClient, ProductoBean.class);
                break;
            case "factura":
                oBean = oGson.fromJson(strJsonFromClient, FacturaBean.class);
                break;
            case "linea":
                oBean = oGson.fromJson(strJsonFromClient, LineaBean.class);
                break;
        }
        return oBean;
}
}
