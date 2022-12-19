import { useParams } from "react-router-dom";

export default function CheckList({ updateBoolean, djangoList, expressList, resetButton }) {
  let { checklist } = useParams();
  let oneStep = checklist === 'Django' ? djangoList : expressList
  let djangoDocs = 'https://docs.djangoproject.com/en/4.1/'
  let expressDocs = 'https://expressjs.com/'
  function handleUpdateBoolean(idx, id) {
    oneStep[idx].completed ? oneStep[idx].completed = false : oneStep[idx].completed = true;
    updateBoolean(oneStep[idx], id)
  }

  return (
    <>
      <h1 className="checklist-name">{checklist}&nbsp;Checklist</h1>
      <div className='checklist-box'>
        <div>

        {checklist === 'Django' ?
          <a href={`${djangoDocs}`} target='_blank'>Click Here to view the Django Documentation</a>
          :
          <a href={`${expressDocs}`} target='_blank'>Click Here to view the Express Documentation</a>
        }
        <button className='reset-btn' onClick={() => resetButton(oneStep)} >Reset List</button>
        </div>

        {oneStep.map((step, idx) => (
          <div className="step-card" key={step._id}
            style={{ textDecoration: step.completed && 'line-through' }}>
            <h2><span>({idx + 1})</span>&nbsp;{step.stepTitle}</h2>
            <hr />
            <ul>
              {step.description ?
                <><li>{step.description}</li><hr /></>
                : ''
              }
              {step.terminalCommand ?
                <li> Enter into Terminal: <span className='terminal-command'> {step.terminalCommand}</span></li>
                : ''
              }
              <hr />
              {step.otherStepSpecificData ?
                <><li>{step.otherStepSpecificData}</li> <hr /></>
                : ''}
            </ul>
            <button onClick={() => handleUpdateBoolean(idx, step._id)} >
              {step.completed ? 'Undo 🔙' : 'Click to Mark as Complete ✅'}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
