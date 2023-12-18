/*
==========================================================
CONEXIÓN A LA BASE DE DATOS
==========================================================

1. Importamos la biblioteca MongoClient de 'mongodb' para la conexión a la base de datos.

2. Definimos la URI de la base de datos, que es la dirección donde MongoDB está ejecutándose ('mongodb://localhost:27017/Sushi_Fukusoke').

3. Creamos una nueva instancia de MongoClient y configuramos algunas opciones.
   - 'serverApi': Especificamos la versión de la API del servidor MongoDB.
   - 'socketTimeoutMS': Establecemos el tiempo de espera del socket a 30,000 milisegundos.

4. Implementamos la función 'connectToDatabase' asincrónica, que intenta conectarse a la base de datos utilizando el cliente de MongoDB.
   - Lanzamos mensajes de éxito o error en la consola según el resultado de la conexión.

*/

/*
==========================================================
CONFIGURACIÓN DE MIDDLEWARE Y RUTAS
==========================================================

1. Configuramos middleware para analizar el cuerpo de las solicitudes y permitir CORS.
   - 'express.json()': Analiza datos JSON en las solicitudes.
   - 'express.static('public')': Permite servir archivos estáticos desde el directorio 'public'.
   - Configuramos CORS para permitir solicitudes desde cualquier origen.

2. Conectamos las rutas de la aplicación importándolas desde los módulos correspondientes (RegisterRoutes, LoginRoutes, sushiRoutes).
   - 'app.use('/api', RegisterRoutes)': Conecta las rutas de registro bajo el prefijo '/api'.
   - 'app.use('/api', LoginRoutes)': Conecta las rutas de inicio de sesión bajo el prefijo '/api'.
   - 'app.use('/api', sushiRoutes)': Conecta las rutas relacionadas con sushi bajo el prefijo '/api'.

3. Manejamos errores CORS para evitar problemas de política de mismo origen.

*/

/*
==========================================================
INICIALIZACIÓN DEL SERVIDOR
==========================================================

1. Iniciamos el servidor utilizando el método 'listen' de la aplicación express.
   - Especificamos el puerto (5173) en el que el servidor escuchará las solicitudes entrantes.

2. Mostramos un mensaje de éxito en la consola indicando que el servidor está escuchando en el puerto especificado.

*/