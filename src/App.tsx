import { FC,useState,ChangeEvent } from 'react';
import './App.css';
import { ITask } from './Interfaces';
import TodoTask from './Components/TodoTask';

const App: FC = () => {

  const [task,setTask] = useState<string>('');
  const [deadline,setDeadline] = useState<number>(0);
  const [todoList,settodoList] = useState<ITask[]>([]);

  const handleChange = (event:ChangeEvent<HTMLInputElement>): void  => {
    if(event.target.name === 'task'){
      setTask(event.target.value);
    }
    else{
      setDeadline(Number(event.target.value));
    }
    }

    const addTask = ():void => {
      const newTask = {taskName:task , deadline:deadline}
      settodoList([...todoList,newTask]);
      setTask('');
      setDeadline(0);  
    }

    const completeTask = (taskNameToDelete: string):void => {
      settodoList(todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      }))
    }


  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'> 
          <input type="text" name = "task" placeholder='Task' value={task} onChange={handleChange}/>
          <input type="number" name = "deadline" placeholder='Deadline (in days..)' value={deadline} onChange={handleChange}/>
        </div>
        <button onClick = {addTask}>Add Task</button>
      </div>
      <div className='todoList'>
        {todoList.map((task:ITask, key:number) => {
          return <TodoTask task={task} key={key} completeTask={completeTask}/>;
        })}


      </div>
      
    </div>
  );
}

export default App;
