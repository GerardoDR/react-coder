# Documentación del proyecto

## Descripción

* La temática de este software es "tienda de artículos de limpieza". Continene algunos productos básicos para dar pleno uso y demostrar todas las funcionalidades de la app.

* Para este e-commerce, realizado como entrega final para el curso de ReactJS de CoderHouse utilicé:
    * CreateReactApp para su compilación,
    * react-sass para el pre-proceso de estilos,
    * react-toastify para los pop ups/notificaciones,
    * Firebase Firestore para alojar la data de los productos.
    * Firebase Auth para la autenticación con google.
---

## Demostración

![Demonstration web](/public/assets/demo/ELOLIMPIO.gif)



## Estructura de los componentes

react-coder                            
├─ public                              
│  ├─ assets                                      
│  │  └─ ...                  
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
│  │  │  ├─ Nav.js                     
│  │  │  └─ SignIn.js                  
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
│  │  ├─ _main.scss                    
│  │  └─ _modal.scss                   
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

#### `$ cd [ruta del proyecto]`

### 3. Dentro del directorio del proyecto, instalar las dependencias de nodeJs correspondientes:

#### `$ npm i`

### 4. Dentro del mismo directorio y finalizada la instalación de dependencias, iniciar CreateReactApp con el siguiente comando:

#### `$ npm start`

Este comando inicia la app en el modo desarrollo.  
Abrir [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

La página se va a recargar automáticamente si se edita el código.  



## Implementaciones pendientes

* Sumar más métodos de autenticación.
* Mejorar estilos y animaciónes (spinner, transitions)
* Sweet alert o algún otro mecanismo para permitir que el usuario guarde su código de seguimiento (este queda guardado en session storage)
* Introducir cambios de precio y porcentajes de descuento de acuerdo a categorías y a cada producto en particular.
* Proveer la opción de mantener la sesión del usuario iniciada de manera persistente.
* Control de stock.
* Consumo de API de pagos.
* Build
    * `$ npm run build` : generar el código final y subirlo a un web server.
---