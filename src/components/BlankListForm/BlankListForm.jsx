import { useState } from "react";


export default function BlankListForm({ addCheckListItem }) {
  const [incomingItem, setIncomingItem] = useState({
    stepTitle: '',
    description: '',
    terminalCommand: '',
    completed: null
  });

  // Submits towards server
  function handleSubmit(evt) {
    evt.preventDefault();
    addCheckListItem(incomingItem)
    setIncomingItem({
      stepTitle: '',
      description: '',
      terminalCommand: '',
      completed: false
    })
  }

  // Handles the form fields being filled out
  function handleChange(evt) {
    const formFields = {
      ...incomingItem,
      [evt.target.name]: evt.target.value,
    };
    setIncomingItem(formFields);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            autoComplete="off"
            name="stepTitle"
            value={incomingItem.stepTitle}
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
            value={incomingItem.description}
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
            value={incomingItem.terminalCommand}
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