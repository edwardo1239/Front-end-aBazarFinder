import React from "react";
import useCarritoStore from "../store/CarritoStore";

const Carrito: React.FC = () => {
    const items = useCarritoStore((state) => state.items);
    const total = items.reduce((acc, item) => acc + (item.precio || 0), 0);

    return (
        <main className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="w-full max-w-3xl p-8 bg-gray-800 rounded-lg shadow-xl">
                <h1 className="text-3xl font-bold text-white mb-6">Carrito de Compras</h1>
                {items.length === 0 ? (
                    <p className="text-gray-300">No hay productos en el carrito.</p>
                ) : (
                    <>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-gray-700 rounded-lg">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 text-center text-gray-200">Título</th>
                                        <th className="px-4 py-2 text-center text-gray-200">Precio</th>
                                        <th className="px-4 py-2 text-center text-gray-200">Marca</th>
                                        <th className="px-4 py-2 text-center text-gray-200">Cantidad</th>
                                        <th className="px-4 py-2 text-center text-gray-200"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item) => (
                                        <tr key={item._id} className="border-b border-gray-600">
                                            <td className="px-4 py-2 text-white text-center">{item.titulo}</td>
                                            <td className="px-4 py-2 text-white text-center">${item.precio}</td>
                                            <td className="px-4 py-2 text-white text-center">{item.marca}</td>
                                            <td className="px-4 py-2 text-white text-center">1</td>
                                            <td className="px-4 py-2 text-center">
                                                <button
                                                    className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition flex items-center justify-center mx-auto"
                                                    type="button"
                                                    aria-label="Eliminar"
                                                    // onClick={() => eliminarItem(item._id)}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <h2 className="text-2xl font-semibold text-green-400 mt-8">Total: ${total.toFixed(2)}</h2>
                        <div className="flex justify-end mt-6">
                            <button
                                className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 ease-in-out"
                                type="button"
                            >
                                Comprar
                            </button>
                        </div>
                    </>
                )}
            </div>
        </main>
    );
};

export default Carrito;
