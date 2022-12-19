import { useParams } from "react-router-dom";
// import { useState } from "react";


export default function CheckList({ devSkillsList, updateBoolean, djangoList, expressList, resetButton }) {
  let { checklist } = useParams();
  let oneStep = checklist === 'Django' ? djangoList : expressList

  function handleUpdateBoolean(idx, id) {
    oneStep[idx].completed ? oneStep[idx].completed = false : oneStep[idx].completed = true;
    updateBoolean(oneStep[idx], id)
  }

  return (
    <>
      <div>
        <h1>{checklist} Check List</h1>
        <button onClick={() => resetButton(oneStep)} className='reset-btn'>Reset List</button>
      </div>
      <div className='checklist-box'>
        <div>
          {checklist === 'Django' ?
            <a href="https://docs.djangoproject.com/en/4.1/" target='_blank'>Click Here to view the Django Documentation</a>
            :
            <a href="https://expressjs.com/" target='_blank'>Click Here to view the Express Documentation</a>
          }
        </div>
        {oneStep.map((step, idx) => (
          <div className="step-card" key={step._id}
            style={{ textDecoration: step.completed && 'line-through' }}>
            <h2><span>({idx + 1})</span>&nbsp;{step.stepTitle}</h2>
            <hr />
            {step.description ?
              <><p>{step.description}</p> <hr /></>
              : ''
            }
            {step.terminalCommand ?
              <p> Enter into Terminal: <span className='terminal-command'> {step.terminalCommand}</span></p>
              : <p></p>}
            <hr />
            {step.otherStepSpecificData ?
              <><p>{step.otherStepSpecificData}</p> <hr /></>
              : <p></p>}
            <button onClick={() => handleUpdateBoolean(idx, step._id)} >
              {step.completed ? 'Undo 🔙' : 'Click to Mark as Complete ✅'}
            </button>
          </div>
        ))}
      </div>

    </>
  )
}
