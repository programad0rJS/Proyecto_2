const Peliculas = [{
        Nombre: 'Lucifer',
        Img: 'https://image.tmdb.org/t/p/w300/vkGnVBSNpayJ1oCfyVaMvhrim95.jpg',
        Botton: '../Paginas/Articles.html'
    },
    {
        Nombre: 'Dragon ball Z: La resurreccion de freezer ',
        Img: 'https://img.repelis.id/cover/dragon-ball-z-la-resurreccion-de-freezer.jpg',
        Botton: '../Paginas/Article.html'
    },
    {
        Nombre: 'Dragon Ball Super: Broly',
        Img: 'https://img.repelis.id/cover/dragon-ball-super-broly.jpg',
        Botton: '../Paginas/AppDeInformacion.html'
    },
    {
        Nombre: 'Super Dragon Ball Heroes',
        Img: 'https://img.repelis.id/cover/super-dragon-ball-heroes.jpg',
        Botton: '../Paginas/Artilulos.html'
    },
    {
        Nombre: 'Dragon Ball Super ',
        Img: 'https://img.repelis.id/cover/dragon-ball-super.png',
        Botton: '../Paginas/AppDeInformacion.html'
    },
    {
        Nombre: 'Venom 2: Habrá Matanza',
        Img: 'https://img.repelis.id/cover/venom-let-there-be-carnage-2-1633400762.jpg',
        Botton: '../Paginas/Informaciones.html'

    },
    {
        Nombre: 'Venom',
        Img: 'https://img.repelis.id/cover/venom.jpg',
        Botton: '../Paginas/Info.html',
    },
    {
        Nombre: 'Verdad o Reto ',
        Img: 'https://img.repelis.id/cover/verdad-o-reto.jpg',
        Botton: '../Paginas/App_De_Info.html'
    },
    {
        Nombre: 'Dragonball Evolución',
        Img: 'https://img.repelis.id/cover/dragonball-evolucion.jpg',
        Botton: '../Paginas/AppDeInformacion.html'
    },

    {
        Nombre: 'Sabrina',
        Img: 'https://img.repelis.id/cover/sabrina.jpg',
        Botton: '../Paginas/Apps_De_Info.html'
    },
    {
        Nombre: 'El Mundo Oculto de Sabrina  ',
        Img: 'https://img.repelis.id/cover/el-mundo-oculto-de-sabrina.jpg',
        Botton: '../Paginas/AppDeInformacion.html'
    },
    {
        Nombre: 'Sabrina, La Bruja Adolescente ',
        Img: 'https://img.repelis.id/cover/sabrina-la-bruja-adolescente.jpg',
        Botton: '../Paginas/AppDeInformacion.html'
    },
    {
        Nombre: 'Shang-Chi  ',
        Img: 'https://img.repelis.id/cover/shang-chi-and-the-legend-of-the-ten-rings-2-1630734122.jpg',
        Botton: '../Paginas/AppDeInformaciones.html'

    },
    {
        Nombre: 'Los 100',
        Img: 'https://img.repelis.id/cover/los-100.jpg',
        Botton: '../Paginas/AppDeInformacion.html'
    },
    {
        Nombre: 'El inglés que cogió la maleta ',
        Img: 'https://img.repelis.id/cover/the-last-bus-2-1633998605.jpg',
        Botton: '../Paginas/ArticulosDePeliculas.html'
    },
    {
        Nombre: 'Some of Our Stallions',
        Img: 'https://img.repelis.id/cover/some-of-our-stallions-2-1633998486.jpg',
        Botton: '../Paginas/ArticlesDePelicula.html'

    },
    {
        Nombre: 'Una Momia en Halloween',
        Img: 'https://img.repelis.id/cover/under-wraps-2-1633998604.jpg',
        Botton: '../Paginas/AppDeInformacion.html'

    },
    {
        Nombre: 'Battered',
        Img: 'https://img.repelis.id/cover/battered-2-1633998365.jpg',
        Botton: '../Paginas/AppDePeliculas.html'

    },
    {
        Nombre: 'LOL Surprise: The Movie',
        Img: 'https://img.repelis.id/cover/lol-surprise-the-movie-2-1634194202.jpg',
        Botton: '../Paginas/AppDePelicula-Part_2.html'
    },

    {
        Nombre: 'Cuñados',
        Img: 'https://img.repelis.id/cover/cunados-2-1634194204.jpg',
        Botton: '../Paginas/AppDePeliculas_Part-3.html'
    },

    {
        Nombre: 'Deadly Dorm',
        Img: 'https://img.repelis.id/cover/deadly-dorm-2-1634194203.jpg',
        Botton: '../Paginas/AppDePeliculas-Part_4.html'
    },
    {
        Nombre: 'Last Man Down ',
        Img: 'https://img.repelis.id/cover/last-man-down-2-1633998490.jpg',
        Botton: '../Paginas/AppDePeliculas-Part_5.html'
    },
    {
        Nombre: 'First Date',
        Img: 'https://img.repelis.id/cover/first-date-2-1633998363.jpg',
        Botton: '../Paginas/AppDeInformacion.html'
    },

    {
        Nombre: 'Hiacynt',
        Img: 'https://img.repelis.id/cover/hiacynt-2-1634194087.jpg',
        Botton: '../Paginas/AppDeInformacion.html'

    }   
];



const Formulario = document.querySelector('#Formulario');




const Resultado = document.querySelector('#Resultado');



const Filtrar = () => {


    Resultado.innerHTML = '';

    const Texto = Formulario.value.toLowerCase();
    for (let Pelicula of Peliculas) {
        let Nombre = Pelicula.Nombre.toLowerCase();

        if (Nombre.indexOf(Texto) !== -1) {
            Resultado.innerHTML += `                                   
           <div class='Concurso'>
                <p class="Parrafos">                 
                <img class='Imageness' src=${Pelicula.Img} alt="Peliculas">  
                <br>
                <br> 
                   
                    ${Pelicula.Nombre} 
                <br>
                <br>   
                
                    <a href=${Pelicula.Botton}>                 
                    <button class="Boton">Ver Informacion </button> 
                    <br>
                    <br>  
                    <br>
                     
                </a>
                </p>
           </div>
        `
        };
    };
    if (Resultado.innerHTML === '') {
        Resultado.innerHTML += `
        <h3 class="Series">Pelicula No Encontrado</h3>
        `
    };
};
Formulario.addEventListener('click', Filtrar);
Formulario.addEventListener('keyup', Filtrar);
Filtrar();

