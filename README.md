# Sistema de Inventario y Carrito de Compras - Frontend

Esta aplicación web permite gestionar un inventario de productos y realizar compras a través de un carrito. Está construida con React, TypeScript y Vite, proporcionando una experiencia de usuario moderna y responsive.

## Características Principales

- 📦 Gestión de inventario de productos
- 🛒 Carrito de compras interactivo
- 🔍 Búsqueda y filtrado de productos
- ✨ Interfaz de usuario moderna con TailwindCSS
- 📱 Diseño responsive
- 🚀 Alto rendimiento gracias a Vite y React

## Tecnologías Utilizadas

- **React**: Biblioteca principal para la interfaz de usuario
- **TypeScript**: Tipado estático para mayor seguridad
- **Vite**: Herramienta de desarrollo rápida
- **TailwindCSS**: Framework de CSS utilitario
- **Zustand**: Gestión de estado global
- **React Router**: Enrutamiento de la aplicación

## Estructura del Proyecto

```
src/
├── components/         # Componentes reutilizables
│   ├── HeaderBar      # Barra de navegación
│   ├── InputForm      # Formularios reutilizables
│   ├── SearchInput    # Componente de búsqueda
│   ├── TarjetaLista   # Tarjetas de productos
│   └── Toast          # Notificaciones
├── pages/             # Páginas principales
│   ├── Carrito        # Vista del carrito
│   ├── CreateForm     # Crear/editar productos
│   └── ItemDetalles   # Detalles de producto
├── store/             # Estado global (Zustand)
├── hooks/             # Custom hooks
└── types/             # Definiciones de tipos
```

## Instalación y Uso

1. Clona el repositorio
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno:
   ```
   VITE_API_URL=http://localhost:3000
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Genera la versión de producción
- `npm run preview`: Vista previa de la versión de producción
- `npm run test`: Ejecuta los tests (cuando estén configurados)

## API Backend

La aplicación se comunica con un backend Express que debe estar corriendo en `http://localhost:3000`. Asegúrate de que el backend esté activo antes de iniciar el frontend.

## Estado del Proyecto

🚧 En desarrollo activo

## Próximas Características

- [ ] Implementación de tests
- [ ] Mejoras en la UI/UX
- [ ] Integración con más métodos de pago
- [ ] Sistema de autenticación

## Contribuir

1. Fork el proyecto
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT.
