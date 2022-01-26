# Documentación del proyecto

## Descripción

* La temática de este software es "tienda de artículos de limpieza". Se agregaron algunos productos básicos para dar pleno uso y demostrar todas las funcionalidades de la app.

* Para este e-commerce, realizado como entrega final para el curso de ReactJS de CoderHouse utilicé:
    * CreateReactApp para su compilación,
    * react-sass para los estilos,
    * react-toastify para las notificaciones en pantalla,
    * y los servicios de google firebase para alojar la data de los productos.

## Estructura de los componentes
.
├── public
│   ├── assets
│   │   └── ...
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── components
│   │   ├── header
│   │   │   ├── CartWidget,js
│   │   │   ├── Header.js
│   │   │   └── Nav.js
│   │   ├── main
│   │   │   ├── itemDetail
│   │   │   │   ├── ItemCount.js
│   │   │   │   ├── ItemDetail.js
│   │   │   │   └── ItemDetailContainer.js
│   │   │   ├── itemList
│   │   │   │   ├── Item.js
│   │   │   │   ├── ItemList.js
│   │   │   │   └── ItemListContainer.js
│   │   │   ├── About.js
│   │   │   ├── Cart.js
│   │   │   └── Contact.js
│   │   └── footer
│   │      └── Footer.js
│   ├── context
│   │   └── CartProvider.js
│   ├── styles
│   │   ├── _base.scss
│   │   ├── _footer.scss
│   │   ├── _header.scss
│   │   ├── _main.scss
│   │   └── App.scss
│   ├── App.js
│   ├── firebase.js
│   ├── index.js
│   └── PageNotFound.js
├── .env
├── package-lock.json
├── package.json
└── README.md

## ¿Como utilizar este software?

### 1. Clonar el repositorio

#### `git clone 'https://...'`

### In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.