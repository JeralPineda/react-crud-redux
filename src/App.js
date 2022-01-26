import { Header } from './components/Header';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Productos } from './components/Productos';
import { NewProducto } from './components/NewProducto';
import { EditProducto } from './components/EditProducto';

//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
   return (
      <Router>
         <Provider store={store}>
            <Header />
            <div className="container">
               <Routes>
                  <Route path="*" element={<Navigate to="/" />} />

                  <Route path="/" element={<Productos />} />

                  <Route path="/productos/nuevo" element={<NewProducto />} />

                  <Route path="/productos/editar/:id" element={<EditProducto />} />
               </Routes>
            </div>
         </Provider>
      </Router>
   );
}

export default App;
