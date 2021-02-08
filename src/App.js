import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
const App = () => {
  //To toggle the form to show and hide
  const [showAddTask, setShowAddTask] = useState(false);
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

  //Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    console.log(id);
  };

  //Delete a Task:
  const deleteTask = (id) => {
    // We dont want to show the task deleted i.e setting the task to filtered task
    setTasks(tasks.filter((task) => task.id !== id));
    // console.log("deleted", id);
  };
  //Toggle Reminder Function:
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  // console.log("toggle", id);

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} />
      {
        //ShowAddtask is True then show the formelse hide it
        showAddTask && <AddTask onAdd={addTask} />
      }
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
};

export default App;
