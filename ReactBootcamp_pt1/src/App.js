import './App.css';

//equivale a lo mismo, es un oneLine component
//const Title = ({course}) => <h1>{course}</h1> 
const Title = ({ course }) => {
  return <h1>{course}</h1>
}
//este component es reutilizable
const Parrapho = ({ prop, props }) => <p>{prop} {props}</p>
/* const Parrapho = ({ prop, props }) => {
  return <p>
    {prop} {props}
  </p>
} */


/**
 * 
 * @param {ex1, ex2, ex3}  
 * @returns sum of values
 */
const Total = ({ ex1, ex2, ex3 }) => {
  return <p>
    Number of exercises: {ex1 + ex2 + ex3}
  </p>
}

const App = () => {
  /**
   * Values for props
   */
  const course = 'Half stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;



  return (
    <>
      <Title course={course} />
      <Parrapho prop={part1} props={exercises1} />
      <Parrapho prop={part2} props={exercises2} />
      <Parrapho prop={part3} props={exercises3} />
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </>
  );
}

export default App;
