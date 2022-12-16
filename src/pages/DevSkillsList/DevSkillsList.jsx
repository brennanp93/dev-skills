import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as devSkillsAPI from '../../utilities/devskills-api'
import Step from "../../components/Step/Step";

export default function CheckList() {
  let { checkList } = useParams();
  const [devSkills, setDevSkills] = useState([])
  const [currentDevSkill, setCurrentDevSkill] = useState(null);
  const [steps, setSteps] = useState([]);

  useEffect(function () {
    async function getAllItems() {
      const entireDevSkillsCheckList = await devSkillsAPI.getAll();
      setDevSkills(entireDevSkillsCheckList)
      let singleDevSkill = entireDevSkillsCheckList.find((list) => list.name === checkList)
      setCurrentDevSkill(singleDevSkill);
      setSteps(singleDevSkill.steps)
    };
    getAllItems();
  }, [])
  let showSteps;
  if (currentDevSkill) {
    showSteps = steps.map((step, idx) => (
      <Step step={step} key={step.title} />
    ))
  }

  return (
    <>
      {currentDevSkill ?
        <>
          <h1>Welcome to the {currentDevSkill.name} CheckList</h1>
          {showSteps}
        </>
        :
        ""
      }
    </>
  )
}




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