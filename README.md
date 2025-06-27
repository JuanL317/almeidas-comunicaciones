# Almeidas Comunicaciones SAS - Landing Page

Una landing page moderna y profesional para Almeidas Comunicaciones SAS, empresa dedicada a la venta de servicios de internet y televisión en zonas urbanas y rurales.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Componentes Modulares**: Arquitectura basada en componentes reutilizables
- **Estilos Minimalistas**: Diseño empresarial limpio y profesional
- **Paleta de Colores**: Azul, blanco y verde como colores corporativos
- **SEO Optimizado**: Metadatos y estructura semántica para mejor posicionamiento
- **Formulario de Contacto**: Sistema de contacto funcional
- **Navegación Suave**: Scroll suave entre secciones

## 🛠️ Tecnologías Utilizadas

- **Next.js 14**: Framework de React con App Router
- **TypeScript**: Tipado estático para mejor desarrollo
- **Tailwind CSS**: Framework de CSS utility-first
- **React Hooks**: Estado y efectos para interactividad
- **ESLint**: Linting para código limpio

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Navegación principal
│   │   └── Footer.tsx       # Pie de página
│   └── sections/
│       ├── Hero.tsx         # Sección principal
│       ├── Services.tsx     # Planes y servicios
│       ├── About.tsx        # Información de la empresa
│       └── Contact.tsx      # Formulario de contacto
└── ...
```

## 🎨 Paleta de Colores

- **Azul Primario**: `#3b82f6` (primary-600)
- **Verde Secundario**: `#22c55e` (secondary-600)
- **Blanco**: `#ffffff`
- **Grises Neutros**: Escala completa para textos y fondos

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone [url-del-repositorio]
cd almeidas-comunicaciones
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Scripts Disponibles

- `npm run dev`: Servidor de desarrollo
- `npm run build`: Construcción para producción
- `npm run start`: Servidor de producción
- `npm run lint`: Verificación de código

## 📱 Secciones de la Landing Page

### 1. Hero (Inicio)
- Título principal con gradiente
- Descripción de servicios
- Botones de llamada a la acción
- Tarjeta visual con información de servicios

### 2. Servicios
- Planes de Internet (Básico, Estándar, Premium)
- Planes de Televisión (Básico, Completo)
- Servicios adicionales (Empresarial, Instalación, Soporte)

### 3. Nosotros
- Misión de la empresa
- Estadísticas de clientes
- Valores corporativos
- Llamada a la acción

### 4. Contacto
- Formulario de contacto funcional
- Información de contacto
- Enlaces a redes sociales
- Sección de FAQ

## 🔧 Personalización

### Colores
Los colores se pueden modificar en `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Escala de azules
  },
  secondary: {
    // Escala de verdes
  }
}
```

### Contenido
- **Planes de Internet**: Modificar en `Services.tsx`
- **Información de Contacto**: Actualizar en `Contact.tsx` y `Footer.tsx`
- **Metadatos**: Editar en `layout.tsx`

## 📧 Integración de Email

El formulario de contacto está preparado para integrarse con servicios como:
- SendGrid
- EmailJS
- Nodemailer
- Formspree

## 🌐 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno si es necesario
3. Despliega automáticamente

### Otros Proveedores
- Netlify
- AWS Amplify
- Google Cloud Platform

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👥 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

**Almeidas Comunicaciones SAS**
- Email: info@almeidas.com
- Teléfono: +57 XXX XXX XXXX
- Ubicación: Zonas urbanas y rurales

---

Desarrollado con ❤️ para conectar comunidades
