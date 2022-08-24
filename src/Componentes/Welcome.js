import foto from '../assets/foto.jpg';


export default function Welcome(props){
 
    return(
        <>
         <h1>Presentacion Personal</h1>
         <p>Hola me llamo {props.name}</p>
         <img src={foto} className= "App-logo" alt='foto generica'/>
         <p>Soy estudiante activo de la carrera: {props.carrera}</p>
         <p>Mi mayor fuerte de la carrera son {props.skill}</p>
        </>     
    )
  }