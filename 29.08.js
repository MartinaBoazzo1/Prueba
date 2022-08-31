// git init -> crea el repositorio local
// git config user.name (nombre de usuario en github) -> le asignamos nuestro usuario de git
// git config user.email (usuario de github) -> le asignamos nuestro email de github
// Para que se configure directamente en cualquier archivo que genero en mi compu:
// git --global user.name
// git --global user.email

// Para asociarlo a un repositorio en github debemos primero crear el repositorio en github y tomar el link que nos arroja el mimo
// En la termina se ingresa el comando git remote add origin (url) -> Esto no arroja nada por terminal
// Para ver si se hizo bien, debemo usar git remote- v -> origin  https://github.com/MartinaBoazzo1/Prueba.git (fetch)
origin  https://github.com/MartinaBoazzo1/Prueba.git (push)

// Agregar archivos al repositorio: 
// git add (nombre del archivo)
// git add. -> Agrega todos los archivos disponibles en el repositorio
// git status -> Informa estado de los archivos, si hacemos una modificacion en algun archivo siempre hay que volver a agregarlo en el repositorio

//Luego de hacer modificaciones en tu archivo podes guardarlos como una copia -> git comit -m ("detalle de lo que haces")
// git log muestra los el ultimo cambio realizado con su fecha y persona
// siempre que se hacen modificaciones hay que volver a agregar al repositorio el archivo y hacer un nuevo commit


// Subir archivos a github: siempre hay que tener todo commiteado -> git push origin master -> te pide usuario y contraseña de Github
