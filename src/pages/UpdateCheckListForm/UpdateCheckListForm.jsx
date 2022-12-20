import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './UpdateCheckListForm.css';
import {
  MDBInput,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function UpdateCheckListForm({ checkList, updateListItem }) {
  const navigate = useNavigate();
  const { id } = useParams();
  let updatedlistItem = checkList.find(listItem => listItem._id === id);
  // console.log(updatedlistItem)
  const [updatedCheckList, setUpdatedCheckList] = useState(updatedlistItem);

  function handleChange(evt) {
    // const editFormData = {...updatedlistItem, stepTitle: evt.target.value, description: evt.target.value, terminalCommand: evt.target.value }
    const editFormData = { ...updatedCheckList, [evt.target.name]: evt.target.value }
    setUpdatedCheckList(editFormData);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    updateListItem(updatedCheckList, id);

  }

  return (
    <MDBContainer className="position-absolute top-50 start-50 translate-middle  ">
    <div >
      <div className='checklist-form'>
      <form onSubmit={handleSubmit}>
        <div>
          <MDBInput
            autoComplete="off"
            name="stepTitle"
            value={updatedCheckList.stepTitle}
            onChange={handleChange}
            placeholder="New To-Do"
            required
            pattern=".{2,}"
          />
        </div>
        <div>
          <MDBInput
            autoComplete="off"
            name="description"
            value={updatedCheckList.description}
            onChange={handleChange}
            placeholder="Description"
            // required
            pattern=".{2,}"
          />
        </div>
        <div>
          <MDBInput
            autoComplete="off"
            name="terminalCommand"
            value={updatedCheckList.terminalCommand}
            onChange={handleChange}
            placeholder="Terminal Command"
            // required
            pattern=".{2,}"
          />
        </div>
        <MDBBtn color='dark' type="submit">Update</MDBBtn>
        <MDBBtn color='dark' onClick={() => navigate('/blanklist')}>Never Mind</MDBBtn>
      </form>
      </div>
    </div>
    </MDBContainer>
  );
}


