
import { FaSearch, FaHome } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import useCarritoStore from '../store/CarritoStore';
export default function HeaderBar() {
    const carrito = useCarritoStore((state) => state.items);
    return (
        <header className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-4 shadow-lg fixed top-0 left-0 w-full z-50 flex items-center px-8">
            <div>
                <NavLink to="/" className="px-3 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-blue-100 transition-colors duration-200 flex items-center gap-2 cursor-pointer active:scale-95 transition-transform duration-100">
                    <FaHome className="text-lg" />
                    Inicio
                </NavLink>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
                <FaSearch className="mr-2 text-xl" />
                <h1 className="text-2xl font-extrabold tracking-wide">aBazarFinder</h1>
            </div>
            <div className="ml-auto flex gap-3">
                <NavLink to="/cart" className="relative px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-blue-100 transition-colors duration-200 cursor-pointer active:scale-95 transition-transform duration-100 flex items-center gap-2">
                    <span role="img" aria-label="carrito">🛒</span>
                    <span>Carrito</span>
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-0.5 font-bold">{carrito.length}</span>
                </NavLink>
                <NavLink to={"/create"} className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-blue-100 transition-colors duration-200 cursor-pointer active:scale-95 transition-transform duration-100">
                    Ingresar Item
                </NavLink>
            </div>
        </header>
    );
};
