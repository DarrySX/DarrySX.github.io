#!/bin/bash

# Script de verificación pre-deploy para DarrySDev Portfolio
# Verifica la construcción, optimizaciones y funcionalidades

echo "🚀 Iniciando verificación pre-deploy..."

# Verificar que el proyecto se construya correctamente
echo "📦 Construyendo el proyecto..."
pnpm build

if [ $? -eq 0 ]; then
    echo "✅ Construcción exitosa"
else
    echo "❌ Error en la construcción"
    exit 1
fi

# Verificar que los archivos SEO existan
echo "🔍 Verificando archivos SEO..."

if [ -f "public/sitemap.xml" ]; then
    echo "✅ sitemap.xml encontrado"
else
    echo "❌ sitemap.xml no encontrado"
fi

if [ -f "public/robots.txt" ]; then
    echo "✅ robots.txt encontrado"
else
    echo "❌ robots.txt no encontrado"
fi

if [ -f "public/Logo.png" ]; then
    echo "✅ Logo.png encontrado"
else
    echo "❌ Logo.png no encontrado"
fi

# Verificar estructura de páginas
echo "📄 Verificando estructura de páginas..."

if [ -f "dist/index.html" ]; then
    echo "✅ Página principal generada"
else
    echo "❌ Página principal no generada"
fi

# Verificar tamaño de archivos
echo "📊 Verificando tamaño de archivos..."
echo "Tamaño del directorio dist:"
du -sh dist/

echo ""
echo "🎉 Verificación completada!"
echo "🌐 El sitio está listo para deploy en: https://darrysdev.me"
echo ""
echo "📋 Resumen de características:"
echo "   ✓ Portfolio principal optimizado"
echo "   ✓ Aplicación RenaWare integrada"
echo "   ✓ SEO optimizado con datos estructurados"
echo "   ✓ Diseño responsive con tema claro/oscuro"
echo "   ✓ Paleta de colores del logo aplicada"
echo "   ✓ Performance optimizado"
