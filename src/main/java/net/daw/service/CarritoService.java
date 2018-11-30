/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.service;

import com.google.gson.Gson;
import java.sql.Connection;
import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import net.daw.bean.CarritoBean;
import net.daw.bean.FacturaBean;
import net.daw.bean.ProductoBean;
import net.daw.bean.ReplyBean;
import net.daw.connection.publicinterface.ConnectionInterface;
import net.daw.constant.ConnectionConstants;
import net.daw.dao.FacturaDao;
import net.daw.dao.ProductoDao;
import net.daw.factory.ConnectionFactory;

public class CarritoService {

    HttpServletRequest oRequest;
    String ob = null;

    public CarritoService(HttpServletRequest oRequest) {
        super();
        this.oRequest = oRequest;
        ob = oRequest.getParameter("ob");
    }

   public ReplyBean add() throws Exception {
        ConnectionInterface oConnectionPool = null;
        Connection oConnection;
        Gson oGson = new Gson();

        try {
            oConnectionPool = ConnectionFactory.getConnection(ConnectionConstants.connectionPool);
            oConnection = oConnectionPool.newConnection();

            Integer idProducto = Integer.parseInt(oRequest.getParameter("producto"));
            Integer cantidad = Integer.parseInt(oRequest.getParameter("cantidad"));

            //Esto no hace falta hacerlo pero esta muy bien porque asi se ve lo que contiene el objeto sesion y
            //que cosas puedo sacar de el
            HttpSession session = oRequest.getSession();
            //Aqui es donde el implements de la clase serializable hace su trabajo (o eso creo)
            ArrayList<CarritoBean> productosGuardados = (ArrayList<CarritoBean>) session.getAttribute("producto");

            //No puedo hacer una iteracion de un objeto en null, porque salta excepcion
            if (productosGuardados != null) {
                Boolean exists = false;
                for (CarritoBean o : productosGuardados) {
                    if (cantidad > o.getObj_Producto().getExistencias()) {
                        throw new Exception(" cantidad superior a existencias");
                    }
                    if (idProducto == o.getObj_Producto().getId()) {
                        o.setCantidad(o.getCantidad() + cantidad);
                        exists = true;
                        break;
                    }
                }
                if (!exists) {
                    CarritoBean oCarritoBean = new CarritoBean();
                    ProductoDao oProductoDao = new ProductoDao(oConnection, "producto");
                    ProductoBean oProductoBean = oProductoDao.get(idProducto, 1);
                    if (cantidad > oProductoBean.getExistencias()) {
                        throw new Exception(" cantidad superior a existencias");
                    }
                    oCarritoBean.setCantidad(cantidad);
                    oCarritoBean.setObj_Producto(oProductoBean);
                    productosGuardados.add(oCarritoBean);
                }
                oRequest.getSession().setAttribute("producto", productosGuardados);
            } else {
                ArrayList<CarritoBean> alCarrito = new ArrayList<CarritoBean>();
                CarritoBean oCarritoBean = new CarritoBean();
                ProductoDao oProductoDao = new ProductoDao(oConnection, "producto");
                ProductoBean oProductoBean = oProductoDao.get(idProducto, 1);
                if (cantidad > oProductoBean.getExistencias()) {
                    throw new Exception(" cantidad superior a existencias");
                }
                oCarritoBean.setCantidad(cantidad);
                oCarritoBean.setObj_Producto(oProductoBean);
                alCarrito.add(oCarritoBean);
                oRequest.getSession().setAttribute("producto", alCarrito);
            }

        } catch (Exception ex) {
            throw new Exception("ERROR: Service level: getpage method: " + ob + " Error msg: " + ex);
        } finally {
            oConnectionPool.disposeConnection();
        }

        return new ReplyBean(200, oGson.toJson(oRequest.getSession().getAttribute("producto")));

    }

    public ReplyBean empty() {
        Gson oGson = new Gson();
        oRequest.getSession().setAttribute("producto", null);
        return new ReplyBean(200, oGson.toJson(oRequest.getSession()));
    }

    public ReplyBean show() throws Exception {
        Gson oGson = new Gson();
        return new ReplyBean(200, oGson.toJson(oRequest.getSession().getAttribute("producto")));
    }

    public ReplyBean reduce() {
        Gson oGson = new Gson();
        Integer id = Integer.parseInt(oRequest.getParameter("id"));
        ArrayList<CarritoBean> alCarritoBeans = new ArrayList<CarritoBean>();
        ArrayList<CarritoBean> productosGuardados = (ArrayList<CarritoBean>) oRequest.getSession().getAttribute("producto");

        //No puedo hacer una iteracion de un objeto en null, porque salta excepcion
        if (productosGuardados != null) {
            for (CarritoBean o : productosGuardados) {
                if (o.getObj_Producto().getId() != id) {
                    alCarritoBeans.add(o);
                } else {
                    int cantidad = o.getCantidad();
                    cantidad--;
                    o.setCantidad(cantidad);
                    alCarritoBeans.add(o);
                }
            }
        }
        oRequest.getSession().setAttribute("producto", alCarritoBeans);
        return new ReplyBean(200, oGson.toJson(oRequest.getSession().getAttribute("producto")));
    }
}
