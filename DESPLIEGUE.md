# 🚀 Guía de Despliegue HTTPS

## ⚡ Opción 1: Glitch (Más fácil - 2 minutos)

### Pasos:
1. Ve a https://glitch.com
2. Haz clic en **"New Project"** → **"Import from GitHub"** o **"Start from scratch"**
3. Abre el editor de archivos
4. Copia el contenido de `index.html` en `index.html` de Glitch
5. Copia el contenido de `config.js` en un archivo nuevo llamado `config.js`
6. **¡Listo!** Tu proyecto se sirve automáticamente por HTTPS

**URL de Glitch:** `https://tu-proyecto-nombre.glitch.me`

---

## 📱 Opción 2: GitHub Pages (Recomendado - 5 minutos)

### Pasos:

#### a) En tu computadora (Terminal):
```bash
# 1. Navega a la carpeta del proyecto
cd c:\Users\usuario1\Desktop\tecnoi

# 2. Inicializa el repositorio Git
git init

# 3. Crea un archivo .gitignore (opcional)
echo node_modules > .gitignore

# 4. Añade todos los archivos
git add .

# 5. Haz el primer commit
git commit -m "Tarjeta de Presentación Infinita - AR"

# 6. Renombra la rama a 'main' (si es necesario)
git branch -M main

# 7. Conecta con tu repositorio remoto
git remote add origin https://github.com/TU_USUARIO/nombre-repo.git

# 8. Sube los cambios
git push -u origin main
```

#### b) En GitHub:
1. Ve a tu repositorio en github.com
2. Click en **Settings**
3. Ve a **Pages** (en el menú lateral)
4. Selecciona **Source:** Main branch
5. Click en **Save**
6. Espera 1-2 minutos
7. **Tu URL:** `https://tu-usuario.github.io/nombre-repo`

**Ventajas:**
- ✅ Completamente gratis
- ✅ Automáticamente HTTPS
- ✅ Fácil de actualizar (push a GitHub)
- ✅ Dominio personalizado disponible

---

## 🌐 Opción 3: Netlify (Muy fácil - 3 minutos)

### Pasos:
1. Ve a https://app.netlify.com
2. Click en **"New site from Git"**
3. Autoriza tu cuenta de GitHub
4. Selecciona tu repositorio
5. Click en **Deploy site**
6. **Tu URL:** `https://tu-nombre-aleatorio.netlify.app`

**Ventajas:**
- ✅ Deploy automático en cada push
- ✅ HTTPS automático
- ✅ Dominio personalizado gratis

---

## ⚙️ Opción 4: Vercel (Para desarrolladores - 3 minutos)

### Pasos:
```bash
# 1. Instala Vercel CLI
npm install -g vercel

# 2. Navega a tu carpeta
cd c:\Users\usuario1\Desktop\tecnoi

# 3. Deploy
vercel

# 4. Sigue las instrucciones en pantalla
```

**Tu URL:** `https://tu-proyecto.vercel.app`

---

## 🔐 Verificar que está en HTTPS

✅ La URL debe empezar con `https://` (no `http://`)
✅ Deberías ver un candado 🔒 en la barra de direcciones

---

## 🌍 Opción 5: Dominio personalizado

### Si ya tienes un dominio (ej: miportafolio.com):

#### Con GitHub Pages:
1. Ve a **Settings → Pages**
2. En **Custom domain** escribe: `miportafolio.com`
3. Añade estos registros DNS en tu proveedor:
   ```
   ALIAS/ANAME: @ → tu-usuario.github.io
   CNAME: www → tu-usuario.github.io
   ```

#### Con Netlify:
1. En **Site settings → Domain management**
2. Click en **Add domain**
3. Sigue los pasos de configuración de DNS

---

## 📤 Actualizar tu sitio

### Con Git (GitHub, Netlify, Vercel):
```bash
# Realiza cambios en tus archivos

# Añade los cambios
git add .

# Commit
git commit -m "Descripción de cambios"

# Push
git push

# ¡Listo! Tu sitio se actualiza automáticamente
```

### Con Glitch:
- Edita directamente en Glitch
- Los cambios se guardan automáticamente
- Actualiza en tiempo real

---

## 🆘 Solución de problemas

### "La cámara no funciona"
- ✅ Verifica que la URL tenga `https://`
- ✅ Recarga la página
- ✅ Autoriza el acceso a la cámara

### "GitHub Pages no se actualiza"
```bash
git status  # Verifica que esté todo subido
git log     # Mira el historial de commits
```

### "El marcador no se detecta"
- ✅ Buena iluminación
- ✅ Marcador completo visible
- ✅ Al menos 10x10 cm de tamaño

### "El avatar 3D carga lentamente"
- ✅ Esperan 5-10 segundos
- ✅ Verifica tu conexión a internet
- ✅ Usa un modelo 3D más pequeño

---

## 📊 Comparación de plataformas

| Plataforma | Costo | Facilidad | HTTPS | Personalizacion |
|-----------|-------|----------|-------|-----------------|
| Glitch | Gratis | ⭐⭐⭐⭐⭐ | ✅ | Media |
| GitHub Pages | Gratis | ⭐⭐⭐⭐ | ✅ | Alta |
| Netlify | Gratis | ⭐⭐⭐⭐⭐ | ✅ | Alta |
| Vercel | Gratis | ⭐⭐⭐⭐ | ✅ | Alta |
| Servidor propio | Variable | ⭐⭐ | Configurable | Máxima |

---

## ✨ Próximos pasos

1. **Personaliza tu perfil** en `index.html`
2. **Añade tu video** de presentación
3. **Actualiza tus redes** sociales
4. **Carga un avatar 3D personalizado**
5. **Imprime el marcador Hiro**
6. **¡Comparte tu portafolio AR!**

---

¿Necesitas ayuda? Revisa la documentación:
- AR.js: https://ar-js-org.github.io/AR.js-Docs/
- A-Frame: https://aframe.io/docs/
- Git: https://git-scm.com/book/es/v2
