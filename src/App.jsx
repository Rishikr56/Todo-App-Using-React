import React, { use, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import TodoForm from "./components/TodoForm";

function App() {
  const [tasklist, settaskList] = useState([]);
  console.log("from App", tasklist);
  useEffect(() => {
    if (tasklist.length > 0) {
      localStorage.setItem("TaskList", JSON.stringify(tasklist));
    }
  }, [tasklist]);

  function handleRemove(ID) {
    let updatedTasklist = tasklist.filter((ele) => ele.id != ID);
    settaskList(updatedTasklist);
  }

  function handleCompleted(ID) {
    let tempAraay = [...tasklist];
    let index;
    let dd;
    for (let i = 0; i < tasklist.length; i++) {
      if (tasklist[i].id == ID) {
        index = i;
        dd = { ...tasklist[i], isCompleted: !tasklist[i].isCompleted };
        console.log(dd);
      }
    }
    tempAraay[index] = dd;
    settaskList(tempAraay);
  }

  return (
    <div className="gap-3 mx-10">
      <div className="font-bold text-zinc-700 text-center text-2xl mb-5 rounded ">
        <span className="border-b border-gray-300 shadow px-3 py-1">Your To Do</span>
      </div>    
      <div>
        <TodoForm tasklist={tasklist} settaskList={settaskList} />
      </div>
      <ul className="flex gap-2 flex-col mt-7">
        {tasklist.map((ele, index) => {
          {
            console.log(tasklist.length);
          }
          {
            console.log(tasklist);
          }
          return (
            <div className="flex justify-center">
              <div className=" bg-white border-2  border-zinc-800 px-3 py-1 rounded-md flex justify-between w-100 ">
                <li
                  className={`${
                    ele.isCompleted ? "line" : ""
                  } flex items-center gap-3 text-[#333333]`}
                >
                  {ele.Task}
                </li>
                <div className="flex items-center gap-3">
                  <button
                    className={`${
                      ele.isCompleted ? "bg-[#ef4444]" : "bg-[#10b981]"
                    } text-white font-semibold px-2 py-1 rounded-md`}
                    onClick={() => handleCompleted(ele.id)}
                  >
                    {ele.isCompleted ? "UNDO" : "DONE"}
                  </button>
                  <button
                    className="text-[#ef4444]"
                    onClick={() => handleRemove(ele.id)}
                  >
                    <RxCross2 />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
