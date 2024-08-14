const CarritoCompra = require("../index");


// Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra funciona correctamente en diferentes escenarios.

describe("En la función CarritoCompra", () => {
    it("La función 'callback' que paso como parámetro debe ejecutarse al menos una vez", () => {
        const mockCallback = jest.fn(); // Crea una función simulada
        new CarritoCompra(mockCallback); // Instancia CarritoCompra con la función simulada
        expect(mockCallback).toHaveBeenCalled(); // Verifica que se haya llamado al menos una vez
    });

    it("Se debe estar creando una instancia de la clase CarritoCompra", () => {
        const carrito = new CarritoCompra();
        expect(carrito).toBeInstanceOf(CarritoCompra);
        });

    it("Carrito de Compra debe tener las propiedad carrito y no debe tener la propiedad producto", () => {
        const carrito = new CarritoCompra();
        expect(carrito.carrito).toBeDefined();
        expect(carrito.producto).toBeUndefined(); // Verifica que la instancia de CarritoCompra tenga la propiedad carrito pero no la propiedad producto
    });
    it("Calcula total con un solo producto agregado", () => {
        const carrito = new CarritoCompra(); 
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 100 });
        expect(carrito.calcularTotal()).toEqual(100); // Verifica que el total sea 100 después de agregar un producto 
        expect(carrito.aplicarDescuento(20)).toEqual(80);
    });
    it("Calcula total con varios productos agregados", () => {
        const carrito = new CarritoCompra(); 
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 100 });
        carrito.agregarProducto({ nombre: 'Producto 2', precio: 200 });
        carrito.agregarProducto({ nombre: 'Producto 3', precio: 300 });
        carrito.agregarProducto({ nombre: 'Producto 4', precio: 400 });
        expect(carrito.calcularTotal()).toEqual(1000); // Verifica que el total sea 1000 después de agregar un producto 
        expect(carrito.aplicarDescuento(10)).toEqual(900); // Verifica que el total sea 900 después de aplicar 10% de descuento 
        expect(carrito.aplicarDescuento(20)).toEqual(800);// Verifica que el total sea 800 después de aplicar 20% de descuento 
        expect(carrito.aplicarDescuento(30)).toEqual(700);// Verifica que el total sea 700 después de aplicar 30% de descuento
    });

});