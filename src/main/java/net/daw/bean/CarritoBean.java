/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.bean;


/**
 *
 * @author a044531896d
 */
public class CarritoBean {

    private int cantidad;
    private ProductoBean obj_Producto;

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public ProductoBean getObj_Producto() {
        return obj_Producto;
    }

    public void setObj_Producto(ProductoBean obj_Producto) {
        this.obj_Producto = obj_Producto;
    }
}
