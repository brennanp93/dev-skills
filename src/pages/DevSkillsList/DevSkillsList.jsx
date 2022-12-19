import { useParams } from "react-router-dom";
// import { useState } from "react";


export default function CheckList({ devSkillsList, updateBoolean, djangoList, expressList, resetButton }) {
  let { checklist } = useParams();
  // const [devSkills, setDevSkills] = useState([])
  // const [currentDevSkill, setCurrentDevSkill] = useState(null);
  // const [steps, setSteps] = useState([]);

  let oneStep = checklist === 'Django' ? djangoList : expressList

  function handleUpdateBoolean(idx, id) {
    oneStep[idx].completed ? oneStep[idx].completed = false : oneStep[idx].completed = true;
    updateBoolean(oneStep[idx], id)
  }




  return (
    <>
      <div>
        <div>
          <button onClick={() => resetButton(oneStep)} className='rest-btn'>Reset List</button>
        </div>
      </div>
      <div className='checklist-box'>
        {oneStep.map((step, idx) => (
          <div className="step-card" key={step._id}>
            <h2><span>{idx + 1}</span>&nbsp;{step.stepTitle}</h2>
            <hr />
            {step.description ?
              <><p>{step.description}</p> <hr /></>
              : ''
            }
            {step.terminalCommand ?
              <p> `Enter into Terminal:  ${step.terminalCommand}`</p>
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
