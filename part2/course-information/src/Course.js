/* eslint-disable */
const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};
/* eslint-enable */
// eslint-disable-next-line
const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </>
);

const Total = ({ parts }) => {
  const sumOfExercises = parts.reduce((acc, curr) => acc + curr.exercises, 0);
  return (
    <p style={{ fontWeight: 'bold' }}>total of {sumOfExercises} exercises</p>
  );
};

export default Course;
