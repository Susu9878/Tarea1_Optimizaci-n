# Tarea1 - Optimización de virtualización en react

Santiago Alonzo Aguilar A01639373  
Hannia Escamilla Pérez A01639113  
Patricio Flores Reynoso A01645013  
Cared Nicolle Castaños Manjarrez A01742620

### Cared Nicolle Castaños

### Santiago Alonzo 

### Hannia Escamilla
Yo me encargue de hacer el boton de likes y el contador de estos de la lista dinamica. Lo que hice fue crear una funcion llamada "Like" en la que implemente el boton con su contador, use el onClick para manejar el contador de likes. Luego llame a esa funcion dentro de la lista dinamica para que apareciera en cada elemento.

### Patricio Flores


## Virtual DOM
El Virtual DOM es una representación en memoria. La manera en que funciona es que cuando el estado de la aplicación cambia, el virtual DOM hace un nuevo árbol. De ahí, este árbol se compara con la versión pasada, y sólo los nodos cambiados son actualizados.  
  
Este método es más utilizado hoy en día en lugar del real DOM es que las aplicaciones se re-renderizan más rápido, proveen una mejor experiencia de usuario, y utilizan la memoria de manera más eficiente.

## Relación con React.memo y map()
React.memo te permite que te saltes el renderizado de un componente cuando los props no han cambiado en vez usando el valor guardado en el cache. Similarmente al Virtual DOM, ambos solo actualizan valores que hayan sido cambiados, react.memo() ayuda a mejorar el rendimiento de la re-renderizacion del codigo.

Luego esta la funcion de map(), esta se utiliza para ejecutar una funcion dada en cada elemento de un arreglo, lo cual crea un nuevo arreglo con el resultado de la funcion. Se utiliza cuando es necesario renderizar multiples elementos o componentes, convierte data en nuevos arrays, conservando los valores originales guardados, similarmente como funciona el VDOM.
