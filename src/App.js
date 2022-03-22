import React, { useState } from "react";
import Counter from "./components/Counter/Counter";
import FormList from "./components/FormList/FormList";
import Reciepts from "./components/Reciepts/Reciepts";
import Form from "./components/Form/Form";

const App = () => {
  const [task, setTask] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  function handleTask(newObj) {
    let newTodos = [...task];
    newTodos.push(newObj);
    setTask(newTodos);
  }
  return (
    <div>
      <Counter />
      <Reciepts />

      {isLogin ? (
        <FormList setIsLogin={setIsLogin} task={task} />
      ) : (
        <Form setIsLogin={setIsLogin} handleTask={handleTask} />
      )}
    </div>
  );
};

export default App;
