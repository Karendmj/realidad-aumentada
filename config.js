<!-- 
    CONFIGURACIÓN PERSONALIZABLE PARA LA TARJETA AR
    Modifica los valores aquí para personalizar tu experiencia
-->

<script>
    // ===================================
    // 🎯 CONFIGURACIÓN PERSONAL
    // ===================================
    const CONFIG = {
        // Información personal
        nombre: "Karen Mejia",
        profesion: "Estudiante de diseño industrial",
        
        // Avatar 3D
        avatar: {
            url: "https://models.readyplayer.me/63a6c8efc3e1a6f0f12e4f31.glb?morphTargets=Armature_Blink_Left,Armature_Blink_Right",
            escala: "1 1 1",
            posicion: "0 -1 0",
            rotacion: "0 360 0",
            duracionRotacion: 8000 // en milisegundos
        },

        // Video de presentación
        video: {
            url: "https://www.w3schools.com/html/mov_bbb.mp4",
            autoplay: false
        },

        // Redes sociales
        redesSociales: {
            linkedin: "https://linkedin.com/in/tunombre",
            github: "https://github.com/tunombre",
            instagram: "https://instagram.com/tunombre",
            youtube: "https://youtube.com/@tunombre",
            email: "mailto:tuemail@example.com",
            whatsapp: "https://wa.me/1234567890"
        },

        // Colores y tema
        tema: {
            colorPrimario: "#00D4FF",
            colorSecundario: "#FF6B9D",
            colorTerciario: "#FFD700",
            fondo: "rgba(0, 0, 0, 0.7)"
        },

        // Efectos visuales
        efectos: {
            animacionesActivadas: true,
            velocidadAnimacion: 1, // 0.5 = lento, 1 = normal, 2 = rápido
            efectosPartículas: true,
            usarGlowEffect: true
        }
    };

    // ===================================
    // 🎨 EJEMPLOS DE AVATARES 3D
    // ===================================
    const AVATARES_DISPONIBLES = {
        readyPlayerMe: "https://models.readyplayer.me/tu_id.glb",
        sketchfab1: "https://sketchfab.com/models/your-model-id/download",
        mixamo: "https://cdn.jsdelivr.net/npm/@mixamorig/mixamo@latest/models/",
        
        // Puedes encontrar modelos en:
        // - ReadyPlayerMe: https://readyplayer.me
        // - Sketchfab: https://sketchfab.com
        // - Mixamo: https://mixamo.com
        // - TurboSquid: https://www.turbosquid.com
    };

    // ===================================
    // 🎬 VIDEOS RECOMENDADOS
    // ===================================
    const VIDEOS_DISPONIBLES = {
        // Usa tus propios videos o URLs de streaming
        local: "/videos/mi-presentacion.mp4",
        youtube: "https://www.youtube.com/embed/tu_video_id",
        vimeo: "https://vimeo.com/tu_video_id",
        cloudinary: "https://res.cloudinary.com/tu_cuenta/video/upload/tu_video.mp4"
    };

    // ===================================
    // 🌈 PALETAS DE COLORES PREDEFINIDAS
    // ===================================
    const PALETAS_COLORES = {
        neon: {
            colorPrimario: "#00D4FF",
            colorSecundario: "#FF6B9D",
            colorTerciario: "#FFD700"
        },
        oscuro: {
            colorPrimario: "#667eea",
            colorSecundario: "#764ba2",
            colorTerciario: "#f093fb"
        },
        vibrante: {
            colorPrimario: "#FF0000",
            colorSecundario: "#00FF00",
            colorTerciario: "#0000FF"
        },
        pastel: {
            colorPrimario: "#FFB6C1",
            colorSecundario: "#DDA0DD",
            colorTerciario: "#87CEEB"
        }
    };

    // ===================================
    // 📊 APLICAR CONFIGURACIÓN
    // ===================================
    function aplicarConfiguracion() {
        // Actualizar nombre
        const elementoNombre = document.querySelector('a-text[value="Tu Nombre Aquí"]');
        if (elementoNombre) {
            elementoNombre.setAttribute('value', CONFIG.nombre);
        }

        // Actualizar profesión
        const elementoProfesion = document.querySelector('a-text[value="Desarrollador Web | Diseñador 3D"]');
        if (elementoProfesion) {
            elementoProfesion.setAttribute('value', CONFIG.profesion);
        }

        // Actualizar enlaces de redes sociales
        actualizarRedesSociales();

        console.log('✅ Configuración aplicada correctamente');
    }

    function actualizarRedesSociales() {
        const botones = {
            'linkedin': document.querySelectorAll('[href*="linkedin"]'),
            'github': document.querySelectorAll('[href*="github"]'),
            'instagram': document.querySelectorAll('[href*="instagram"]'),
            'youtube': document.querySelectorAll('[href*="youtube"]'),
            'whatsapp': document.querySelectorAll('[href*="wa.me"]')
        };

        for (let red in botones) {
            if (CONFIG.redesSociales[red]) {
                botones[red].forEach(btn => {
                    btn.href = CONFIG.redesSociales[red];
                });
            }
        }
    }

    // Aplicar configuración cuando la página esté lista
    document.addEventListener('DOMContentLoaded', aplicarConfiguracion);

    // ===================================
    // 🚀 FUNCIÓN PARA CAMBIAR PALETA
    // ===================================
    function cambiarPaleta(nombrePaleta) {
        if (PALETAS_COLORES[nombrePaleta]) {
            CONFIG.tema = { ...CONFIG.tema, ...PALETAS_COLORES[nombrePaleta] };
            console.log(`🎨 Paleta '${nombrePaleta}' aplicada`);
        }
    }

    // ===================================
    // 📹 FUNCIÓN PARA CAMBIAR VIDEO
    // ===================================
    function cambiarVideo(nuevaURL) {
        const video = document.getElementById('presentationVideo');
        if (video) {
            video.src = nuevaURL;
            console.log('📹 Video actualizado');
        }
    }

    // ===================================
    // 🎭 FUNCIÓN PARA CAMBIAR AVATAR
    // ===================================
    function cambiarAvatar(nuevaURL) {
        const avatar = document.getElementById('avatar');
        if (avatar) {
            avatar.setAttribute('gltf-model', nuevaURL);
            console.log('🎭 Avatar actualizado');
        }
    }

    // Exportar para uso global
    window.CONFIG = CONFIG;
    window.cambiarPaleta = cambiarPaleta;
    window.cambiarVideo = cambiarVideo;
    window.cambiarAvatar = cambiarAvatar;
</script>

<!-- 
    EJEMPLOS DE USO EN LA CONSOLA DEL NAVEGADOR:
    
    1. Cambiar paleta de colores:
       cambiarPaleta('oscuro');
       cambiarPaleta('vibrante');
    
    2. Cambiar video:
       cambiarVideo('https://ejemplo.com/mi-video.mp4');
    
    3. Cambiar avatar:
       cambiarAvatar('https://ejemplo.com/mi-avatar.glb');
    
    4. Ver configuración actual:
       console.log(CONFIG);
    
    5. Modificar nombre:
       CONFIG.nombre = "Juan Pérez";
-->
