import { FormData } from "../types/items"
import { useNavigate } from 'react-router-dom';

type propsType = {
    item: FormData;
}
export default function TarjetaLista(props:propsType) {
    const { titulo, descripcion, precio, categoria, _id } = props.item as any;
    const imagen = "/item_logo.webp"; // Imagen local del proyecto
    const puntuacion = 4.2; // Puntuación fija de ejemplo
    const navigate = useNavigate();



    return (
        <div
            className="border border-gray-300 rounded-lg p-4 shadow-md w-80 h-96 bg-white flex flex-col gap-2 overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-xl"
            onClick={() => navigate(`/item/${_id}`)}
        >
            <img
                src={imagen}
                alt={titulo}
                className="w-full h-44 object-cover rounded"
            />
            <h2 className="font-bold text-lg truncate text-black" title={titulo}>{titulo}</h2>
            <p className="text-black"><strong>Precio:</strong> ${precio}</p>
            <p className="text-black"><strong>Categoría:</strong> {categoria}</p>
            <p className="text-yellow-600"><strong>Puntuación:</strong> {puntuacion} ⭐</p>
        </div>
    )
}
