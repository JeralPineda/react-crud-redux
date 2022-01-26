import { AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_ERROR, AGREGAR_PRODUCTO_EXITO } from '../types';

export const crearNuevoProducto = (producto) => {
   return () => {
      console.log(producto);
   };
};
