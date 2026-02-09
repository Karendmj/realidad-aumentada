# 🎨 Tarjeta de Presentación Infinita - AR

Una aplicación de Realidad Aumentada interactiva que despliega un avatar 3D, botones flotantes y video de presentación al detectar el marcador Hiro.

## 🚀 Características

✅ **Avatar 3D Animado** - Modelo 3D que rota y se anima  
✅ **Botones Flotantes** - Enlaces a redes sociales (LinkedIn, GitHub, Instagram, YouTube, Email, WhatsApp)  
✅ **Video de Presentación** - Modal con video integrado  
✅ **Efectos Visuales** - Esferas flotantes, cajas rotativas y partículas animadas  
✅ **Diseño Responsivo** - Compatible con móviles y escritorio  
✅ **AR.js + A-Frame** - Detección de marcador Hiro en tiempo real  

## 📱 Requisitos

- **HTTPS obligatorio** - La cámara del celular solo funciona con conexión segura
- **Navegador moderno** - Chrome, Firefox, Safari en iOS 14+
- **Permiso de cámara** - El navegador solicitará acceso a la cámara
- **Marcador Hiro** - Imprime o muestra el marcador en pantalla

## 🔗 Desplegar en HTTPS

### Opción 1: GitHub Pages (Recomendado)
```bash
git init
git add .
git commit -m "Tarjeta AR"
git branch -M main
git remote add origin https://github.com/tuusuario/tu-repo.git
git push -u origin main
```

Luego activa GitHub Pages en Settings → Pages → Main Branch

### Opción 2: Glitch
1. Ve a https://glitch.com
2. Importa este proyecto
3. Glitch automáticamente sirve por HTTPS

### Opción 3: Netlify
1. Arrastra la carpeta a https://netlify.com
2. Se sirve automáticamente por HTTPS

### Opción 4: Vercel
```bash
npm install -g vercel
vercel
```

## ✏️ Personalización

### Cambiar el nombre y profesión
Edita estas líneas en `index.html`:
```html
<a-text value="Tu Nombre Aquí" ...></a-text>
<a-text value="Desarrollador Web | Diseñador 3D" ...></a-text>
```

### Actualizar enlaces de redes sociales
```html
<a href="https://linkedin.com/in/tunombre" ...>
<a href="https://github.com/tunombre" ...>
<a href="mailto:tuemail@example.com" ...>
```

### Cambiar video de presentación
```html
<source src="TU_VIDEO_URL.mp4" type="video/mp4">
```

### Usar otro avatar 3D
Reemplaza la URL del modelo:
```html
<a-asset-item id="avatar-model" src="TU_MODELO.glb">
```

Opciones recomendadas:
- ReadyPlayerMe: https://readyplayer.me
- Sketchfab: https://sketchfab.com
- Mixamo: https://mixamo.com

## 🎯 Cómo usar

1. **Imprime o muestra el marcador Hiro** en tu pantalla o en papel
   - Marcador Hiro: https://upload.wikimedia.org/wikipedia/commons/d/d8/Hiro_marker_ARjs.png

2. **Abre la URL en tu celular** (HTTPS)

3. **Apunta la cámara al marcador**

4. **Haz clic en los botones** para:
   - Contactar por redes sociales
   - Ver tu video de presentación

## 🛠️ Tecnologías usadas

- **AR.js** - Librería de Realidad Aumentada
- **A-Frame** - Framework 3D basado en Three.js
- **HTML5** - Video y Canvas
- **CSS3** - Animaciones y gradientes

## 📦 Estructura del proyecto

```
tu-proyecto/
├── index.html          # Archivo principal
└── README.md          # Este archivo
```

## 🐛 Solución de problemas

### La cámara no funciona
- ✅ Verifica que uses **HTTPS**
- ✅ Autoriza el acceso a la cámara
- ✅ Usa un navegador moderno

### El marcador no se detecta
- ✅ Asegúrate de tener buena iluminación
- ✅ Muestra el marcador completo a la cámara
- ✅ El marcador debe ser al menos 10x10 cm

### El video no aparece
- ✅ Revisa que la URL del video sea correcta
- ✅ Soporta formatos: MP4, WebM, Ogg

### Avatar 3D no se ve
- ✅ Espera a que cargue (puede tardar 5-10 segundos)
- ✅ Verifica tu conexión a internet
- ✅ Prueba con otro modelo 3D

## 📄 Licencia

Proyecto educativo - Libre para usar y modificar

## 👨‍💻 Autor

Creado para propósitos educativos

---

**¿Necesitas ayuda?** Consulta la documentación:
- AR.js Docs: https://ar-js-org.github.io/AR.js-Docs/
- A-Frame Docs: https://aframe.io/docs/
