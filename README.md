# Almeidas Comunicaciones SAS - Landing Page

Landing page moderna y profesional para Almeidas Comunicaciones SAS, empresa dedicada a la venta de servicios de internet y televisión en zonas urbanas y rurales.

## 🚀 Features

- **Diseño Responsivo**: Optimizado para móviles, tablets y desktop
- **Componentes Modulares**: Arquitectura basada en componentes reutilizables
- **Estilo Minimalista**: Imagen empresarial limpia y profesional
- **SEO Optimizado**: Metadatos y estructura semántica
- **Formulario de Contacto y PQRS**: Funcional y validado
- **Normatividad**: Tarjetas minimalistas con acceso a documentos legales
- **Carrusel de Marcas**: Inspirado en waitelecomunicaciones.com
- **Navegación Suave**: Scroll y animaciones fluidas

## 🛠️ Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Hooks**
- **ESLint**
- **pnpm** (recomendado)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── normatividad/page.tsx      # Sección de normatividad
│   ├── pqrs/page.tsx              # Formulario PQRS
│   └── servicios/page.tsx         # Servicios y planes
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── About.tsx
│       └── CarruselMarcas.tsx     # Carrusel de indicadores de calidad
└── ...
public/
├── favicon.ico
├── indicadores-calidad/           # Imágenes del carrusel
├── documentos-normativos/         # PDFs de normatividad
└── images/
```

## 🎨 Branding Colors

- Azul Primario: `#3b82f6`
- Verde Secundario: `#22c55e`
- Blanco: `#ffffff`
- Grises Neutros

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recomendado) o npm/yarn

### Installation

1. Clona el repositorio:
```bash
git clone [url-del-repositorio]
cd almeidas-comunicaciones
```

2. Instala dependencias:
```bash
pnpm install
# o npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
pnpm dev
# o npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000)

### Scripts
- `pnpm dev` / `npm run dev`: Development server
- `pnpm build` / `npm run build`: Production build
- `pnpm start` / `npm run start`: Production server
- `pnpm lint` / `npm run lint`: Linting

## 📱 Main Sections

### Hero (Inicio)
- Título principal con gradiente
- Descripción de servicios
- Carrusel de marcas minimalista

### Servicios
- Planes de Internet y TV
- Ventajas y características

### Nosotros
- Misión, visión y valores
- Estadísticas y confianza

### Normatividad
- Documentos legales (resoluciones, leyes, decretos, acuerdos, políticas)
- Tarjetas minimalistas, acceso directo a PDFs

### PQRS
- Formulario validado para peticiones, quejas, reclamos y sugerencias
- Mensajes de éxito y validación

### Contacto
- Información de contacto y redes sociales

## 🔧 Customization

- **Colores:** Edita en `tailwind.config.ts`
- **Planes y servicios:** Modifica en `Services.tsx`
- **Normatividad:** Agrega PDFs en `public/documentos-normativos/`
- **Imágenes del carrusel:** Agrega logos en `public/indicadores-calidad/`
- **Metadatos:** Edita en `layout.tsx`

## 🌐 Deployment

### Vercel (Recomendado)
1. Conecta tu repo a Vercel
2. Despliega automáticamente

### Otros
- Netlify, AWS Amplify, Google Cloud Platform

## 📄 License

MIT

## 👥 Contributing

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/FeatureName`)
3. Commit tus cambios (`git commit -m 'Add feature'`)
4. Push a la rama (`git push origin feature/FeatureName`)
5. Abre un Pull Request

## 📞 Contact

**Almeidas Comunicaciones SAS**
- Email: info@almeidas.com
- Teléfono: +57 XXX XXX XXXX
- Ubicación: Zonas urbanas y rurales

---
Desarrollado con ❤️ para conectar comunidades
