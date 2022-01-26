import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions de Redux
import { crearNuevoProducto } from '../actions/productoActions';

export const NewProducto = () => {
   // state del componente
   const [nombre, setNombre] = useState('');
   const [precio, setPrecio] = useState(0);

   // Utilizar useDispatch y te crea una función
   const dispatch = useDispatch();

   // Mandar a llamar el action de productos
   const agregarProducto = (producto) => dispatch(crearNuevoProducto(producto));

   const handleSubmit = (e) => {
      e.preventDefault();

      // Validar formulario
      if (nombre.trim() === '' || precio <= 0) {
         return;
      }

      // si no hay errores

      //Crear el nuevo producto
      agregarProducto({
         nombre,
         precio,
      });
   };

   return (
      <div className="row justify-content-center">
         <div className="col-md-8">
            <div className="card">
               <div className="card-body">
                  <h2 className="text-center mb-4 font-weigth-bold">Agregar Nuevo Producto</h2>

                  <form onSubmit={handleSubmit}>
                     <div className="form-group">
                        <input
                           //
                           type="text"
                           className="form-control"
                           placeholder="Nombre Producto"
                           name="nombre"
                           value={nombre}
                           onChange={(e) => setNombre(e.target.value)}
                        />
                     </div>

                     <div className="form-group">
                        <input
                           //
                           type="number"
                           className="form-control"
                           placeholder="Precio Producto"
                           name="precio"
                           value={precio}
                           onChange={(e) => setPrecio(e.target.value)}
                        />
                     </div>

                     <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                        Agregar
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};
