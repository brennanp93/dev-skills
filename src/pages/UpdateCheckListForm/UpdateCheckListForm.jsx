import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './UpdateCheckListForm.css';

export default function UpdateCheckListForm({ checkList, updateListItem }) {
  const navigate = useNavigate();
  const { id } = useParams();
  let updatedlistItem = checkList.find(listItem => listItem._id === id);
  const [updatedCheckList, setUpdatedCheckList] = useState(updatedlistItem);

  function handleChange(evt) {
    const editFormData = { ...updatedlistItem, [evt.target.name]: evt.target.value }
    setUpdatedCheckList(editFormData);
  }
// console.log(updatedCheckList)
  function handleSubmit(evt) {
    evt.preventDefault();
    updateListItem(updatedCheckList, id);

  }

  return (
    <div >
      <div className='checklist-form'>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            autoComplete="off"
            name="stepTitle"
            value={updatedCheckList.stepTitle}
            onChange={handleChange}
            placeholder=""
            required
            pattern=".{2,}"
          />
        </div>
        <div>
          <input
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
          <input
            autoComplete="off"
            name="terminalCommand"
            value={updatedCheckList.terminalCommand}
            onChange={handleChange}
            placeholder="Terminal Command"
            // required
            pattern=".{2,}"
          />
        </div>
        <button type="submit">Update</button>
        <button onClick={() => navigate('/blanklist')}>Never Mind</button>
      </form>
      </div>
    </div>
  );
}


