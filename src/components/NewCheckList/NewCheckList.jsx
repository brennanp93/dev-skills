import './NewCheckListPage.css'
import BlankListForm from "../BlankListForm/BlankListForm"
export default function NewCheckList({ checkList, addCheckListItem }) {
    // console.log(checkList)
    return (
        <>
            <div>
                <BlankListForm addCheckListItem={addCheckListItem} />
            </div>
            <div >
                {checkList.map((step, idx) => (
                    <div className="step-card" key={idx}>
                        <p>{step.stepTitle}</p>
                        <p>{step.terminalCommand ? `Enter into Terminal:  ${step.terminalCommand}` :''}</p>
                    </div>
                ))}
            </div>
        </>
    )
}