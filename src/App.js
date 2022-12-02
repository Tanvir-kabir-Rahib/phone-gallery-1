import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './components/Routes/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <RouterProvider router={router}>
        <Toaster></Toaster>
      </RouterProvider>
    </div>
  );
}

export default App;
