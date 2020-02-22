import { createStore } from "redux" //para crear mi almacen de datos
//almacenada la data de la app y este este lo proveemos en nuestro app.js, así los componentes dentro del provider pueden leer
//lo del store
const initialState = {
    jugadores: [{
            id: 1,
            nombre: "Rubén Cuevas",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPh0tEpWtEY68WaIlENgkIAgWsEIonf_VXf01x1t4uXAcSqvy1"
        },
        {
            id: 2,
            nombre: "César Avilés",
            foto: "https://assets.metrolatam.com/hub/2016/06/14/pulse-orlando-masacre-omar-mateen-selfie-900x600.jpg"
        },
        {
            id: 3,
            nombre: "Maribel Díaz",
            foto: "https://i.ytimg.com/vi/G0-bMmtWqPU/maxresdefault.jpg"
        },
        {
            id: 4,
            nombre: "Felipe Ramirez",
            foto: "https://media.licdn.com/dms/image/C4E03AQGUl5U-zW8YoA/profile-displayphoto-shrink_200_200/0?e=1583971200&v=beta&t=60OpJJ3uVnlWP1oLl9s-Il_AaclMkaOWwCOXiNwP7sE"
        },
        {
            id: 5,
            nombre: "Miguel Chamorro",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS233ylft2UJ8cdTL0DxLScSvNM_jiiJOQZCb0T4KlK5vVofW73"
        },
        {
            id: 6,
            nombre: "Alexis López",
            foto: "https://static.viget.com/_960x718_crop_center-center_90_none/DYLAN-00894.jpg?mtime=20181211141117"
        },
        {
            id: 7,
            nombre: "Harold Gutierrez",
            foto: "https://images.assetsdelivery.com/compings_v2/fxquadro/fxquadro1702/fxquadro170200160.jpg"
        },
        {
            id: 8,
            nombre: "Manuel Rodriguez",
            foto: "https://drupal.ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/2018-08/manu-foto.jpg?itok=4HvdRLS7ceived_1693673130717610.jpeg?itok=ey6dQlly"
        },
        {
            id: 9,
            nombre: "Alejandro Rodríguez",
            foto: "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/1/6/a/3/16a3209890fd230b52a0cec58c5afbdd.jpg"
        },
        {
            id: 10,
            nombre: "Andrés Barnechea",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8XVsK9Ikt8tNAUtTzKlyEgsnrd0-I0E5e8ez6Z4DDIhri08Q-"
        },
        {
            id: 11,
            nombre: "Ricardo Varela",
            foto: "https://media.istockphoto.com/photos/portrait-of-a-handsome-oldfashioned-hipster-in-a-blue-shirt-and-picture-id1018779400?k=6&m=1018779400&s=170667a&w=0&h=VF9gAuOpo2jxtjU7p49I7fq-_H3jMMImXiQpI-nd3xw="
        },
        {
            id: 12,
            nombre: "Diego Rivera",
            foto: "https://cdn.shopify.com/s/files/1/1627/0171/products/2_icons_745eaa4c-3331-45d4-8d5e-f8d9767b916d_large.jpg?v=1577717376"
        }
    ],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => { //funcion reductora, encargada de manejar los cambios de mi app, recibe el estado actual y el action que cambio debemos manejar en el estado

    if (action.type === "AGREGAR_TITULAR") {
        return {
            ...state, //me retorna todo lo que tiene el state
            titulares: state.titulares.concat(action.jugador), //leo el valor actual de titulares + el jugador agregado
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id) //el estado de jugadores, lo filtro para que mis jugadores al recorrerlo solo tome jugadores con id diferente
        }
    }

    if (action.type === "AGREGAR_SUPLENTE") {
        return {
            ...state, //el estado actual
            suplentes: state.suplentes.concat(action.jugador), //a los suplentes le concateno el jugador
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id) //filtrar solo los diferentes
        }
    }

    if (action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id), //filtro los titulares
            jugadores: state.jugadores.concat(action.jugador) //concateno el jugador
        }
    }

    if (action.type === "QUITAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador) //concateno los jugadores
        }
    }

    return state
}

export default createStore(reducerEntrenador)