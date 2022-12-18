import { useNavigate } from 'react-router-dom';
import './NewCheckListPage.css'
import AddItemForm from "../../components/AddItemForm/AddItemForm"

export default function NewCheckListPage({ resetButton, checkList, addCheckListItem, deleteListItem, updateListItem, updateBoolean }) {
  const navigate = useNavigate();
  // console.log(checkList)

  function handleUpdateBoolean(idx, id) {
    checkList[idx].completed ? checkList[idx].completed = false : checkList[idx].completed = true;
    updateBoolean(checkList[idx], id)
    // console.log(checkList[idx], id)
  }

  // function handleResetButton() {
  //   resetButton(checkList)
  //   // console.log(checkList)
  // }

  return (
    <>
      <div className='add-item-form'>
        <AddItemForm addCheckListItem={addCheckListItem} />
      </div>
      <div>
        <button onClick={() => resetButton(checkList)}>Reset List</button>
      </div>
      <div className='checklist-box'>
        {checkList.map((step, idx) => (
          <div className="step-card" key={step._id}>
            <p>{step.stepTitle}</p>
            {step.terminalCommand ?
              <p> `Enter into Terminal: <span> ${step.terminalCommand}`</span></p>
              : ''}
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
