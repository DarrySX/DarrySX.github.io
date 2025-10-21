# DarrySDev Portfolio

Portfolio profesional de DarryS, desarrollador FullStack especializado en soluciones web a medida.

## 🌟 Características Principales

- **Diseño Moderno**: Interface limpia y profesional con tema oscuro/claro
- **Responsive**: Optimizado para todos los dispositivos
- **Alto Rendimiento**: Construido con Astro y React
- **SEO Optimizado**: Meta tags, datos estructurados y sitemap incluidos
- **Aplicación RenaWare**: Herramienta especializada para asesoras de ventas integrada

## 🎨 Paleta de Colores Actualizada

El sitio utiliza una paleta de colores basada en el logo corporativo:

- **Primario**: `hsl(210, 100%, 50%)` - Azul principal del logo
- **Acento**: `hsl(185, 100%, 50%)` - Cian/Turquesa complementario
- **Gradientes**: Combinaciones armoniosas entre azul y cian para efectos visuales

## 🚀 Tecnologías Utilizadas

- **[Astro](https://astro.build/)** - Framework web moderno
- **[React](https://reactjs.org/)** - Componentes interactivos
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático
- **[Tailwind CSS](https://tailwindcss.com/)** - Estilos utilitarios
- **[Framer Motion](https://www.framer.com/motion/)** - Animaciones fluidas
- **[Radix UI](https://www.radix-ui.com/)** - Componentes accesibles

## � Optimizaciones SEO Implementadas

### Meta Tags y Estructura
- **Meta Tags Completos**: Títulos, descripciones y keywords optimizados
- **Open Graph**: Metadatos para compartir en redes sociales
- **Twitter Cards**: Optimización para Twitter
- **Datos Estructurados**: Schema.org para mejores resultados de búsqueda

### Archivos de SEO
- **`/sitemap.xml`**: Mapa del sitio para crawlers
- **`/robots.txt`**: Directivas para bots de búsqueda
- **URLs Canónicas**: Evita contenido duplicado
- **Metadatos por Página**: Cada sección optimizada individualmente

### Estructura de Datos Schema.org
- **Person Schema**: Información del desarrollador
- **WebSite Schema**: Datos del sitio web
- **Service Schema**: Servicios ofrecidos
- **CreativeWork Schema**: Portfolio de proyectos

## 📱 Aplicación RenaWare Integrada

Nueva funcionalidad: **Herramienta digital para asesoras de ventas RenaWare**

### Características de la App
- **Dashboard Interactivo**: Métricas y estadísticas de ventas en tiempo real
- **Gestión de Clientes**: CRM simplificado para seguimiento de leads
- **Catálogo de Productos**: Información detallada de productos RenaWare
- **Calculadora de Comisiones**: Herramientas de cálculo automático
- **Diseño Responsivo**: Optimizada para uso móvil y desktop

### Acceso a la Aplicación
- **URL**: `/RenaWare`
- **Enlace en Navegación**: Disponible desde el menu principal
- **Datos Estructurados**: SEO optimizado para la landing page

### Tecnologías Específicas
- **React Hooks**: Estado local para gestión de datos
- **Framer Motion**: Animaciones suaves y profesionales
- **Componentes UI**: Sistema de diseño consistente
- **Responsive Design**: Adaptable a todos los dispositivos
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:4321`

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run start` - Alias para dev
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Previsualiza la build de producción

## 🌐 Despliegue y SSL

El sitio está configurado para desplegarse en el dominio `darrysdev.me` usando GitHub Pages con SSL automático.

### Configuración de Producción

El proyecto ya está configurado para:
- **Dominio**: darrysdev.me (configurado en CNAME)
- **Site URL**: https://darrysdev.me (configurado en astro.config.mjs)
- **GitHub Pages**: Listo para despliegue automático
- **SSL**: Certificado automático de GitHub

### Despliegue

#### Método 1: Script Automático
```bash
./deploy.sh
```

#### Método 2: Manual
```bash
npm run build
git add .
git commit -m "Deploy: nuevos cambios"
git push origin main
```

### Configurar HTTPS en GitHub

1. Ve a **GitHub** → **Settings** → **Pages**
2. Verifica que **Custom domain** sea: `darrysdev.me`
3. **MARCA** la casilla **"Enforce HTTPS"** ✅
4. Espera 5-10 minutos para que se aplique

### Verificar SSL

Usa el script incluido para verificar el estado del SSL:
```bash
./check-ssl.sh
```

### Troubleshooting SSL

Si encuentras problemas con SSL:
1. **Espera 24-48 horas** para propagación DNS completa
2. Verifica que los DNS A records estén correctos
3. Asegúrate que "Enforce HTTPS" esté activado en GitHub Pages
4. El certificado SSL se regenera automáticamente cada 90 días

El sitio estará disponible en: **https://darrysdev.me** 🚀

## 🛠️ Tecnologías

- **Framework**: Astro 4.15.9
- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Para type safety

## 📁 Estructura del Proyecto

```
├── public/          # Assets estáticos
├── src/
│   ├── components/  # Componentes React y Astro
│   ├── layouts/     # Layouts de Astro
│   ├── pages/       # Páginas de Astro
│   ├── styles/      # Estilos globales
│   └── lib/         # Utilidades
├── astro.config.mjs # Configuración de Astro
└── package.json     # Dependencias del proyecto
```