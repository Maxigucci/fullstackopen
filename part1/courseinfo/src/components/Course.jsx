const Header = ({course}) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Content = ({parts}) => {
  return parts.map((part, i) => <Part key={i} name={part.name} exercises={part.exercises} />)
}

const Total = ({parts}) => {
  return (
    <p><strong>Total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</strong></p>
  )
}

const Part = ({name, exercises}) => {
  return (
    <p> {name} {exercises}</p>
  )
}

const Course = ({course}) => {
  return (
    <>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
  )
}

export default Course