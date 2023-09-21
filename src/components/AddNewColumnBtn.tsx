import { useState } from 'react';
import TaskAdd from './TaskAdd';
import AddNewColumnInput from './AddNewColumnInput';

interface AddNewColumnBtnProps {
    addTitle: (title: string) => void,
}

const AddNewColumnBtn = ({addTitle}:AddNewColumnBtnProps) => {
    const [hideInput, setHideInput] = useState(true)
    
    return (
        <div className="task-group">
            {hideInput ? 
            <TaskAdd setHideInput={() => setHideInput(false)} /> : <AddNewColumnInput addTitle={addTitle} setHideInput={() => setHideInput(true)} /> }
        </div>
    )
}

export default AddNewColumnBtn;