# DarrySX Portfolio

Portfolio personal de DarrySX construido con Astro, React, TypeScript y Tailwind CSS.

## 🚀 Configuración del Proyecto

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm, yarn o pnpm

### Instalación Local

1. Clona el repositorio:
```bash
git clone https://github.com/DarrySX/DarrySX.github.io.git
cd DarrySX.github.io
```

2. Instala las dependencias:
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