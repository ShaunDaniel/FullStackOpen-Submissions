const App = () => {

  const course = {
    name: 'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = (props) =>{

    return(
      <>
      <h1>{props.course_prop.name}</h1>
      <hr/>
      </>
    )
  }
  
  const Part = (props) =>{
    return(
      <li>{props.part.name} - [<strong>{props.part.exercises}</strong> exercises]</li>
    )
  }
  
  const Content = (props) => {
    return(
      <ol>
      <Part part={props.course_prop.parts[0]}/>
      <Part part={props.course_prop.parts[1]}/>
      <Part part={props.course_prop.parts[2]}/>
      </ol>
    )
  }

  const Total = (props) => {
    return(
      <p>Total number of exercises: {props.course_prop.parts[0].exercises+props.course_prop.parts[1].exercises+props.course_prop.parts[2].exercises}</p>
    )
  }
  return (
    <div>
      <Header course_prop={course}/>
      <Content course_prop={course}/>
      <Total course_prop={course}/>
    </div>
  )
}

export default App