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
      <div className='checklist-box'>
        <div>
          <h1>My Checklist</h1>
          <button onClick={() => resetButton(checkList)} className='reset-btn'>Reset List</button>
        </div>
        {checkList.map((step, idx) => (
          <div className="step-card" key={step._id}
            style={{ textDecoration: step.completed && 'line-through' }}>
            <h2><span>({idx + 1})</span>&nbsp;{step.stepTitle}</h2>
            <hr />
            <ul>
              {step.description ?
                <><li>{step.description}</li> <hr /></>
                : ''}
              {step.terminalCommand ?
                <><li> Enter into Terminal: <span className='terminal-command'> {step.terminalCommand}</span> <hr /></li></>
                : ''}

            </ul>
            <button onClick={() => deleteListItem(step._id)}>Delete</button>
            <button onClick={() => navigate(`/blanklist/${step._id}/update`)}>Edit Note</button>
            <button onClick={() => handleUpdateBoolean(idx, step._id)} >
              {step.completed ? 'Undo 🔙' : 'Complete ✅'}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
