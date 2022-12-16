import { useParams } from 'react-router-dom'
import { useState} from 'react'

export default function UpdateCheckListForm({ checkList, updateListItem }) {
  const { id } = useParams();
  let updatedlistItem = checkList.find(listItem => listItem._id === id);
  const [updatedCheckList, setUpdatedCheckList] = useState(updatedlistItem);
  // console.log(updatedlistItem, "UpdateCL FORM")
  // console.log(updatedCheckList, "UpdateCL FORM")


  function handleChange(evt) {
    const editFormData = {...updatedlistItem, [evt.target.name]: evt.target.value}
    setUpdatedCheckList(editFormData);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    updateListItem(updatedCheckList, id);

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
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
        <button type="submit">Add To Do</button>
      </form>
    </div>
  );
}


