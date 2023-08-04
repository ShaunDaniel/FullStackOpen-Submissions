const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  const Header = ({ title }) => {
    return <h1>{title}</h1>;
  };

  const Part = ({part}) => {
    return (
      <li>{part.name} : {part.exercises}</li>
    )
  }

  const Content = ({ parts }) => {
    return (
      <>
        <ul>
          {parts.map((part)=><Part part={part}/>)}
        </ul>
      </>
    );
  }

  const Course = (props) => {
    return (
      <>
        <Header title={props.course.name} />
        <Content parts={props.course.parts} />
      </>
    );
  };

  return <Course course={course} />;
};

export default App;
