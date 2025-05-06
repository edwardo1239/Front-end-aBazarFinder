import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import useItemsStore from '../store/ItemsStore';

type propsType = {
    handleSearch: () => void
    setBusqueda: (busqueda: string) => void
}

export default function SearchInput(props: propsType) {
    const items = useItemsStore((state) => state.items);
    const [cantidadDatos, setCantidadDatos] = useState<number>(0);

    useEffect(() => {
        const n = items.length;
        setCantidadDatos(n);
    }, [items])
    return (
        <div className="flex justify-center items-center py-16">
            <div className="flex w-11/12 md:w-3/4 lg:w-2/3 justify-center flex-col">
                <div className="flex w-full">
                    <input
                        type="text"
                        onChange={(e) => props.setBusqueda(e.target.value)}
                        placeholder="Buscar por nombre..."
                        className="flex-grow p-3 border border-gray-300 rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={() => props.handleSearch()}
                        className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-3 rounded-r-lg shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center cursor-pointer active:scale-95 transition-transform duration-100"
                    >
                        <FaSearch className="text-lg" />
                    </button>
                </div>
                <div className="text-left text-gray-600 text-sm mt-2">
                    {`Resultados encontrados: ${cantidadDatos}`}
                </div>
            </div>
        </div>
    );
};

