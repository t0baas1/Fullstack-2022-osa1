
const App = () => {
  const course = {
    name: 'Half Stack application developmnet',
    parts: [
    {
      name: 'Fundamentals of React',
      excercises: 10
    },
    {
      name: 'Using props to pass data',
      excercises: 7
    },
    {
      name: 'State of a component',
      excercises: 14
    }
  ]
  }
  

  const Header = (props) => {
    return(
      <h1>{props.course}</h1>
    )
  }

  const Content = (props) => {
    return(
      <div>
        <Part name={props.part1.name} excercises={props.part1.excercises} />
        <Part name={props.part2.name} excercises={props.part2.excercises} />
        <Part name={props.part3.name} excercises={props.part3.excercises} />
      </div>
    )
  }

  const Part = (props) => {
    return(
      <div>
        <p>{props.name} {props.excercises}</p>
      </div>
    )
  }

  const Total = (props) => {
    return(
      <div>
        <p>Number of exercises {props.total}</p>
      </div>
    )
  }


  return (
    <div>
      <Header course={course.name} />
      <Content part1={course.parts[0]} part2={course.parts[1]} part3={course.parts[2]} />
      <Total total={course.parts[0].excercises + course.parts[1].excercises + course.parts[2].excercises}/>
    </div>
  )
} 

export default App;
