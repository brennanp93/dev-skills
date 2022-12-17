// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import * as devSkillsAPI from '../../utilities/devskills-api'
// export default function TestDevSkillsList() {
//   // let { checkList } = useParams();
//   // let oneStep = checkListSteps.find((list) => list.name === checkList)
//   const [devSkills, setDevSkills] = useState([])

//   return ( 
//     <div>Hello</div>
//    );
// }
  // useEffect(function () {
  //   async function getAllItems() {
  //     const entireCheckList = await devSkillsAPI.getAll();
  //     setDevSkills(entireCheckList)
  //   };
  //   getAllItems();
  // }, [])



  // console.log(oneStep)
  // const [markComplete, setMarkComplete] = useState([
  //   {
  //     "title": "",
  //     "description": "",
  //     "terminalCommand": "",
  //     "completed": "",
  //     "otherStepSpecificData": ""
  //   },
  // ])

  // function setBoolean(idx) {
  //   const updatedList = [...oneStep.steps];
  //   updatedList[idx].completed ? updatedList[idx].completed = false : updatedList[idx].completed = true;
  //   setMarkComplete(updatedList);
  // }



 

{/* <div>{e}</div> */}

{/* <>
<h2>{checkList} CheckList</h2>
{oneStep.steps.map((step, idx) => (
  <div className="listStyle">
    <div style={{textDecoration: step.completed ? "line-Through" : ''}}>
      <h1 >{step.title}</h1>
      <p>{step.description}</p>
      <p>{step.terminalCommand ? `Enter into Terminal: ${step.terminalCommand}` :''}</p>
      <p>{step.website}</p>
      <div>
        <button onClick={() => setBoolean(idx)} type="submit">
          {step.completed ? 'Undo 🔙' : 'Click to Mark as Complete ✅'}
        </button>
      </div>

    </div>
  </div>
))}
</> */}
