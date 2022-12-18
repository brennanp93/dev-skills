import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import DevSkillsList from '../DevSkillsList/DevSkillsList'
import NavBar from '../../components/NavBar/NavBar';
/* Below is just for testing. Make sure to delete once data is seeded to DB */
import * as checkListAPI from '../../utilities/blanklist-api'
import * as djangoListAPI from '../../utilities/djangolist-api'
import * as expressListAPI from '../../utilities/expresslist-api'
// import * as devSkillsAPI from '../../utilities/devskills-api'
import UpdateCheckListForm from '../UpdateCheckListForm/UpdateCheckListForm';
import NewCheckListPage from '../NewCheckListPage/NewCheckListPage';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [checkList, setCheckList] = useState([]);
  const [djangoList, setDjangoCheckList] = useState([]);
  const [expressList, setExpressCheckList] = useState([]);
  // const [devSkillsList, setDevSkillsList] = useState([]);
  const navigate = useNavigate();


  // Adds an item to the checklist
  async function addCheckListItem(checkListData) {
    const newCheckListItem = await checkListAPI.create(checkListData);
    setCheckList([...checkList, newCheckListItem])
  }

  //Deletes an item from checklist with delete button
  async function deleteListItem(id) {
    await checkListAPI.deleteListItem(id);
    const afterDeleteList = checkList.filter(note => note._id !== id);
    setCheckList(afterDeleteList);
  }
  // const updatedItem = await checkListAPI.updateListItem(updateCheckListFormData, id);

  //Updates the specific item
  async function updateListItem(updateCheckListFormData, id) {
    await checkListAPI.updateListItem(updateCheckListFormData, id);
    const checkList = await checkListAPI.getAll();
    setCheckList(checkList)
    navigate('/blanklist')
  }

  // Sets the boolean value in the DB so that it renders buttom dynamically. 
  async function updateBoolean(booleanData, id) {
    // console.log(booleanData)
    await checkListAPI.updateBoolean(booleanData, id);
    await expressListAPI.updateBoolean(booleanData, id);
    await djangoListAPI.updateBoolean(booleanData, id);
    const checkListBoolean = await checkListAPI.getAll();
    const allDjangoSkills = await djangoListAPI.getAll();
    const allExpressSkills = await expressListAPI.getAll();
    setCheckList(checkListBoolean)
    setDjangoCheckList(allDjangoSkills);
    setExpressCheckList(allExpressSkills);
  }

  async function resetButton(entireCheckList) {
    await checkListAPI.resetButton(entireCheckList)
    await djangoListAPI.resetButton(entireCheckList)
    await expressListAPI.resetButton(entireCheckList)
    const newlyResetList = await checkListAPI.getAll()
    const resetDjangoList = await djangoListAPI.getAll()
    const resetExpressList = await expressListAPI.getAll()
    setCheckList(newlyResetList)
    setDjangoCheckList(resetDjangoList);
    setExpressCheckList(resetExpressList);
  }

  useEffect(function () {
    async function getAllItems() {
      const entireCheckList = await checkListAPI.getAll();
      const allDjangoSkills = await djangoListAPI.getAll();
      const allExpressSkills = await expressListAPI.getAll();
      // const entireDevSkillsList = await devSkillsAPI.getAll();
      setCheckList(entireCheckList)
      setDjangoCheckList(allDjangoSkills);
      setExpressCheckList(allExpressSkills);
      // setDevSkillsList(entireDevSkillsList)
    };
    getAllItems();
  }, [])

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/blanklist" element={
              <NewCheckListPage
                checkList={checkList}
                addCheckListItem={addCheckListItem}
                deleteListItem={deleteListItem}
                updateListItem={updateListItem}
                updateBoolean={updateBoolean}
                resetButton={resetButton}
              />
            }
            />
            <Route path="/" element={<HomePage />} />
            <Route path="/:checklist" element={<DevSkillsList
              // devSkillsList={devSkillsList}
              updateBoolean={updateBoolean}
              expressList={expressList}
              djangoList={djangoList}
              resetButton={resetButton}
            />} />
            <Route path="/blanklist/:id/update" element={<UpdateCheckListForm checkList={checkList} updateListItem={updateListItem} />} />
            {/* <Route path="/checklist/:id/update" element={UpdateCheckListForm} /> */}
            {/* <Route path="/newchecklist" element={<BlankListForm addCheckListItem={addCheckListItem} />} /> */}
            {/* <Route path="/blanklist/:newListSteps" element={<BlankList newLists={newLists} />} /> */}
          </Routes>
        </>
        :
        <>
          <AuthPage setUser={setUser} />
        </>
      }
    </main>
  );
}



/*------ Garbage Bin -------*/
//  <Route path="/blank" element={<BlankList newLists={newLists} />} /> *

// {/* <Routes> */ }
// {/* Route components in here */ }
// {/* <Route path="/orders/new" element={<NewOrderPage />} /> */ }
// {/* <Route path="/orders" element={<OrderHistoryPage />} /> */ }
// {/* </Routes> */ }