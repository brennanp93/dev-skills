import { useState } from "react";
import {
  MDBInput,
  MDBTextArea,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';


export default function AddItemForm({ addCheckListItem }) {
  const [addedItem, setAddedItem] = useState({
    stepTitle: '',
    description: '',
    terminalCommand: '',
    completed: false
  });

  // Submits towards server
  function handleSubmit(evt) {
    evt.preventDefault();
    addCheckListItem(addedItem)
    setAddedItem({
      stepTitle: '',
      description: '',
      terminalCommand: '',
      completed: false
    })
  }

  // Handles the form fields being filled out
  function handleChange(evt) {
    const formFields = { ...addedItem, [evt.target.name]: evt.target.value };
    setAddedItem(formFields);
  }

  return (
    <MDBContainer background='light' className="form-outline w-50 square border border-2 border-dark square rounded-7 mb-3 p-3 ">
      <div >
        <form onSubmit={handleSubmit}>
          <div>
            <MDBInput
              autoComplete="off"
              name="stepTitle"
              value={addedItem.stepTitle}
              onChange={handleChange}
              placeholder="New To-Do"
              label="New To-Do"
              required
              pattern=".{2,}"
            />
          </div>
          <div>
            <MDBTextArea
              autoComplete="off"
              name="description"
              value={addedItem.description}
              onChange={handleChange}
              placeholder="Description"
              label="Description"
              pattern=".{2,}"
            />
          </div>
          <MDBBtn color="dark" type="submit" className="mt-3">Add To Do</MDBBtn >
        </form>
      </div>
    </MDBContainer>
  );
};