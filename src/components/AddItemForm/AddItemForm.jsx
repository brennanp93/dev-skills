import { useState } from "react";


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
    <div className="add-item-form">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            autoComplete="off"
            name="stepTitle"
            value={addedItem.stepTitle}
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
            value={addedItem.description}
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
            value={addedItem.terminalCommand}
            onChange={handleChange}
            placeholder="Terminal Command"
            // required
            pattern=".{2,}"
          />
        </div>
        <button type="submit" className="submit-btn">Add To Do</button>
      </form>
    </div>
  );
}



  // const [customList, setCustomList] = useState(listSteps);
  // const [newCheckListItem, setNewCheckListItem] = useState([]);
  // const [incomingItem, setIncomingItem] = useState({
  //   title: "",
  //   description: "",
  //   terminalCommand: null,
  //   completed: null,
  //   otherStepSpecificData: null,
  //   steps: [{stepTitle: '', newStepTitle: ''}]
  //   // id: Math.floor(Math.random() * 100)
  // });


    // async function handleSubmit(evt) {
  //           evt.preventDefault();
  //           addCheckListItem(incomingItem)
  //           // setCustomList([...customList, incomingItem]);
  //           setIncomingItem({
  //             title: "",
  //             description: "",
  //             terminalCommand: "",
  //             completed: null,
  //             otherStepSpecificData: null,
  //             steps: [{stepTitle: '', newStepTitle: ''}]
  //             // id: Math.floor(Math.random() * 100)
  //           })
  //         }