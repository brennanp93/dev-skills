import { useNavigate } from 'react-router-dom';
import './NewCheckListPage.css'
import BlankListForm from "../BlankListForm/BlankListForm"



export default function NewCheckListPage({ checkList, addCheckListItem, deleteListItem, updateListItem, updateBoolean }) {
// console.log(checkList, "checklist")
    // const [updatingBoolean, setUpdatingBoolean] = useState([]);
    // console.log(updatingBoolean)
    // console.log(checkList)
    // let updatedlistItem = checkList.find(listItem => listItem._id === id);
    const navigate = useNavigate();



    function handleUpdateBoolean(idx, id) {
        checkList[idx].completed ? checkList[idx].completed = false : checkList[idx].completed = true;
        updateBoolean(checkList[idx], id)
        console.log(checkList[idx], "here")
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