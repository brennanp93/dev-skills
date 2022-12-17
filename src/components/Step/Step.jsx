import * as devSkillsAPI from '../../utilities/devskills-api'
export default function Step({ step, updateBoolean }) {
    // console.log(step)

    // async function updateBoolean(booleanData, id) {
    //     const updatedBool = await devSkillsAPI.updateBoolean(booleanData, id);
    //     const checkListBoolean = await devSkillsAPI.getOneDevSkill(booleanData, id);
    //     // setCheckList(checkListBoolean)
    //     // step.completed = updatedBool;
    //     // console.log(booleanData, "BD")
    //     // console.log(checkListBoolean, "CLB")
    // }

    function handleUpdateBoolean(id) {
        step.completed ? step.completed = false : step.completed = true;
        updateBoolean(step, id)
    //     // console.log(step.completed)
    //     // console.log(step, id)
    //     // console.log(id)
    }


    return (
        <div>
            <div className='checklist-box'>
                <h2>{step.title}</h2>
                <div>
                    <p>{step.Description}</p>
                </div>
                {step.terminalCommand ?
                    <p> Enter into Terminal:<span> {step.terminalCommand}</span></p>
                    :
                    ""
                }
                <p>{step.otherStepSpecificData}</p>
                <button onClick={() => handleUpdateBoolean(step._id)} >
                    {step.completed ? 'Undo 🔙' : 'Click to Mark as Complete ✅'}
                </button>
            </div>
        </div>
    )
}