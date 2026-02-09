# 📚 Guía Completa - Tarjeta de Presentación Infinita AR

## 🎯 ¿Qué es este proyecto?

Una **Tarjeta de Presentación interactiva en Realidad Aumentada (AR)** que:
- ✅ Despliega un **avatar 3D animado** al detectar el marcador Hiro
- ✅ Muestra **botones flotantes** para tus redes sociales
- ✅ Contiene un **video de presentación** personalizado
- ✅ Funciona en **cualquier celular** con cámara y navegador
- ✅ Se sirve por **HTTPS** (seguro)

---

## 📁 Archivos del proyecto

```
tu-proyecto/
├── index.html              ← Página principal (AR)
├── marcador.html           ← Descarga del marcador Hiro
├── config.js              ← Configuración personalizable
├── README.md              ← Información del proyecto
├── DESPLIEGUE.md          ← Cómo publicar online
├── PERSONALIZACION.md     ← Ejemplos avanzados
├── PROBLEMAS.md           ← Solución de errores
├── GUIA_RAPIDA.md         ← Este archivo
└── .gitignore             ← Para Git
```

---

## ⚡ Inicio Rápido (5 minutos)

### Paso 1: Personaliza tu perfil
Abre `index.html` en tu editor favorito y cambia:

```html
<!-- Línea 64-65 -->
<a-text value="Tu Nombre Aquí" ...></a-text>
<a-text value="Desarrollador Web | Diseñador 3D" ...></a-text>

<!-- Línea 166-168 -->
<a href="https://linkedin.com/in/tunombre" ...>
<a href="https://github.com/tunombre" ...>
<a href="mailto:tuemail@example.com" ...>
```

### Paso 2: Sube a internet (HTTPS)

**Opción A - Glitch (2 minutos):**
1. Ve a https://glitch.com
2. Nuevo proyecto → Copia tu código
3. **URL:** `https://tu-proyecto.glitch.me` ✅ HTTPS automático

**Opción B - GitHub Pages (5 minutos):**
1. Crea repo en GitHub
2. Sube los archivos
3. Settings → Pages → Main branch
4. **URL:** `https://tu-usuario.github.io/repo`

### Paso 3: Prueba en tu celular

1. **Imprime o muestra el marcador Hiro**
   - Descarga: https://upload.wikimedia.org/wikipedia/commons/d/d8/Hiro_marker_ARjs.png
   - Tamaño mínimo: 10x10 cm

2. **Abre en tu celular:**
   - Ve a tu URL https://...
   - Permite acceso a cámara
   - Apunta al marcador

3. **¡Disfruta tu tarjeta AR!**

---

## 🎨 Personalizaciones básicas

### Cambiar el nombre
```html
<a-text value="Juan Pérez" ...></a-text>
```

### Cambiar profesión
```html
<a-text value="Ingeniero | Emprendedor" ...></a-text>
```

### Cambiar colores de botones
En CSS, busca `.social-btn` y modifica los colores:
```css
.linkedin {
    background: linear-gradient(135deg, #0077B5, #005885);  ← Cambiar aquí
}
```

### Cambiar enlaces de redes
```html
<a href="https://linkedin.com/in/TUNOMBRE">LinkedIn</a>
<a href="https://github.com/TUNOMBRE">GitHub</a>
<a href="https://instagram.com/TUNOMBRE">Instagram</a>
```

---

## 🎬 Agregar tu video

### Opción 1: Video en URL
En `index.html`, línea 170:
```html
<source src="https://tu-video.mp4" type="video/mp4">
```

### Opción 2: Subir a Cloudinary (recomendado)
1. Ve a https://cloudinary.com (gratis)
2. Sube tu video
3. Copia la URL
4. Pega en `index.html`

### Opción 3: YouTube
```html
<source src="https://www.youtube.com/embed/TU_ID_VIDEO">
```

---

## 🎭 Cambiar el avatar 3D

### Opción A: ReadyPlayerMe (mi favorita)
1. Ve a https://readyplayer.me
2. Crea tu avatar personalizado
3. Al terminar, copia el enlace .glb
4. En `index.html`, línea 55:
```html
<a-asset-item id="avatar-model" src="TU_ENLACE_GLB_AQUI">
```

