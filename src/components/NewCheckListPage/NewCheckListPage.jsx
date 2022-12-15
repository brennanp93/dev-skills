import { useNavigate } from 'react-router-dom';
import './NewCheckListPage.css'
import BlankListForm from "../BlankListForm/BlankListForm"


export default function NewCheckListPage({ checkList, addCheckListItem, deleteListItem, updateListItem }) {
    // console.log(checkList)
    const navigate = useNavigate();


    
    return (
        <>
            <div>
                <BlankListForm addCheckListItem={addCheckListItem}  />
            </div>
            <div >
                {checkList.map((step, idx) => (
                    <div className="step-card" key={idx}>
                        <p>{step.stepTitle}</p>
                        <p>{step.terminalCommand ? `Enter into Terminal:  ${step.terminalCommand}` :''}</p>
                        <button onClick={() => deleteListItem(step._id)}>Delete</button>
                        <button onClick={() => navigate(`/blanklist/${step._id}/update`)}>Edit Note</button>
                        <button>Mark as Complete</button>
                    </div>
                ))}
            </div>
        </>
    )
}