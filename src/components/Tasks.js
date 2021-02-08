const tasks = [
  { id: 1, text: "Learn React", day: "Feb 7 at 5:00pm", reminder: true },
  { id: 2, text: "Learn Rest API", day: "Feb 8 at 5:00pm", reminder: false },
  {
    id: 3,
    text: "Personal Development Session",
    day: "Feb 8 at 7:00pm",
    reminder: true,
  },
];
const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
