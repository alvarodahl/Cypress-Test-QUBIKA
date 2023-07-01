# Cypress-Test-QUBIKA
Cypress Test for QUBIKA

Ejercicio:
Utilizando el framework Cypress automatizar la siguiente prueba dentro de la página de Google.
● Ingresar a la web de Google
● Validar que se abre el sitio web correctamente, validando:
○ Título
○ Menú superior
○ Barra de búsqueda
● Escribir en el buscador la palabra ‘teting’ y realizar la búsqueda haciendo ‘Enter’
● Validar que se redirecciona a la página de resultado de búsqueda y se sugiere la palabra
escrita correctamente ‘testing’
● Hacer click en la sugerencia de búsqueda de ‘Testing’
● Validar que se realiza la búsqueda correctamente, validando:
○ Url
○ Que en el buscador aparezca la palabra ‘Testing’
○ El título del primer resultado de búsqueda contiene la palabra ‘Testing’
● Hacer click en el filtro de ‘Imagen’
● Validar que se aplicó la búsqueda de imágenes y la tag ‘Imagen’ quedó seleccionada

A su vez en el proyecto, se deberá agregar un archivo README explicando la solución,
detallando mejoras (en el caso de encontrarlas) y explicando los pasos para la ejecución de los
tests.

-- COMENTARIOS DEL DESARROLLADOR --
Hemos cumplido con los requisitos dados, y dicha solución se explicará a continuación:
Utilizando el Framework Cypress, hemos divido en 3 stages la casuística => Navegacion y validacion de URL, Verificacion de elementos de navegación requeridos y Búsqueda
En estos stages, especificamos el step by step a fin de agilizar la comprensión de los mismos. Cada stage tiene su it respectivo, en el cual adjuntamos dichos steps. 
Mediante assertions validamos que en efecto la información solicitada sea correcta. 
NO se han agregado capturas, una opción de mejora viable, como también videocapturas o cualquier método de screen evidence. 

-- DATOS DE EJECUCION -- 
Para la misma, una vez descargado este repositorio, podremos elegir entre dos alternativas.
Si se deseara tener visibilidad del UI durante la ejecución de los casos, debemos ejecutar el siguiente comando: **npm run cypress:open**
En cambio, si NO es preferente dicha visibilidad, basta con ejecutar el comando: **npx cypress run** , el cual ejecutará los tests en background. 
Téngase en cuenta que esto es exclusivo de este caso, ya que dicho último comando corre TODOS los specs que tengamos dentro de nuestro framework, por lo que, en otros escenarios, 
podríamos estar ejecutando varias otras casuísticas que no son de nuestro interés.
