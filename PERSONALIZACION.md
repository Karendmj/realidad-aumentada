# 🎨 Ejemplos de Personalización Avanzada

## 1. Cambiar los colores del tema

En el archivo `index.html`, busca la sección de estilos CSS y modifica:

```css
.linkedin {
    background: linear-gradient(135deg, #0077B5, #005885);
}

.github {
    background: linear-gradient(135deg, #333, #000);
}

.instagram {
    background: linear-gradient(135deg, #E4405F, #833AB4);
}
```

### Ejemplos de gradientes:
```css
/* Degradado rojo a naranja */
background: linear-gradient(135deg, #FF0000, #FF9500);

/* Degradado azul a púrpura */
background: linear-gradient(135deg, #0000FF, #9400D3);

/* Degradado verde a cian */
background: linear-gradient(135deg, #00FF00, #00FFFF);

/* Degradado oro a naranja */
background: linear-gradient(135deg, #FFD700, #FFA500);
```

---

## 2. Agregar más redes sociales

Copia este bloque en la sección de botones:

```html
<!-- TikTok -->
<a href="https://tiktok.com/@tunombre" target="_blank" class="social-btn tiktok" title="TikTok">🎵</a>

<!-- Twitch -->
<a href="https://twitch.tv/tunombre" target="_blank" class="social-btn twitch" title="Twitch">👾</a>

<!-- Discord -->
<a href="https://discord.gg/tu-servidor" target="_blank" class="social-btn discord" title="Discord">💬</a>

<!-- Telegram -->
<a href="https://t.me/tunombre" target="_blank" class="social-btn telegram" title="Telegram">✈️</a>
```

Luego añade los estilos CSS:

```css
.tiktok {
    background: linear-gradient(135deg, #25F4EE, #FF0050);
}

.twitch {
    background: linear-gradient(135deg, #9146FF, #6c2aff);
}

.discord {
    background: linear-gradient(135deg, #5865F2, #7289da);
}

.telegram {
    background: linear-gradient(135deg, #0088cc, #0064b3);
}
```

---

## 3. Cambiar el avatar 3D

### Opción A: Usar ReadyPlayerMe (Crea tu avatar personalizado)
1. Ve a https://readyplayer.me
2. Crea tu avatar
3. Copia el enlace .glb
4. Cambia esta línea en `index.html`:

```html
<a-asset-item id="avatar-model" src="TU_ENLACE_GLB_AQUI">
```

### Opción B: Usar un modelo de Sketchfab
1. Ve a https://sketchfab.com/search?q=avatar
2. Descarga un modelo (formato .glb)
3. Sube el archivo a un servidor (ej: imgur, imgbb)
4. Usa la URL en el campo `src`

### Opción C: Crear un avatar procedural con A-Frame

```html
<!-- Avatar simple hecho con primitivas -->
<a-entity id="avatar">
    <!-- Cabeza -->
    <a-sphere position="0 1.5 0" radius="0.3" material="color: #FFD9B5;"></a-sphere>
    
    <!-- Ojos -->
    <a-sphere position="-0.1 1.6 0.25" radius="0.05" material="color: #000;"></a-sphere>
    <a-sphere position="0.1 1.6 0.25" radius="0.05" material="color: #000;"></a-sphere>
    
    <!-- Cuerpo -->
    <a-box position="0 0.8 0" scale="0.3 0.6 0.3" material="color: #4A90E2;"></a-box>
    
    <!-- Brazos -->
    <a-box position="-0.3 0.9 0" scale="0.1 0.4 0.1" material="color: #FFD9B5;"></a-box>
    <a-box position="0.3 0.9 0" scale="0.1 0.4 0.1" material="color: #FFD9B5;"></a-box>
    
    <!-- Piernas -->
    <a-box position="-0.1 0.3 0" scale="0.1 0.5 0.1" material="color: #333;"></a-box>
    <a-box position="0.1 0.3 0" scale="0.1 0.5 0.1" material="color: #333;"></a-box>
</a-entity>
```

---

## 4. Agregar sonido de fondo

Añade esto dentro de `<a-assets>`:

```html
<audio id="background-music" src="https://ejemplo.com/musica.mp3" autoplay loop></audio>
```

O dentro del marcador:

```html
<a-sound src="#background-music" autoplay="true"></a-sound>
```

---

## 5. Cambiar el video de presentación

Opción 1: URL directa

```html
<source src="https://tu-dominio.com/tu-video.mp4" type="video/mp4">
```

