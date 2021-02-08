import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
const App = () => {
  //Setting default value of functions as an array of tasks
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", day: "Feb 7 at 5:00pm", reminder: true },
    { id: 2, text: "Learn Rest API", day: "Feb 8 at 5:00pm", reminder: false },
    {
      id: 3,
      text: "Personal Development Session",
      day: "Feb 8 at 7:00pm",
      reminder: true,
    },
  ]);
  //Delete a Task:
  const deleteTask = (id) => {
    // We dont want to show the task deleted i.e setting the task to filtered task
    setTasks(tasks.filter((task) => task.id !== id));
    // console.log("deleted", id);
  };

  //Toggle Reminder Function:
  const toggleReminder = (id) => {
    console.log("toggle", id);
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
};

export default App;
