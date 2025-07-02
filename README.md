# Sistema de Exámenes Paralelos - Frontend

Frontend moderno y minimalista para el sistema de exámenes con procesamiento paralelo MPI.

## 🚀 Características

- **Interfaz Moderna**: Diseño limpio y profesional con Tailwind CSS
- **Gestión Completa**: Exámenes, aplicantes, inscripciones y sesiones
- **Evaluación Paralela**: Integración con procesamiento MPI del backend
- **Responsive**: Compatible con dispositivos móviles y desktop
- **Tiempo Real**: Actualizaciones en vivo del estado del sistema

## 🛠️ Tecnologías

- **React 18** con TypeScript
- **Vite** para desarrollo rápido
- **Tailwind CSS** para estilos
- **React Query** para gestión de estado del servidor
- **React Hook Form** para formularios
- **React Router** para navegación
- **Axios** para comunicación con API

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn
- Backend del sistema ejecutándose en puerto 8000

## 🔧 Instalación

1. **Instalar dependencias**:
```bash
npm install
```

2. **Configurar variables de entorno**:
```bash
cp .env.example .env
```

Edita `.env` con la configuración apropiada:
```env
VITE_API_URL=http://localhost:8000
```

3. **Iniciar el servidor de desarrollo**:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Layout.tsx      # Layout principal
│   ├── LoadingSpinner.tsx
│   ├── StatusBadge.tsx
│   └── modals/         # Modales específicos
├── hooks/              # Custom hooks para API
│   ├── useExams.ts
│   ├── useApplicants.ts
│   └── useEvaluation.ts
├── pages/              # Páginas principales
│   ├── Dashboard.tsx
│   ├── ExamList.tsx
│   ├── ExamDetail.tsx
│   └── CreateExam.tsx
├── services/           # Servicios de API
│   └── api.ts
├── types/              # Definiciones TypeScript
│   └── index.ts
└── utils/              # Utilidades
```

## 🔌 Integración con Backend

El frontend se conecta automáticamente con el backend a través de:

- **Proxy de desarrollo**: Vite redirige `/api/*` al backend
- **Interceptores Axios**: Manejo automático de errores y autenticación
- **React Query**: Cache inteligente y sincronización de datos

### Endpoints Principales

- `GET /api/v1/exams` - Lista de exámenes
- `POST /api/v1/exams` - Crear examen
- `POST /api/v1/applicants` - Registrar aplicante
- `POST /api/v1/exams/{id}/enrollments` - Inscribir aplicantes
- `POST /api/v1/evaluations/evaluate-exam` - Evaluar examen

## 🎨 Funcionalidades

### Dashboard
- Resumen del sistema
- Estadísticas en tiempo real
- Acciones rápidas
- Estado del sistema

### Gestión de Exámenes
- Crear exámenes con múltiples tipos de preguntas
- Activar/desactivar exámenes
- Ver detalles y estadísticas
- Inscribir aplicantes

### Evaluación Paralela
- Configurar número de procesos MPI
- Monitorear progreso de evaluación
- Ver resultados y estadísticas

### Aplicantes
- Registrar nuevos aplicantes
- Gestionar inscripciones
- Ver historial de exámenes

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construcción para producción
npm run build

# Vista previa de producción
npm run preview

# Linting
npm run lint
```

## 🎯 Configuración de Producción

1. **Construir la aplicación**:
```bash
npm run build
```

2. **Configurar variables de entorno de producción**:
```env
VITE_API_URL=https://tu-backend-url.com
```

3. **Servir archivos estáticos**:
Los archivos en `dist/` pueden servirse con cualquier servidor web.

## 🔒 Seguridad

- **CORS**: Configurado en el backend para permitir el frontend
- **Validación**: Validación de formularios en cliente y servidor
- **Sanitización**: Datos sanitizados antes del envío
- **Autenticación**: Preparado para integración con sistemas de auth

## 🐛 Solución de Problemas

### Error de Conexión con Backend
```bash
# Verificar que el backend esté ejecutándose
curl http://localhost:8000/health

# Verificar configuración de proxy en vite.config.ts
```

### Problemas de CORS
- Verificar configuración CORS en el backend
- Asegurar que el frontend use la URL correcta

### Errores de Tipos TypeScript
```bash
# Regenerar tipos si es necesario
npm run build
```

## 📱 Responsive Design

El frontend está optimizado para:
- **Desktop**: Experiencia completa con sidebar
- **Tablet**: Layout adaptativo
- **Mobile**: Navegación móvil con menú hamburguesa

## 🔄 Estado de la Aplicación

- **React Query**: Cache automático y sincronización
- **Optimistic Updates**: Actualizaciones optimistas para mejor UX
- **Error Handling**: Manejo robusto de errores con notificaciones

## 🎨 Personalización

### Colores
Edita `tailwind.config.js` para cambiar el esquema de colores:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Tu paleta de colores
      }
    }
  }
}
```

### Componentes
Los componentes están diseñados para ser reutilizables y fáciles de personalizar.

## 📞 Soporte

Para problemas o preguntas:
1. Revisar la documentación del backend
2. Verificar logs del navegador
3. Comprobar configuración de red y CORS

## 🚀 Próximas Características

- [ ] Autenticación con Clerk
- [ ] Notificaciones en tiempo real
- [ ] Exportación de reportes
- [ ] Modo offline
- [ ] Temas personalizables