import '../style/Boton.css'


function BotonIgual(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };
  return (
    <div
      className={`color-boton ${
        esOperador(props.children) ? "operador" : ""
      }`.trim()}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </div>
  );
}
export default BotonIgual;
