const Course = ({ courses }) => (
  <>
    <h2>Web development curriculum</h2>
    {courses.map((course) => (
      <CourseInfo key={course.id} course={course} />
    ))}
  </>
);

const CourseInfo = ({ course }) => (
  <>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>
);

const Header = ({ course }) => <h3>{course}</h3>;

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
