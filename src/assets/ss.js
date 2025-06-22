const tasklist = [
  { id: 1, Task: "sujit", completed: false },
  { id: 2, Task: "rahul", completed: true },
  { id: 3, Task: "gaurav", completed: false },
  { id: 4, Task: "aman", completed: true },
  { id: 5, Task: "priya", completed: false },
];

function checkElementPresentInobject(tasklist, tsk, task) {
  for(let i=0;i<tasklist.length;i++){
    if(tasklist[i][tsk] === task){
        return true;
    }
  }
  return false;
}

console.log(checkElementPresentInobject(tasklist, "Task", "sujit"));



<li className={`text-white ${ele.isCompleted ? "line" : ""}`}>
              {ele.Task}
              <button onClick={() => handleCompleted(ele.id)}>DONE</button>
              <button onClick={() => handleRemove(ele.id)}>
                <RxCross2 />
              </button>
            </li><li className={`text-white ${ele.isCompleted ? "line" : ""}`}>
              {ele.Task}
              <button onClick={() => handleCompleted(ele.id)}>DONE</button>
              <button onClick={() => handleRemove(ele.id)}>
                <RxCross2 />
              </button>
            </li>bg-white border-2 border-zinc-800 px-3 py-1 rounded-md