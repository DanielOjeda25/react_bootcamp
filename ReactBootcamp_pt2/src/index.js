import ReactDOM from "react-dom";
import { useState } from "react";

const rootElement = document.getElementById("root");

//esta funcion retornara el numero
const Counter = ({ number }) => <h1>{number}</h1>;

//este componenten retornara un mensaje si aun no se han aplicado cambios
const WarningNotUsed = () => {
  return <h1> Todavia no se ha usado el contador</h1>;
};

//y aqui se mostraran los clicks dependiendo del boton
const ListOfClicks = ({ clicks }) => {
  return <p>{clicks.join(", ")}</p>;
};

//esta constante guardara el estado inicial del componente
/*const INITIAL_COUNTER_STATE = {
  left: 0,
  right: 0,
  mensaje: "Mensaje en el estado"
};*/

const App = (props) => {
  // el primer parametro es el numero el que inicia
  // el segundo es el numero al que ira
  const [contador, updateContador] = useState(0);

  //creamos 2 contadores con 2 estados
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  //creamos el estado de un click
  const [clicks, setClick] = useState([]);

  //pero podemos tener mas de un estado en un objeto con desustructuracion
  //ahora, le pasamos el valor o estado inicial de una constante externa
  //const [counters, setCounter] = useState(INITIAL_COUNTER_STATE);

  //este metodo controlaria el boton left
  const handleClickLeft = () => {
    /*setCounter({
      ...counters,
      left: counters.left + 1
    });
*/
    setClick((prevClick) => [...prevClick, "L"]);
  };

  const handleClickRight = () => {
    /*setCounter({
      ...counters,
      right: counters.right + 1
    });*/
    setClick((prevClick) => [...prevClick, "R"]);
  };
  //esta funcion controlara el incremento del click
  const handleClick = () => {
    updateContador(contador + 1);
  };

  const handleClickReset = () => {
    updateContador(0);
  };

  //Esta funcion hara que vuelva al estado inicial, que esta en la constante
  const HandleReset = () => {
    //setCounter(INITIAL_COUNTER_STATE);
    setClick([]);
  };
  //reenderizado condicional
  const isEven = contador % 2 === 0;
  const messageEven = isEven ? "is Even" : "is Odd";

  //podemos optimizar contando la cantidad de click asi
  //este  metodo lo que haria seria filtrarnos todos los clicks que devuelvan 'L
  const leftButton = clicks.filter((click) => click === "L");
  const rightButton = clicks.filter((click) => click === "R");

  return (
    <>
      <p>El valor del contador es: </p>
      <Counter number={contador} />
      <p>{messageEven}</p>
      <button onClick={handleClick}>Incrementar</button>
      <button onClick={handleClickReset}>Resetear</button>
      <br />
      <div>
        {/*aqui se le pasaria las constantes */}
        {leftButton.length}
        <button onClick={handleClickLeft}>left</button>
        <button onClick={handleClickRight}>right</button>
        {/*aqui se le pasaria las constantes */}
        {rightButton.length}
        <p>
          <button onClick={HandleReset}>reset</button>
        </p>
        <p>Cantidad de click: {clicks.length}</p>
        {/*Aqui aplicamos un reenderizado condicional */}
        {clicks.length === 0 ? (
          <WarningNotUsed />
        ) : (
          <ListOfClicks clicks={clicks} />
        )}
      </div>
    </>
  );
};

ReactDOM.render(<App />, rootElement);
