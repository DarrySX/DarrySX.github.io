# Configuración de GitHub Pages

## ⚠️ IMPORTANTE: Configuración requerida en GitHub

Para que el sitio se despliegue correctamente, debes configurar GitHub Pages para usar **GitHub Actions**:

### Pasos a seguir:

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, haz clic en **Pages**
4. En la sección **Build and deployment**:
   - **Source**: Selecciona **GitHub Actions** (NO "Deploy from a branch")
   
### ✅ Verificación

Una vez configurado:
- Cada push a la rama `main` activará automáticamente el workflow de GitHub Actions
- El sitio se construirá con Astro correctamente
- No se intentará procesar con Jekyll

### 🚫 Problema actual

Si ves el error: `Invalid YAML front matter in /github/workspace/src/components/Header.astro`

Esto significa que GitHub está intentando usar Jekyll para procesar el sitio. Asegúrate de cambiar la configuración a **GitHub Actions** como se indica arriba.

---

## Deployment local

Para hacer deploy desde tu máquina local:

```bash
./deploy.sh
```

Este script:
1. Construye el proyecto
2. Verifica que `.nojekyll` esté presente
3. Hace commit y push a GitHub
4. GitHub Actions tomará el control y desplegará el sitio
