#!/bin/bash

echo "🔍 Verificando configuración SSL para darrysdev.me"
echo "================================================"

echo -e "\n1️⃣  Verificando DNS A Records:"
dig +short darrysdev.me A

echo -e "\n2️⃣  Verificando CNAME para www:"
dig +short www.darrysdev.me CNAME

echo -e "\n3️⃣  Verificando conectividad HTTP:"
curl -I -s http://darrysdev.me | head -1

echo -e "\n4️⃣  Verificando conectividad HTTPS:"
curl -I -s https://darrysdev.me | head -1 || echo "❌ HTTPS no disponible aún"

echo -e "\n5️⃣  Verificando certificado SSL:"
openssl s_client -connect darrysdev.me:443 -servername darrysdev.me </dev/null 2>/dev/null | openssl x509 -noout -dates 2>/dev/null || echo "❌ Certificado SSL no disponible aún"

echo -e "\n📋 Instrucciones:"
echo "1. Espera 24-48 horas para que el DNS se propague completamente"
echo "2. Ve a GitHub Settings > Pages > Enforce HTTPS (solo después de que funcione)"
echo "3. El certificado SSL se generará automáticamente"
