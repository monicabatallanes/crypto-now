# crypto-now
proyecto-rolling-covalent
Nombre del proyecto: “Crypto now”

Es un sitio web que te permite ver la cotización actual de los distintos tokens, pudiendo agregar tokens específicos según la necesidad del usuario, y poder realizar la conversión entre los valores de dos tokens seleccionados.

Objetivos:
Usar la api de “Covalent” para obtener la cotización actual de los tokens requeridos.
Poner en práctica los conocimientos adquiridos en la academia “Rolling Code”.

Descripción del proyecto.
Decidimos utilizar las siguientes tecnologías: HTML, CSS, JAVASCRIPT,Y BOOTSTRAP, para equiparar los conocimientos de los miembros del equipo (estudiante iniciado, estudiante avanzado, y egresado).
También usamos la api de “Covalent” : para traer los valores actuales de los distintos tokens
Endpoint: “Get spot prices”
Endpoint: “Get/v1/pricing/tickers/” : https://api.covalenthq.com/v1/pricing/tickers/?quote-currency=${moneda}&format=JSON&tickers=${simbolo}&key=ckey_21be25f5c33d41c58c22cf020ab
El parámetro: moneda, dólar, peso, euro, se indica en “quote-currency”;
Y al parámetro: tickers indica el símbolo del token, o la lista de los tokens separada por comas
El parámetro: key es la clave de la api  que obtuvimos como desarrolladores, al registrarnos para poder tener acceso a la información requerida.

Manual del usuario, como usar la app.
En el home, el usuario encuentra en una pizarra de cotización en dólares de los tokens que consideramos más relevantes.
En la pizarra tiene la posibilidad de agregar diferentes tokens y ver su cotización en dólares, pesos, o euros.
 
Además puede usar un conversor de tokens para conocer la equivalencia entre dos tokens seleccionados.

 

Link de la página web :  https://crypto-now-rolling-covalent.netlify.app/ 
Equipo integrado por: Marcelo Boscarino, Ricardo Gauna , Mónica Batallanes.
