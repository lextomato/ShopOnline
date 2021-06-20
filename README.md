# ShopOnline

tienda online que despliega productos agrupados por la categoría a la que pertenecen, generando por separado backend (API REST) y frontend.

## Comenzando 🚀

Este proyecto tiene como objetivo la implementación de una tienda online básica construida teniendo por separado una API REST (Backend) y un cliente (Frontend);
las cuales se describen a continuación.


### Detalles de l proyecto 📋

Lenguajes utilizados

```
Python 3.8.6
JavaScript
HTML5
```

### API REST (Backend) 🔧

framework y librerías utilizadas

```
Django 3.2.4
django-cors-headers 3.7.0
djangorestframework 3.12.4
PyMySQL 1.0.2
```

_Se usó Django como framework principal, e implementando Django Rest Framework para contruir la API REST bajo el nombre global de la aplicación "Shop"._

_En el archivo:_
```
Backend/shop/settings.py
```
_Se configuró la conexión a la base de datos según el siguiente esquema:_
```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    },
    'bsale_test': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'bsale_test',
        'USER': 'bsale_test',
        'PASSWORD': 'bsale_test',
        'HOST': 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
        'PORT': '3306',
        'OPTIONS': {
            'sql_mode': 'traditional',
        }
    }
}
```
_Siguiente a esto se configura el permiso para la web cliente y permitir su acceso a la API REST mendiante el siguiente esquema:_
```
CORS_ORIGIN_ALLOW_ALL = True
CORS_ORIGIN_WHITELIST = [
    "http://127.0.0.1:5500",
]
```

_Posteriormente se creó la app interna "product" dentro de django para generar todas las implemntaciones y configuraciones para conectarse a la base de datos._

_En el archivo:_
```
Backend/product/models.py
```
_Se implenta la estructura de los modelos de cada tabla obetnida desde la base de datos (Producto y Categoria)_

_Luego en el archivo:_
```
Backend/product/routers.py
```
_Se realizan las configuraciones necesarias para que la app maneje 2 base de datos (la internar pertenciente a la misma app y la externa perteneciente a Bsale_test)._

_Mas tarde en el archivo:_
```
Backend/product/serializers.py
```
_Se construyen los serializadores para posteriormente realizar las vistas de la API REST._

_Ahora en el archivo:_
```
Backend/product/views.py
```
_Se importan los modelos, serializadores, vistas y filtros predeterminadas que trae Django Rest Framework para construir las vistas deseadas para la API REST._

_Finalmente en el archivo:_
```
Backend/shop/urls.py
```
_Se importan las vistas creadas de la app "product" para registrar las rutas correspondientes a la API REST y que se muestren en el navegador o para consumir la API REST posteriormente desde el cliente._


### Cliente (Frontend) 🏠

_El cliente fue construido netamente con JavaScript y los siguientes componentes:_
```
Bootstrap v5.0
```
_El proyecto esta basado en el archivo:_
```
Frontend/index.html
```
_En el cual se puede revisar toda la estructura HTML implementada, conectando los componentes anteriormente mencionados._

_El único archivo JavaScript de la siguinete ruta:_
```
Frontend/js/index.js
```
_Se detalla y describe cada función implementada para hacer funcionar la aplicación web._

_El cliente se conecta a la API REST mediante pesticiones "Fetch", y la reactividad de la página se implementó mediante la creación y eleminación de elemntos HTML aprovechando las pesticiones Fetch que se hacen al servidor._

## Despliegue 📦

_Agrega notas adicionales sobre como hacer deploy_

## Versionado 📌

Se usó [Git Hub](https://github.com/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/lextomato/ShopOnline/tags).

## Autores ✒️

* **Jhojany Uzcátegui** - (https://github.com/lextomato)

---
⌨️ con ❤️ por [Lextomato](https://github.com/lextomato) 😊
