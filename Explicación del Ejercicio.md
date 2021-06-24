# Explicación del Ejercicio de Bsale_Test

El Ejercicio se estructuró implementando una web para conectarse a la base de datos proporcionada por Bsale la cual tiene como fin desplegar una API REST pública, y asi obtener los prodcutos y categorias de una tienda y ser consumida por otra web cliente (Frontend).

Para dicho fin se construyó mediante el framework _Django_ junto con la librería principal _Django Rest Frame Work_ especializada para hacer API REST's.

Aqui se muestra la estructura de archivos del proyecto:
```
│   db.sqlite3
│   manage.py
│
├───.vscode
│       settings.json
│
├───product
│   │   admin.py
│   │   apps.py
│   │   models.py
│   │   routers.py
│   │   serializers.py
│   │   tests.py
│   │   views.py
│   │   __init__.py
│   │
│   ├───migrations
│   │   │   0001_initial.py
│   │   │   __init__.py
│   │   │
│   │   └───__pycache__
│   │           0001_initial.cpython-38.pyc
│   │           __init__.cpython-38.pyc
│   │
│   └───__pycache__
│           admin.cpython-38.pyc
│           apps.cpython-38.pyc
│           models.cpython-38.pyc
│           routers.cpython-38.pyc
│           serializers.cpython-38.pyc
│           views.cpython-38.pyc
│           __init__.cpython-38.pyc
│
├───shop
│   │   asgi.py
│   │   settings.py
│   │   urls.py
│   │   wsgi.py
│   │   __init__.py
│   │
│   └───__pycache__
│           settings.cpython-38.pyc
│           urls.cpython-38.pyc
│           wsgi.cpython-38.pyc
│           __init__.cpython-38.pyc
│
└───templates
        swagger-ui.html
```
Esta estructura es generada al instalar un nuevo proyecto mediante Django, para ver mas detalles de los archivos principales agregados y modificados para el funcionamiento de la API REST en el archivo [README.ms](https://github.com/lextomato/ShopOnline/blob/master/README.md) de este repositorio.

### Posteriormente

Se construyo la Web cliente (Frontend) que se conecta a la API REST anteriormente mencionada mediantes peticiones Fetch que devuelven en formato Json los productos y categorias a llenar en la tienda online.

Esta web fue hecha con HTML y JavaScript simple, sin uso de ningún framework. peró si uso el componente Boostrap para parte Visual de la Web.

De los datos obtenidos en las peticiones Fecth, se usaron para construir los elemntos HTML de las Categorías y lista de productos y mediante JavaScript se usaron funciones para obtener parametros y enviarlos al servidor mediante solicitudes fecth y asi devolver los productos filtrados según sus requerimientos, cabe resaltar que el sistema de filtrado lo hace el servidor y este retorna los elementos filtrados a la web cliente por lo que este último solo maneja los elemntos requeridos.

Aqui se muestra la estructura de archivos del proyecto Frontend:
```
│   index.html
│
├───assets
│       favicon.ico
│       imgError.jpg
│
├───css
│       styles.css
│
└───js
        index.js
```
Donde la unica vista es el index.html en el directorio raiz, y este se conecta a los archivos JavaScript, Css e imagenes locales por medio las etiquetas correspondientes.

Para ver el detalle de cada función implementada en JavaScript ver el archivo directamente [index.js](https://github.com/lextomato/ShopOnline/blob/master/Frontend/js/index.js), ya que se encuentra totalmente comentada.

### Para Concluir

En simples palabras son 2 webs distintas una API REST y la otra el cliente, las cuales se conectan mediante peticiones HTTP para solicitar o enviar objetos Json (productos y categorías) según corresponda, y poderlos usar en la vista Html del cliente.

Tambien se debe acotar que al ser un proyecto sin frameworks para el frontend, la reactividad de la página la hice mediante la creación y eliminación se secciones HTML indentificados mediantes sus "id" en las etiquetas HTML, aprovechando las peticiones "Fetch (HTTP)" que en cada uso de la web cliente se solicitan mediante las funciones creadas.

## Autores ✒️

* **Jhojany Uzcátegui** - (https://github.com/lextomato)

---
⌨️ con ❤️ por [Lextomato](https://github.com/lextomato) 😊
