import useForm from '../hooks/useForm';
import { formSchema } from '../validations/createForm';
import InputForm from '../components/InputForm';
import { useState } from 'react';
import Toast from '../components/Toast';
import { FormData } from '../types/items';


const initialValues: FormData = {
    titulo: '',
    precio: 0,
    descripcion: '',
    marca: '',
    stock: 0,
    categoria: '',
    createAt: new Date().toISOString().split('T')[0], // Formato YYYY-MM-DD
}

export default function CreateForm() {
    const {
        formState,
        handleChange,
        validateForm,
        formErrors,
        resetForm
    } = useForm<FormData>(initialValues);
    const [loading, setLoading] = useState<boolean>(false)
    const [successMsg, setSuccessMsg] = useState<string | null>(null)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true)
            const result = validateForm(formSchema)
            if (!result) return
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/items`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formState),
            });
            const data = await response.json();
            console.log(data)
            if (data.status !== 202) {
                throw new Error(data.message || "Error al crear el item")
            }
            setSuccessMsg("¡Item creado exitosamente!");
            resetForm();
            setTimeout(() => setSuccessMsg(null), 3000);
        } catch (err) {
            if (err instanceof Error) {
                alert(`${err.name}, Message: ${err.message}`)
            }
        } finally {
            setLoading(false)
        }

    };

    return (
        <main className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="w-full max-w-2xl p-8 bg-gray-800 rounded-lg shadow-xl">
                <h1 className="text-3xl font-bold text-white mb-6">Crear Nuevo Item</h1>


                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputForm
                            name="titulo"
                            label="Titulo"
                            type="test"
                            value={formState.titulo}
                            onChange={handleChange}
                            error={formErrors.titulo}
                        />
                        <InputForm
                            name="precio"
                            label="Precio"
                            type="number"
                            value={formState.precio}
                            onChange={handleChange}
                            error={formErrors.precio}
                        />
                        <InputForm
                            name="marca"
                            label="Marca"
                            type="text"
                            value={formState.marca}
                            onChange={handleChange}
                            error={formErrors.marca}

                        />
                        <InputForm
                            name="stock"
                            label="Stock"
                            type="number"
                            value={formState.stock}
                            onChange={handleChange}
                            error={formErrors.stock}

                        />
                        <div>
                            <label htmlFor="categoria" className="block font-semibold text-gray-200 mb-1">
                                Categoría
                            </label>
                            <select
                                id="categoria"
                                name="categoria"
                                value={formState.categoria}
                                onChange={handleChange}
                                className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-400 transition-colors duration-150 border-gray-600"
                                required
                            >
                                <option value="">Seleccionar categoría</option>
                                <option value="electronica">Electrónica</option>
                                <option value="ropa">Ropa</option>
                                <option value="hogar">Hogar</option>
                                <option value="deportes">Deportes</option>
                                <option value="otros">Otros</option>
                            </select>
                        </div>
                        <InputForm
                            name="createAt"
                            label="Fecha de Creación"
                            type="date"
                            value={formState.createAt}
                            onChange={handleChange}
                            error={formErrors.createAt}

                        />
                    </div>

                    {/* Descripción - Full width */}
                    <div>
                        <label htmlFor="descripcion" className="block font-semibold text-gray-200 mb-1">
                            Descripción
                        </label>
                        <textarea
                            id="descripcion"
                            name="descripcion"
                            value={formState.descripcion}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-400 transition-colors duration-150 border-gray-600 resize-none"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            disabled={loading}
                            type="submit"
                            className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 ease-in-out"
                        >
                            Crear Item
                        </button>
                    </div>
                </form>
                {successMsg && (
                    <Toast message={successMsg} />
                )}
            </div>
        </main>
    );
}
