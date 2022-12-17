import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as devSkillsAPI from '../../utilities/devskills-api'
import Step from "../../components/Step/Step";

export default function CheckList({ devSkillsList, updateBoolean, djangoList, expressList }) {
  let { checklist } = useParams();
  const [devSkills, setDevSkills] = useState([])
  const [currentDevSkill, setCurrentDevSkill] = useState(null);
  const [steps, setSteps] = useState([]);


  let oneStep = checklist === 'Django' ? djangoList : expressList

  function handleUpdateBoolean(idx, id) {
    oneStep[idx].completed ? oneStep[idx].completed = false : oneStep[idx].completed = true;
    updateBoolean(oneStep[idx], id)
    // console.log(checkList[idx], id)
  }

  return (
    <>
      <div></div>
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



{/* <div>
                {singleDevSkill.steps.map((step) => (
                  <div>{step.title}</div>
                ))}
              </div> */}


// export default function CheckList({ checkListSteps }) {
//   let { checkList } = useParams();
//   let oneStep = checkListSteps.find((list) => list.name === checkList)
//   // console.log(oneStep)
//   const [markComplete, setMarkComplete] = useState([
//     {
//       "title": "",
//       "description": "",
//       "terminalCommand": "",
//       "completed": "",
//       "otherStepSpecificData": ""
//     },
//   ])

//   function setBoolean(idx) {
//     const updatedList = [...oneStep.steps];
//     updatedList[idx].completed ? updatedList[idx].completed = false : updatedList[idx].completed = true;
//     setMarkComplete(updatedList);
//   }



//   return (
//     <>
//       <h2>{checkList} CheckList</h2>
//       {/* <div>{e}</div> */}
//       {oneStep.steps.map((step, idx) => (
//         <div className="listStyle">
//           <div style={{textDecoration: step.completed ? "line-Through" : ''}}>
//             <h1 >{step.title}</h1>
//             <p>{step.description}</p>
//             <p>{step.terminalCommand ? `Enter into Terminal: ${step.terminalCommand}` :''}</p>
//             <p>{step.website}</p>
//             <div>
//               <button onClick={() => setBoolean(idx)} type="submit">
//                 {step.completed ? 'Undo 🔙' : 'Click to Mark as Complete ✅'}
//               </button>
//             </div>

//           </div>
//         </div>
//       ))}
//     </>
//   );
// }