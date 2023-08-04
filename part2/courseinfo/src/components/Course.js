const Course = (props) => {
  
  const Header = ({ title }) => {
    return <h1>{title}</h1>;
  };

  const Part = ({ part }) => {
    return (
      <li>
        {part.name} : {part.exercises}
      </li>
    );
  };

  const Content = ({ parts }) => {
    return (
      <>
        <ul>
          {parts.map((part) => (
            <Part part={part} />
          ))}
        </ul>
      </>
    );
  };

  const Total = ({ parts }) => {
    const totalExercises = parts.reduce(
      (total, part) => total + part.exercises,
      0
    );
    return <p>Total Exercises : {totalExercises}</p>;
  };

  return (
    <>
      <Header title={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </>
  );
};

export default Course