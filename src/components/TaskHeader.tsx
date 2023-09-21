import deleteIcon from '../assets/delete-icon.png'

interface TaskHeaderProps {
    title: string,
    deleteColumn: (title: string) => void
}

const TaskHeader = ({title, deleteColumn}: TaskHeaderProps) => {
  return (
    <div className="task-group-header">
      <p className="task-group-title">{title}</p>
      <img alt="Delete button" src={deleteIcon} className="task-group-delete-btn" onClick={() => deleteColumn(title)}/>
    </div>
  );
};

export default TaskHeader;
