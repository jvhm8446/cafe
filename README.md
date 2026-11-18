# Mi Cafetería — menú digital para 2 Smart TV

Aplicación web independiente de ChatGPT. Permite cambiar precios, productos y disponibilidad con botones desde el celular. La pantalla 1 y la pantalla 2 se actualizan mediante Firebase Realtime Database. Sin equipo central ni suscripción de pago obligatoria para el piloto. Requiere internet y un navegador compatible en los televisores.

## 1. Publicar sitio (GitHub Pages)

En este repositorio visita Settings > Pages > Build and deployment. Configura Deploy from a branch, rama main, carpeta / (root), Save.

Enlaces previstos, **solo funcionan cuando GitHub Pages esté activado**:
- Panel: https://jvhm8446.github.io/cafe/
- TV 1: https://jvhm8446.github.io/cafe/tv.html?pantalla=1
- TV 2: https://jvhm8446.github.io/cafe/tv.html?pantalla=2

## 2. Activar Firebase gratuito

1. Ve a https://console.firebase.google.com/ y crea un proyecto Firebase con plan Spark (revisa las cuotas). Registra una aplicación de tipo Web y copia sus datos de configuración.
2. En Build > Realtime Database crea la base de datos en modo Locked. Copia su URL HTTPS, normalmente termina en firebasedatabase.app.
3. En la pestaña Rules pega el contenido de firebase/reglas.json y pulsa Publish. Estas reglas permiten ver los precios sin iniciar sesión, pero solo las cuentas autorizadas pueden cambiarlos.
4. En Authentication > Sign-in method activa Google. En Authentication > Settings > Authorized domains añade jvhm8446.github.io.
5. En este repositorio abre configuracion.js > icono lápiz Edit, reemplaza los cinco valores vacíos por los correspondientes de tu aplicación web Firebase (incluida databaseURL) y confirma con Commit changes. Los parámetros de configuración web no son claves secretas; NUNCA publiques contraseñas ni claves de cuenta de servicio.

## 3. Activar propietario (una sola vez)

1. Abre el enlace del Panel. Pulsa Entrar con Google. Aparecerá un código de usuario largo.
2. Desde Firebase Console > Realtime Database > Data crea la ruta roles/owner y guarda el código mostrado como string (texto).
3. Recarga el panel. Ya podrás agregar productos, cambiar precios, marcar agotado y elegir Pantalla 1, Pantalla 2 o Ambas.

## 4. Uso en televisores y delegación

Abre cada enlace de TV en su televisor y mantenlo abierto. Los cambios llegan por avisos en vivo y también se consultan cada 15 segundos. Los modelos antiguos pueden requerir Chromecast, Fire TV u otro dispositivo externo compatible.

Para autorizar a otra persona, comparte el enlace del Panel. Que inicie sesión con su propio Google y te comparta el código mostrado. En tu panel abre Administrar accesos y agrega ese código. Desde allí también podrás retirarle el acceso.

## Seguridad y costos
- El repositorio público contiene únicamente la aplicación, nunca claves secretas.
- Firebase Realtime Database permite lectura pública de productos para la TV y restringe escritura por identidad.
- GitHub Pages para repositorios públicos y el plan Spark de Firebase ofrecen una opción gratuita sujeto a límites. Antes de uso continuo prueba las dos pantallas y el navegador de los TV.
- Firebase es obligatorio para sincronizar los cambios del panel; GitHub Pages solo sirve los archivos.



## Categorías y nombres en inglés

Cada producto tiene una categoría. El panel presenta diez categorías y permite ingresar una personalizada con **Otra categoría**. En las pantallas, el nombre en inglés aparece debajo del nombre en español cuando ambos son distintos.

El panel propone nombres en inglés para productos comunes mediante un catálogo local. Si el nombre no tiene sugerencia, escribe el nombre en inglés al crear el producto. Para guardar un nombre personalizado, publica la versión actualizada de `firebase/reglas.json` en **Realtime Database → Reglas**. Las sugerencias del catálogo se muestran también en los productos existentes.
