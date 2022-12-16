import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './NewCheckListPage.css'
import BlankListForm from "../BlankListForm/BlankListForm"


export default function NewCheckListPage({ checkList, addCheckListItem, deleteListItem, updateListItem, updateBoolean }) {

    const [updatingBoolean, setUpdatingBoolean] = useState([]);
    // console.log(updatingBoolean)
    // console.log(checkList)
    // let updatedlistItem = checkList.find(listItem => listItem._id === id);
    const navigate = useNavigate();

    // function handleChange(evt) {
    //     const editFormData = {...updatedlistItem, [evt.target.name]: evt.target.value}
    //     setUpdatedCheckList(editFormData);
    //   }

    function handleUpdateBoolean(idx, id) {
        // const checklistArr = [...checkList]
        // console.log(idx, id)
        // console.log(checklistArr)
        checkList[idx].completed ? checkList[idx].completed = false : checkList[idx].completed = true
        setUpdatingBoolean(checkList);
        updateBoolean(updatingBoolean[idx], id)
        // console.log(updatingBoolean[idx], id)
    }

    return (
        <>
            <div>
                <BlankListForm addCheckListItem={addCheckListItem} />
            </div>
            <div >
                {checkList.map((step, idx) => (
                    <div className="step-card" key={idx}>
                        <p>{step.stepTitle}</p>
                        <p>{step.terminalCommand ? `Enter into Terminal:  ${step.terminalCommand}` : ''}</p>
                        <button onClick={() => deleteListItem(step._id)}>Delete</button>
                        <button onClick={() => navigate(`/blanklist/${step._id}/update`)}>Edit Note</button>
                        <button onClick={() => handleUpdateBoolean(idx, step._id)} type="submit">
                            {step.completed ? 'Undo 🔙' : 'Click to Mark as Complete ✅'}
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}