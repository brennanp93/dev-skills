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
        <button onClick={() => resetButton(oneStep)}>Reset List</button>
      </div>
      </div>
      <div>
        {oneStep.map((step, idx) => (
          <div className="step-card" key={step._id}>
          <p>{step.stepTitle}</p>
          <p>{step.terminalCommand ? `Enter into Terminal:  ${step.terminalCommand}` : ''}</p>
          <button onClick={() => handleUpdateBoolean(idx, step._id)} >
            {step.completed ? 'Undo 🔙' : 'Click to Mark as Complete ✅'}
          </button> 
        </div>
        ))}
      </div>

    </>
  )
}
