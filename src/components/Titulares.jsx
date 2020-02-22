import React from "react"
import { connect } from "react-redux";
import cancha from "../cancha.svg"

const Titulares = ({titulares, quitarTitular}) => ( //recibo la funcion manejada en el dispatch
    <section>
        <h2>Titulares</h2>
        <div className="cancha">
            {
                titulares.map(j => (
                    <article className="titular" key={j.id}>
                        <div>
                            <img src={j.foto} alt={j.nombre}/>
                            <button onClick={() => quitarTitular(j)}>X</button> 
                        </div>
                        <p>{j.nombre}</p>
                    </article>
                ))
            }
            <img src={cancha} alt="Cancha de futbol" /> 
        </div>
    </section>
)

const mapStateToProps = state => ({
    titulares: state.titulares
})

const mapDispatchToProps = dispatch => ({
    quitarTitular(jugador) {
        dispatch({
            type: "QUITAR_TITULAR", //identificador
            jugador //el jugador a quitar
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares) //me conecto al store