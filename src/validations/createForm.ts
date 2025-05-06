import { z } from "zod";

export const formSchema = z.object({
    precio: z.number()
        .positive("El precio debe ser un número positivo")
        .min(0.01, "El precio debe ser mayor a 0"),
    descripcion: z.string()
        .min(3, "La descripción debe tener al menos 3 caracteres")
        .max(500, "La descripción no puede exceder los 500 caracteres"),
    marca: z.string()
        .min(2, "La marca debe tener al menos 2 caracteres")
        .max(50, "La marca no puede exceder los 50 caracteres"),
    titulo: z.string()
        .min(2, "El titulo debe tener al menos 2 caracteres")
        .max(50, "El titulo no puede exceder los 50 caracteres"),
    stock: z.number()
        .int("El stock debe ser un número entero")
        .min(0, "El stock no puede ser negativo"),
    categoria: z.string()
        .min(2, "La categoría debe tener al menos 2 caracteres")
        .max(50, "La categoría no puede exceder los 50 caracteres"),
    createAt: z.string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, "La fecha debe estar en formato YYYY-MM-DD")
});


