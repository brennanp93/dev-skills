import { useNavigate } from 'react-router-dom';
import './NewCheckListPage.css'
import AddItemForm from "../../components/AddItemForm/AddItemForm"

export default function NewCheckListPage({ checkList, addCheckListItem, deleteListItem, updateListItem, updateBoolean }) {
  const navigate = useNavigate();
  // console.log(checkList)

  function handleUpdateBoolean(idx, id) {
    checkList[idx].completed ? checkList[idx].completed = false : checkList[idx].completed = true;
    updateBoolean(checkList[idx], id)
    // console.log(checkList[idx], id)
  }

  return (
    <>
      <div className='add-item-form'>
        <AddItemForm addCheckListItem={addCheckListItem} />
      </div>
      <div className='checklist-box'>
        {checkList.map((step, idx) => (
          <div className="step-card" key={step._id}>
            <p>{step.stepTitle}</p>
            <p>{step.terminalCommand ? `Enter into Terminal:  ${step.terminalCommand}` : ''}</p>
            <button onClick={() => deleteListItem(step._id)}>Delete</button>
            <button onClick={() => navigate(`/blanklist/${step._id}/update`)}>Edit Note</button>
            <button onClick={() => handleUpdateBoolean(idx, step._id)} >
              {step.completed ? 'Undo 🔙' : 'Click to Mark as Complete ✅'}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
