import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

function TodoForm({ tasklist, settaskList }) {
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    let xx = JSON.parse(localStorage.getItem("TaskList"));
    console.log("getting tasklist from localStorage", xx);
    xx ? settaskList(xx) : "";
  }, []);

  function checkElementPresentInobject(tasklist, tsk, task) {
    for (let i = 0; i < tasklist.length; i++) {
      if (tasklist[i][tsk] === task) {
        return true;
      }
    }
    return false;
  }

  async function submitHandler(data) {
    if(data.Task == ""){
        return;
    }
    let dataInO = { ...data, isCompleted: false, id: nanoid() };
    console.log(
      "function value printing",
      checkElementPresentInobject(tasklist, "Task", dataInO)
    );
    if (checkElementPresentInobject(tasklist, "Task", dataInO.Task)) {
      reset();
      return;
    }
    console.log("hey broo I am haapy that i am runnung");
    await settaskList([...tasklist, dataInO]);

    console.log("TASKLIST IS PRINTING ON FORM JSX", tasklist);
    reset();
  }

  return (
    <>
      <div className="flex justify-center mb-3">
        <form className="flex gap-2" onSubmit={handleSubmit(submitHandler)}>
          <input
            className="border-b-2 placeholder:px-1 placeholder:font-semibold placeholder:text-sm"
            placeholder="Add new task"
            type="text"
            {...register("Task")}
          />
          <button
            className="bg-zinc-800 px-3 py-1 rounded-md text-sm text-white"
            type="submit"
          >
            Add Task
          </button>
        </form>
      </div>
    </>
  );
}

export default TodoForm;