Opción 2: YouTube (requiere iframe)

```html
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/TU_ID_VIDEO" frameborder="0" allowfullscreen></iframe>
```

Opción 3: Vimeo

```html
<iframe src="https://player.vimeo.com/video/TU_ID_VIDEO" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
```

---

## 6. Agregar más efectos visuales

### Efecto de brillo (Glow)

```html
<a-sphere position="0 2 -1"
          radius="0.3"
          material="color: #00D4FF; 
                   emissive: #00D4FF; 
                   metalness: 0.8; 
                   roughness: 0.2;">
</a-sphere>
```

### Efecto de transparencia

```html
<a-box position="0 1 0"
       material="color: #FF00FF; opacity: 0.5;">
</a-box>
```

### Efecto de patrón

```html
<a-box position="0 1 0"
       material="src: #textura-personalizada; 
                 metalness: 0.5;
                 roughness: 0.8;">
</a-box>
```

---

## 7. Animaciones personalizadas

### Rotación en diferentes ejes

```html
<!-- Rotación solo en Y -->
<a-entity animation="property: rotation; to: 0 360 0; loop: true; dur: 5000;">

<!-- Rotación en X y Y -->
<a-entity animation="property: rotation; to: 360 360 0; loop: true; dur: 5000;">

<!-- Movimiento en línea recta -->
<a-entity animation="property: position; to: 2 1 0; loop: true; dir: alternate; dur: 3000;">

<!-- Escalado (crecer y encoger) -->
<a-entity animation="property: scale; to: 1.5 1.5 1.5; loop: true; dir: alternate; dur: 2000;">

<!-- Opacidad (desvanecimiento) -->
<a-entity animation="property: material.opacity; to: 0.2; loop: true; dir: alternate; dur: 2000;">
```

---

## 8. Texto personalizado

### Cambiar tamaño

```html
<a-text value="Mi texto" scale="2 2 2"></a-text>  <!-- Grande -->
<a-text value="Mi texto" scale="0.5 0.5 0.5"></a-text>  <!-- Pequeño -->
```

### Cambiar color

```html
<a-text value="Mi texto" color="#FF0000"></a-text>  <!-- Rojo -->
<a-text value="Mi texto" color="#00FF00"></a-text>  <!-- Verde -->
<a-text value="Mi texto" color="#0000FF"></a-text>  <!-- Azul -->
```

### Cambiar alineación

```html
<a-text value="Mi texto" align="center"></a-text>   <!-- Centrado -->
<a-text value="Mi texto" align="left"></a-text>     <!-- Izquierda -->
<a-text value="Mi texto" align="right"></a-text>    <!-- Derecha -->
```

---

## 9. Crear múltiples escenas

Puedes tener diferentes efectos según donde apuntes:

```html
<!-- Marcador 1: Avatar -->
<a-marker preset="hiro">
    <a-entity gltf-model="#avatar-model"></a-entity>
</a-marker>

<!-- Marcador 2: Objetos 3D (requiere otro marcador) -->
<a-marker preset="kanji">
    <a-box position="0 0.5 0" material="color: #FF0000;"></a-box>
</a-marker>
```

---

## 10. Variables CSS personalizadas

```css
:root {
    --color-primario: #00D4FF;
    --color-secundario: #FF6B9D;
    --duracion-animacion: 5000ms;
    --radio-boton: 60px;
}

.social-btn {
    width: var(--radio-boton);
    height: var(--radio-boton);
    background: var(--color-primario);
}
```

---

## 🚀 Recursos adicionales

### Librerías de modelos 3D:
- https://sketchfab.com
- https://readyplayer.me
- https://quaternius.com
- https://poly.haven.com
- https://mixamo.com

### Generadores de gradientes:
- https://cssgradient.io
- https://gradientor.app
- https://uigradients.com

### Herramientas para videos:
- https://handbrake.fr (comprimir videos)
- https://ffmpeg.org (editar videos)
- https://shotcut.org (editar videos libremente)

### Documentación oficial:
- A-Frame: https://aframe.io/docs
- AR.js: https://ar-js-org.github.io/AR.js-Docs/
- Three.js: https://threejs.org/docs

---

¿Tienes preguntas? Consulta la comunidad en:
- GitHub: https://github.com/AR-js-org/AR.js
- Discord: https://discord.gg/JxUAJaHX2z
- Stack Overflow: #ar.js #aframe
