# API de Floristería

Esta es una API RESTful para gestionar pedidos y productos en una floristería. Está construida usando Node.js, Express y MongoDB, y permite realizar operaciones CRUD en los productos y pedidos.

## Contenidos

- [Introducción](#introducción)
- [Características](#características)
- [Requisitos](#requisitos)
- [Configuración](#configuración)
- [Uso](#uso)
- [Endpoints de la API](#endpoints-de-la-api)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Introducción

Esta API proporciona un conjunto de endpoints para interactuar con el catálogo de productos y los pedidos de una floristería. Permite a los usuarios crear, leer, actualizar y eliminar productos y pedidos.

## Características

- Gestión de productos: obtener todos los productos, obtener un producto por ID.
- Gestión de pedidos: crear un nuevo pedido.
- Validación de datos para evitar pedidos con productos agotados o con información incorrecta.

## Requisitos

- [Node.js](https://nodejs.org/) (v10 o superior)
- [MongoDB](https://www.mongodb.com/) (Instancia local o en la nube, como MongoDB Atlas)

## Configuración

1. **Clona el repositorio:**

    ```bash
    git clone https://github.com/tuusuario/tu-repositorio.git
    cd tu-repositorio
    ```

2. **Instala las dependencias:**

    ```bash
    npm install
    ```

3. **Configura las variables de entorno:**

    Crea un archivo `.env` en la raíz del proyecto con la siguiente estructura:

    ```plaintext
    MONGO_URI=mongodb://<usuario>:<contraseña>@<host>:<puerto>/<base_de_datos>
    PORT=3000
    ```

    Reemplaza los valores con los detalles de tu instancia de MongoDB.

4. **Inicia el servidor:**

    ```bash
    npm start
    ```

    La API estará disponible en `http://localhost:3000`.

## Uso

Para interactuar con la API, puedes usar herramientas como [Postman](https://www.postman.com/) o [cURL](https://curl.se/). Asegúrate de que el servidor esté en funcionamiento antes de hacer solicitudes.

## Endpoints de la API

### Productos

- **GET /api/productos**

  Obtiene todos los productos con stock disponible.

  **Respuesta:**

  ```json
  [
    {
      "nombre": "Rosa",
      "precio": 10.5,
      "stock": 20,
      "descripcion": "Rosa roja fresca"
    },
    ...
  ]
