import { useNavigate } from 'react-router-dom';
import './NewCheckListPage.css'
import AddItemForm from "../../components/AddItemForm/AddItemForm";
import {
  MDBBtn, MDBBtnGroup, MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit';

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
      {/* <div className='add-item-form'> */}
        <AddItemForm addCheckListItem={addCheckListItem} />
      {/* </div> */}
      <MDBContainer breakpoint="sm">
        <div className='checklist-box'>
          <div>
            <h1>My Checklist</h1>
            <MDBBtn  color='dark' onClick={() => resetButton(checkList)} >
              Reset List
            </MDBBtn>
          </div>
          {checkList.map((step, idx) => (
            <MDBCard background='secondary' className='text-white mb-3' border='dark' key={step._id} >
              <MDBCardBody>
                {/* <div key={step._id}
                  style={{ textDecoration: step.completed && 'line-through' }}> */}
                <MDBCardTitle><span>({idx + 1})</span>&nbsp;{step.stepTitle}</MDBCardTitle>
                <hr />
                {step.description ?
                  <>
                    <MDBCardText>{step.description}</MDBCardText>
                    <hr />
                  </>
                  : ''}
                {step.terminalCommand ?
                  <><MDBCardText> Enter into Terminal: <span className='terminal-command'> {step.terminalCommand}</span></MDBCardText> <hr /></>
                  : ''}
                <MDBBtnGroup>
                  <MDBBtn color="light" onClick={() => deleteListItem(step._id)}>Delete</MDBBtn>
                  <MDBBtn color="light" onClick={() => navigate(`/blanklist/${step._id}/update`)}>Edit Note</MDBBtn>
                  <MDBBtn color="light" onClick={() => handleUpdateBoolean(idx, step._id)} >
                    {step.completed ? 'Undo 🔙' : 'Complete ✅'}
                  </MDBBtn>
                </MDBBtnGroup>
                {/* </div> */}
              </MDBCardBody>
            </MDBCard>
          ))}
        </div>
      </MDBContainer>
    </>
  )
}
