import { useParams } from "react-router-dom";
import {
  MDBBtn, MDBBtnGroup, MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBTypography
} from 'mdb-react-ui-kit';

export default function CheckList({ updateBoolean, djangoList, expressList, resetButton, resetDjangoList, resetExpressList }) {
  let { checklist } = useParams();
  let oneStep = checklist === 'Django' ? djangoList : expressList;
  let djangoDocs = 'https://docs.djangoproject.com/en/4.1/'
  let expressDocs = 'https://expressjs.com/'

  function handleUpdateBoolean(idx, id) {
    oneStep[idx].completed ? oneStep[idx].completed = false : oneStep[idx].completed = true;
    updateBoolean(oneStep[idx], id)
  }

  return (
    <>
      <h1 className="checklist-name ">{checklist}&nbsp;Checklist</h1>
      {/* <div className='checklist-box'> */}
      <MDBContainer breakpoint="sm" className="square border border-2 border-dark square rounded-7 ps-5 pe-5" >
        <MDBTypography >
          {checklist === 'Django' ?
            <h5><a className="text-dark text-decoration-underline" href={`${djangoDocs}`} target='_blank'>Click Here to view the Django Documentation</a></h5>
            :
            <h5><a className="text-dark text-decoration-underline" href={`${expressDocs}`} target='_blank'>Click Here to view the Express Documentation</a></h5>
          }
        </MDBTypography>
        {checklist === 'Django' ?
          <MDBBtn color='dark' onClick={() => resetDjangoList(oneStep)} >Reset List</MDBBtn>
          :
          <MDBBtn color='dark' onClick={() => resetExpressList(oneStep)} >Reset List</MDBBtn>}
        {oneStep.map((step, idx) => (
          <>
            {/* <MDBBtn color='dark' onClick={() => resetButton(oneStep)} >Reset List</MDBBtn> */}
            <MDBCard background='secondary' className='text-white mb-3 ' border='dark' key={step._id}>
              <MDBCardBody>
                <div key={step._id}
                  style={{ textDecoration: step.completed && 'line-through' }}>
                  <MDBCardTitle><span>({idx + 1})</span>&nbsp;{step.stepTitle}</MDBCardTitle>
                  <hr />

                  {step.description ?
                    <><MDBCardText>{step.description}</MDBCardText><hr /></>
                    : ''
                  }
                  {step.terminalCommand ?
                    <MDBCardText> Enter into Terminal: <span className='terminal-command'> {step.terminalCommand}</span></MDBCardText>
                    : ''
                  }
                  <hr />
                  {step.otherStepSpecificData ?
                    <><MDBCardText>{step.otherStepSpecificData}</MDBCardText> <hr /></>
                    : ''
                  }
                  <MDBBtnGroup>
                    <MDBBtn color='light' onClick={() => handleUpdateBoolean(idx, step._id)} >
                      {step.completed ? 'Undo 🔙' : 'Click to Mark as Complete ✅'}
                    </MDBBtn>
                  </MDBBtnGroup>
                </div>
              </MDBCardBody>
            </MDBCard></>
        ))}
      </MDBContainer>
      {/* </div> */}
    </>
  )
}
