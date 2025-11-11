#!/bin/bash

echo "🚀 Desplegando sitio con configuración SSL"
echo "=========================================="

# Build del proyecto
echo "📦 Construyendo el proyecto..."
npm run build

# Verificar que el build fue exitoso
if [ $? -eq 0 ]; then
    echo "✅ Build completado exitosamente"
else
    echo "❌ Error en el build"
    exit 1
fi

# Asegurar que .nojekyll existe en dist
echo "📝 Verificando archivo .nojekyll..."
if [ ! -f "dist/.nojekyll" ]; then
    echo "⚠️  Creando archivo .nojekyll en dist/"
    touch dist/.nojekyll
fi
echo "✅ Archivo .nojekyll presente"

# Hacer commit y push
echo "📤 Desplegando a GitHub..."
git add .
git commit -m "Deploy: Configuración SSL y optimizaciones"
git push origin main

echo "⏳ Esperando despliegue..."
echo ""
echo "📋 Próximos pasos:"
echo "1. Ve a GitHub: Settings > Pages"
echo "2. Verifica que 'Custom domain' sea: darrysdev.me"
echo "3. MARCA 'Enforce HTTPS' ✅"
echo "4. Espera 5-10 minutos para que se aplique"
echo ""
echo "🌐 Tu sitio estará disponible en: https://darrysdev.me"
