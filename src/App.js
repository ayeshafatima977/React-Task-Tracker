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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
