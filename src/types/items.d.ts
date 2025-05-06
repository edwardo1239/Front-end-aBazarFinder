export type FormData = {
    titulo:string;
    precio: number;
    descripcion: string;
    marca: string;
    stock: number;
    categoria: string;
    createAt: string;
    titulo: string;
}

export interface ItemType extends FormData {
    _id: string;
}