// Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. La clase debe tener los siguientes métodos:

class CarritoCompra {
    // 1. constructor(): Inicializa el carrito como un array vacío.
    constructor(cb) {
        this.carrito = [];
        if (cb) {
            cb(); // Ejecuta la función pasada como parámetro
        }
    }

    // 2. agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
    agregarProducto(producto) {
        this.carrito.push(producto);
    }

    // 3. calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
    calcularTotal() {
        return this.carrito.reduce((total, producto) => total + producto.precio, 0);
    }
    // 4. aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
    aplicarDescuento(porcentaje){
        return this.calcularTotal() - (this.calcularTotal()*porcentaje/100);
    }
}

module.exports = CarritoCompra;