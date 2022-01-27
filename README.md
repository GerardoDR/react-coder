# Documentación del proyecto

## Descripción

* La temática de este software es "tienda de artículos de limpieza". Se agregaron algunos productos básicos para dar pleno uso y demostrar todas las funcionalidades de la app.

* Para este e-commerce, realizado como entrega final para el curso de ReactJS de CoderHouse utilicé:
    * CreateReactApp para su compilación,
    * react-sass para los estilos,
    * react-toastify para las notificaciones en pantalla,
    * y los servicios de google firebase para alojar la data de los productos.


## Estructura de los componentes

react-coder                            
├─ public                              
│  ├─ assets                           
│  │  └─ *.jpg                   
│  ├─ favicon.ico                      
│  ├─ index.html                       
│  ├─ manifest.json                    
│  └─ robots.txt                       
├─ src                                 
│  ├─ components                       
│  │  ├─ footer                        
│  │  │  └─ Footer.js                  
│  │  ├─ header                        
│  │  │  ├─ CartWidget.js              
│  │  │  ├─ Header.js                  
│  │  │  └─ Nav.js                     
│  │  └─ main                          
│  │     ├─ itemDetail                 
│  │     │  ├─ ItemCount.js            
│  │     │  ├─ ItemDetail.js           
│  │     │  └─ ItemDetailContainer.js  
│  │     ├─ itemList                   
│  │     │  ├─ Item.js                 
│  │     │  ├─ ItemList.js             
│  │     │  └─ ItemListContainer.js    
│  │     ├─ About.js                   
│  │     ├─ Cart.js                    
│  │     └─ Contact.js                 
│  ├─ context                          
│  │  └─ CartProvider.js               
│  ├─ styles                           
│  │  ├─ App.scss                      
│  │  ├─ _base.scss                    
│  │  ├─ _footer.scss                  
│  │  ├─ _header.scss                  
│  │  └─ _main.scss                    
│  ├─ App.js                           
│  ├─ firebase.js                      
│  ├─ index.js                         
│  └─ PageNotFound.js                  
├─ package-lock.json                   
├─ package.json                        
└─ README.md                           


## ¿Como utilizar este software?

### 1. Clonar el repositorio

#### `$ git clone https://github.com/GerardoDR/react-coder.git`

### 2. Ingresar al directorio del proyecto

#### `$ cd proyecto`

### 3. Dentro del directorio del proyecto, instalar las dependencias de nodeJs correspondientes:

#### `$ npm install`

### 4. Dentro del mismo directorio, iniciar CreateReactApp con el siguiente comando:

#### `$ npm start`

Este comando inicia la app en el modo desarrollo.  
Abrir [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

La página se va a recargar automáticamente si se edita el código.  

## Implementaciones y retoques pendientes

### 1. Pasar collection(db, "productos") a firebase.js, como para importar directamente la colección.
### 2. Reemplazar código repetido.
### 3. Agregar form
Para los usuarios al momento de finalizar compra, que tome los valores de los input. Ver de agregar la autenticación con firebase y/o formic.
### 4. Stock, pero a lo sumo chequear stock al momento de agregar los items al carrito.
No hace falta hacer nada con el stock, pero a lo sumo chequear stock al momento de agregar los items al carrito.
### 5. Cart persistente
Con localStorage
### 6. Subir links de categorías a firebase
### 7. Build
`$ npm run build`

generar el código final para subirlo a un web server.
### 8. GIF o video dentro de este readme mostrando la funcionalidad del sitio. 
(ver alejandromoises02/Marvel_guide_react_native en github)
Agregar 1 producto, verlo en el carrito, ir al carrito y finalizar compra.
--------------------------------------------------------------------------------------------  