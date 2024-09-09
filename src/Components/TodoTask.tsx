import { ITask } from "../Interfaces";

interface TodoTaskProps {
    task: ITask;
    completeTask(taskNameToDelete: string): void;

}

const TodoTask = ({task, completeTask}: TodoTaskProps) => {
    return (<div className="task">
                <div className="content">
                    <span>{task.taskName}</span>
                    <span>{task.deadline}</span>
                </div>
                <button onClick={() => {completeTask(task.taskName)}}>X</button>
            </div>
    );
    
};

export default TodoTask;