### Opción B: Usar un modelo de Sketchfab
1. Ve a https://sketchfab.com
2. Busca un avatar
3. Descarga en formato .glb
4. Sube a un servidor gratuito (https://imgbb.com)
5. Copia la URL y úsala en `index.html`

---

## 🚀 Despliegue definitivo (Elige uno)

### ✅ GitHub Pages (Recomendado)
```bash
git init
git add .
git commit -m "Mi tarjeta AR"
git branch -M main
git remote add origin https://github.com/tu-usuario/mi-tarjeta-ar
git push -u origin main
```
Luego: Settings → Pages → Main branch → Save
**URL:** `https://tu-usuario.github.io/mi-tarjeta-ar`

### ✅ Glitch (Más fácil)
1. Crea cuenta en glitch.com
2. Nuevo proyecto → Import → GitHub
3. **Automáticamente HTTPS** ✅
**URL:** `https://tu-proyecto.glitch.me`

### ✅ Netlify (Pro)
1. Conecta tu repo de GitHub
2. Autoriza Netlify
3. **Automáticamente deployado y HTTPS**
**URL:** `https://tu-proyecto.netlify.app`

---

## 🔧 Personalización avanzada

### Agregar más redes sociales
Copia esto en la sección de botones:
```html
<a href="https://tiktok.com/@tunombre" class="social-btn tiktok">🎵</a>
<a href="https://discord.gg/tu-servidor" class="social-btn discord">💬</a>
<a href="https://twitch.tv/tunombre" class="social-btn twitch">👾</a>
```

Luego en CSS:
```css
.tiktok { background: linear-gradient(135deg, #25F4EE, #FF0050); }
.discord { background: linear-gradient(135deg, #5865F2, #7289da); }
.twitch { background: linear-gradient(135deg, #9146FF, #6c2aff); }
```

### Cambiar tema de colores
En `config.js`, modifica:
```javascript
CONFIG.tema = {
    colorPrimario: "#00D4FF",      ← Tu color aquí
    colorSecundario: "#FF6B9D",    ← Tu color aquí
    colorTerciario: "#FFD700"      ← Tu color aquí
}
```

### Agregar música de fondo
En `<a-assets>`:
```html
<audio id="musica" src="https://ejemplo.com/musica.mp3" autoplay loop></audio>
```

---

## 🆘 Problemas comunes

### "La cámara no funciona"
- ✅ ¿Estás usando HTTPS? (URL debe empezar con https://)
- ✅ ¿El navegador solicitó permiso?
- ✅ ¿Otro navegador funciona?

### "No detecta el marcador"
- ✅ ¿El marcador es mayor a 10x10 cm?
- ✅ ¿Hay buena iluminación?
- ✅ ¿El marcador está completo en la cámara?

### "El avatar no carga"
- ✅ Espera 5-10 segundos
- ✅ Revisa la URL del modelo
- ✅ Intenta otro modelo

**Lee PROBLEMAS.md para soluciones detalladas**

---

## 📱 Comparte tu tarjeta AR

Una vez online, **comparte el enlace HTTPS:**

```
✉️ Email: "Abre esto en tu celular 👉 https://mi-tarjeta-ar.netlify.app"

📱 WhatsApp/Telegram:
"Mira mi tarjeta AR interactiva 🎭
Apunta tu cámara al marcador Hiro
https://mi-tarjeta-ar.netlify.app"

🔗 LinkedIn/Twitter:
"Mi nueva tarjeta de presentación con Realidad Aumentada 🎨✨
Detecta el marcador Hiro y ve mi avatar 3D
[enlace]"

📲 QR (genera en https://www.qr-code-generator.com/):
Crea un código QR apuntando a tu URL
Comparte el QR en tu portafolio
```

---

## 📖 Documentación oficial

- **AR.js:** https://ar-js-org.github.io/AR.js-Docs/
- **A-Frame:** https://aframe.io/docs/
- **Three.js:** https://threejs.org/docs/
- **WebGL:** https://www.khronos.org/webgl/

---

## 💡 Tips finales

1. **Inicio simple** → Verifica que funcione básico primero
2. **Prueba local** → Usa `http://localhost` antes de publicar
3. **Usa HTTPS** → Obligatorio para cámara en navegadores
4. **Buena iluminación** → Esencial para detectar marcador
5. **Modelo 3D ligero** → Menos de 10 MB para carga rápida
6. **Prueba en dispositivos** → Diferentes celulares, navegadores
7. **Consulta ejemplos** → GitHub tiene muchos ejemplos de AR.js

---

## 🎉 ¡Lista de verificación final!

Antes de compartir:
- [ ] Personalicé mi nombre y profesión
- [ ] Agregué mis enlaces de redes sociales
- [ ] Cambié el avatar 3D (o dejé el predeterminado)
- [ ] Probé el video de presentación
- [ ] Subí a HTTPS (Glitch, GitHub Pages, Netlify, etc.)
- [ ] Probé en mi celular con el marcador
- [ ] La cámara funciona correctamente
- [ ] El avatar aparece al detectar el marcador
- [ ] Los botones de redes sociales funcionan
- [ ] Imprimí o guardo el marcador Hiro
- [ ] ¡Compartí el enlace con colegas, amigos, empleadores!

---

## 🤝 ¿Necesitas ayuda?

1. Lee **PROBLEMAS.md** para soluciones
2. Consulta **PERSONALIZACION.md** para ejemplos
3. Revisa **DESPLIEGUE.md** para hosting
4. Busca en https://github.com/AR-js-org/AR.js/issues
5. Pregunta en Stack Overflow con etiqueta `#ar.js`

---

## 📄 Licencia

Este proyecto es de código abierto y libre para usar, modificar y compartir.

---

**¡Felicidades! 🎉 Ahora tienes una tarjeta de presentación AR profesional e impresionante.**

**Próximos pasos:**
1. ✅ Personaliza todo según tus necesidades
2. ✅ Despliega en línea (HTTPS)
3. ✅ Comparte con tu red profesional
4. ✅ ¡Sorprende a empleadores y colegas!

---

*Creado para propósitos educativos - 2026*
