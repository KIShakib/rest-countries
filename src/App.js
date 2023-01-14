import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { ContextAPI } from './Components/Context/useContext';
import { router } from './Components/Routes/Routes';

function App() {
  const { toggleTheme } = useContext(ContextAPI);
  return (
    <div className={`${toggleTheme && "bg-secondary"}`}>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
