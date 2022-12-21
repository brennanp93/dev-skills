import { useNavigate } from 'react-router-dom';

import AddItemForm from "../../components/AddItemForm/AddItemForm";
import {
  MDBBtn, MDBBtnGroup, MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBTypography
} from 'mdb-react-ui-kit';

export default function NewCheckListPage({ resetCheckList, checkList, addCheckListItem, deleteListItem, updateBoolean }) {
  const navigate = useNavigate();

  function handleUpdateBoolean(idx, id) {
    checkList[idx].completed ? checkList[idx].completed = false : checkList[idx].completed = true;
    updateBoolean(checkList[idx], id)
  };

  return (
    <>
      <AddItemForm addCheckListItem={addCheckListItem} />

      <MDBContainer breakpoint="sm" className="square border border-2 border-dark square rounded-7 ps-5 pe-5  " >
        <h1>My Checklist</h1>
        <MDBBtn color='dark' className='mb-3' onClick={() => resetCheckList(checkList)} >
          Reset List
        </MDBBtn>
        {checkList.map((step, idx) => (
          <MDBCard background='secondary' className='text-white mb-3' border='dark' key={step._id} >
            <MDBCardBody >
              <MDBTypography  >
                <div key={step._id}
                  style={{ textDecoration: step.completed && 'line-through' }}>
                  <MDBCardTitle><span >({idx + 1})</span>&nbsp;{step.stepTitle}</MDBCardTitle>
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
                </div>
              </MDBTypography>
              <MDBBtnGroup className='text-dark'>
                <MDBBtn color="light" onClick={() => deleteListItem(step._id)}>Delete</MDBBtn>
                <MDBBtn color="light" onClick={() => navigate(`/blanklist/${step._id}/update`)}>Edit Note</MDBBtn>
                <MDBBtn color="light" onClick={() => handleUpdateBoolean(idx, step._id)} >
                  {step.completed ? 'Undo 🔙' : 'Complete ✅'}
                </MDBBtn>
              </MDBBtnGroup>
            </MDBCardBody>
          </MDBCard>
        ))}
      </MDBContainer>
    </>
  );
};