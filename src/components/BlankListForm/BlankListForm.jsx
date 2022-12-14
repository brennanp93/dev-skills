import { useState } from "react";
import { useParams } from "react-router-dom";

export default function BlankListForm({ addCheckListItem }) {
  // const [customList, setCustomList] = useState(listSteps);
  // const [newCheckListItem, setNewCheckListItem] = useState([]);
  const [incomingItem, setIncomingItem] = useState({
    title: "",
    description: "",
    terminalCommand: null,
    completed: null,
    otherStepSpecificData: null,
    steps: [{stepTitle: '', newStepTitle: ''}]
    // id: Math.floor(Math.random() * 100)
  });


// {
//   name: "Express",
//   description: "Some description you may or may not want to have above the steps",
//   website: "idk",
//   steps: [
//     {
//       title: "",
//       description: "",
//       terminalCommand: null,
//       completed: false,

//     }
// }

  async function handleSubmit(evt) {
            evt.preventDefault();
            addCheckListItem(incomingItem)
            // setCustomList([...customList, incomingItem]);
            setIncomingItem({
              title: "",
              description: "",
              terminalCommand: "",
              completed: null,
              otherStepSpecificData: null,
              steps: [{stepTitle: '', newStepTitle: ''}]
              // id: Math.floor(Math.random() * 100)
            })
          }

  // Handles the form fields being filled out
  function handleChange(evt) {
            const formFields = {
              ...incomingItem.steps,
              [evt.target.name]: evt.target.value,
            };
            setIncomingItem(formFields);
          }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          name="stepTitle"
          value={incomingItem.steps.stepTitle}
          onChange={handleChange}
          placeholder="New To-Do"
          required
          pattern=".{2,}"
        />
        <input
          autoComplete="off"
          name="description"
          value={incomingItem.description}
          onChange={handleChange}
          placeholder="Description"
          // required
          pattern=".{2,}"
        />
        <input
          autoComplete="off"
          name="terminalCommand"
          value={incomingItem.terminalCommand}
          onChange={handleChange}
          placeholder="Terminal Command"
          // required
          pattern=".{2,}"
        />
        <button type="submit">Add To Do</button>
      </form>
    </div>
  );
}