import { useState } from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import useItemsStore from './store/ItemsStore';
import TarjetaLista from './components/TarjetaLista';

function App() {
  const items = useItemsStore((state) => state.items);
  const setItems = useItemsStore((state) => state.setItems);
  const [busqueda, setBusqueda] = useState<string>('');
  const handleSearch = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/items?q=${encodeURIComponent(busqueda)}`);
      console.log(response);
      const data = await response.json();
      if (data.status !== 200) {
        setItems([]);
        return;
        // throw new Error(`HTTP error! status: ${data.message}`);
      }
      setItems(data.data);
    } catch (err) {
      if (err instanceof Error) {
        alert(`Code ${err.name}: ${err.message}`);
      }
    }
  }

  return (
    <main className="flex justify-center  min-h-screen bg-gray-900 w-full">
      <div className="w-full  p-8">
        <SearchInput handleSearch={handleSearch} setBusqueda={setBusqueda} />
        <div className="flex flex-wrap gap-4 mt-6 w-full items-start justify-center">
          {items && items.length > 0 && items.map((item) => (
            <TarjetaLista item={item} key={item._id} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
