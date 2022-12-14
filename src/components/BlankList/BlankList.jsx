import { useState } from "react";
import { useParams } from "react-router-dom";
// import BlankListForm from "../BlankListForm/BlankListForm";

export default function BlankList({ newLists }) {
  let { newListSteps } = useParams();
  let oneStep = newLists.find((list) => list.name === newListSteps);
  let listSteps = oneStep.steps;
  const [customList, setCustomList] = useState(listSteps)

  const [newItem, setNewItem] = useState({
    title: "",
    description: "",
    terminalCommand: null,
    completed: null,
    otherStepSpecificData: null,
    id: Math.floor(Math.random() * 100)
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    setCustomList([...customList, newItem]);
    setNewItem({
      title: "",
      description: "",
      terminalCommand: "",
      completed: null,
      otherStepSpecificData: null,
      id: Math.floor(Math.random() * 100)
    })
  }

  function handleChange(evt) {
    const newItemList = {
      ...newItem,
      [evt.target.name]: evt.target.value,
    };
    setNewItem(newItemList);
  }

  function setBoolean(idx) {
    const updatedList = [...oneStep.step];
    updatedList[idx].completed ? updatedList[idx].completed = false : updatedList[idx].completed = true;
    setCustomList(updatedList);
  }

  function deleteItem(id) {
    const removeItem = customList.filter((item) => {
      return item.id !== id;
    });
    setCustomList(removeItem)
    // console.log(removeItem)
  }

  return (
    <>
      <h2>{newListSteps} CheckList</h2>
      {customList.map((step, idx) => (
        <div className="listStyle">
          <div style={{ textDecoration: step.completed ? "line-Through" : '' }}>
            <h1 >{step.title}</h1>
            <p>{step.description}</p>
            <p>{step.terminalCommand ? `Enter into Terminal: ${step.terminalCommand}` : ''}</p>
            <div>
              <button onClick={() => setBoolean(idx)} type="submit">
                {step.completed ? 'Undo 🔙' : 'Click to Mark as Complete ✅'}
              </button>
              <button onClick={() => deleteItem(step.id)} type="submit">Delete ❌</button>
            </div>
          </div>

        </div>
      ))}

      <div>
        <form onSubmit={handleSubmit}>
          <input
            autoComplete="off"
            name="title"
            value={newItem.title}
            onChange={handleChange}
            placeholder="New To-Do"
            required
            pattern=".{2,}"
          />
          <input
            autoComplete="off"
            name="description"
            value={newItem.description}
            onChange={handleChange}
            placeholder="Description"
            // required
            pattern=".{2,}"
          />
          <input
            autoComplete="off"
            name="terminalCommand"
            value={newItem.terminalCommand}
            onChange={handleChange}
            placeholder="Terminal Command"
            // required
            pattern=".{2,}"
          />
          <button type="submit">Add To Do</button>
        </form>
      </div>
    </>
  );
}

/*------ Garbage Bin -------*/
//   function setBoolean(idx) {
//     const updatedList = [...customList];
//     updatedList[idx].completed ? updatedList[idx].completed = false : updatedList[idx].completed = true;
//     setNewItem(updatedList);
//   }