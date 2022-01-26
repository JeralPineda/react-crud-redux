import { Header } from './components/Header';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Productos } from './components/Productos';
import { NewProducto } from './components/NewProducto';
import { EditProducto } from './components/EditProducto';

function App() {
   return (
      <Router>
         <Header />
         <div className="container">
            <Routes>
               <Route path="*" element={<Navigate to="/" />} />

               <Route path="/" element={<Productos />} />

               <Route path="/productos/nuevo" element={<NewProducto />} />

               <Route path="/productos/editar/:id" element={<EditProducto />} />
            </Routes>
         </div>
      </Router>
   );
}

export default App;
