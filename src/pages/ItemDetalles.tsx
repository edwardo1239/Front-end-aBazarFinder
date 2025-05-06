import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemType } from '../types/items';
import useCarritoStore from '../store/CarritoStore';

export default function ItemDetalles() {
  const { id } = useParams();
  const [data, setData] = useState<ItemType>();
  const [error, setError] = useState<string | null>(null);
  const addItem = useCarritoStore((state) => state.addItem);

  useEffect(() => {
    const obtenerDetalleData = async (id: string) => {
      try {
        const response = await fetch(`http://localhost:3000/api/items/${id}`);
        const data = await response.json();
        if (data.status !== 200) {
          throw new Error(data.message || "Error al obtener el detalle del item");
        }
        setData(data.data);
      } catch (err) {
        if (err instanceof Error) {
          setError(`Code ${err.name}: ${err.message}`);
        }
      }
    }
    obtenerDetalleData(id as string);
  }, [id])

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-2xl p-8 bg-gray-800 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-white mb-6">Detalles del Item {data?.titulo ?? 'N/A'}</h1>
        {error && (
          <div className="bg-red-600 text-white p-2 rounded mb-4 text-center">{error}</div>
        )}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src="/item_logo.webp"
            alt="Item"
            className="w-48 h-48 object-contain rounded shadow-md bg-white"
          />
          <div className="flex-1 text-white space-y-2">
            <p><span className="font-semibold">Precio:</span> ${data?.precio ?? 'N/A'}</p>
            <p><span className="font-semibold">Descripción:</span> {data?.descripcion ?? 'N/A'}</p>
            <p><span className="font-semibold">Marca:</span> {data?.marca ?? 'N/A'}</p>
            <p><span className="font-semibold">Stock:</span> {data?.stock ?? 'N/A'}</p>
            <p><span className="font-semibold">Categoría:</span> {data?.categoria ?? 'N/A'}</p>
            <p><span className="font-semibold">Creado en:</span> {data?.createAt ? new Date(data.createAt).toLocaleString() : 'N/A'}</p>
            {data && <button
              className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded font-semibold shadow"
              onClick={() => addItem(data)}
            >
              🛒 Agregar al carrito
            </button>}
          </div>
        </div>
      </div>
    </main>
  );
}
