***Trabajo Final***

*Este trabajo comenzará en clase porque será un resumen de todo el curso, y si no se culmina en clase, deberán presentarlo con posterioridad.*

(-) Mientras en clase lo vayan haciendo yo iré repasando los temas según el avance del código y que tanto recuerden el tema.

(-) El trabajo consiste en crear una pagina para ver todos los perros que existen a partir de la API de dogApi, utilizando todos los recursos vistos en clase.

**API DEL PERRO:** *https://thedogapi.com/*

[-] https://api.thedogapi.com/v1/breeds (trae todos los perros)

[-] https://api.thedogapi.com/v1/breeds/search?q={raza_perro} los filtra por razas, ejemplo https://api.thedogapi.com/v1/breeds/search?q=Affenpinscher

[-] para las imagenes: https://cdn2.thedogapi.com/images/{reference_image_id}.jpg ejemplo: https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg

(-) Temas a abordar:

[-]Renderización de componentes

[-]Renderizado condicional

[-]Estados

[-]UseEffect

[-]Formularios

[-]Enrutamiento

[-]Context


(-) Estilos: usar una de las formas vistas en clase pero ser coherente en todo el código, en la forma de poner estilos, los framework utilizados (si usan) y el lugar del código donde lo van a colocar.

(-) Deberá tener los siguientes componentes, colocados en las carpetas que sean convenientes. (pueden cambiarle el nombre, según estimen conveniente)

[-] App.jsx 

[-] Navbar.jsx Deberá contar con los link para ir a Home (puede ser un logo), formulario, a Perros y a favoritos. Si la persona se registra, deja de decir formulario y pasa a decir su nombre

[-] Home.jsx un cartel que dice inicia sesión y el botón para iniciar sesión(Formulario), cuando esta esté iniciada, que diga, bienvenido y el nombre de la persona.
Debajo de eso, deberán mostrarse 5 card de Perros.

[-] Footer.jsx datos de ustedes, Linkedin, etc.

[-] NotFound.jsx, un 404 acorde a la página y estilos elegidos.

[-] Detalles.jsx Cuando uno haga clic en una Card, ya sea desde Perros, o desde los 5 renderizados en Home, me debe llevar a este componente con los datos de este perro, lo mismos que la card más el temperamento. Mas un boton que diga favorito y uno que diga volver

[-] Formulario.jsx que tenga un input con el nombre que se guarde en contexto, para que pueda ser utilizado en toda la pagina, y ademas que tenga un boton que al hacer click se guarde en contexto el nombre y redireccione a la persona a Home. El input debe estar validado.

[-] Perros.jsx a partir de cualquiera de las opciones que le da la api, que en una página muestra 20 perros renderizando una card con un método de array, para que de un componente Card se muestran los demás

[-] Favoritos.jsx los perros deben tener un corazón, preferentemente azul o rojo, que al hacer click se guarde por contexto la tarjeta y que al ir a favoritos solo se vean renderizados esas tarjetas.

[-] Card.jsx que tendrá, raza del perro, foto, corazón para favorito, origen y vida útil

(-)Si deciden deployar mucho mejor.


*Clase 1:*

[-] Armar el esqueleto y crear los componentes.

[-] Decidir qué forma de estilos harán.

[-] Crear todas las rutas.

[-] Crear la Card, el componente Perro.

[-] Crear el Home la Navbar.

[-] Estilos basicos


*Clase 2:*

[-] Crear el formulario junto con context

[-] Crear el componente detalle y que funcione

[-] Crear favoritos

[-] Crear el footer

[-] Crear NotFound

[-] Deployar

[-] El resto de lo necesario para que todo funcione y mejorar estilos.
