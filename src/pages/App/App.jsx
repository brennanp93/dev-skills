import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import BlankList from '../../components/BlankList/BlankList';
import DevSkillsList from '../../components/DevSkillsList/DevSkillsList'
import NavBar from '../../components/NavBar/NavBar';
/* Below is just for testing. Make sure to delete once data is seeded to DB */
import { checkLists, newLists } from "../../data";
import * as checkListAPI from '../../utilities/blanklist-api'
// import BlankListForm from '../../components/BlankListForm/BlankListForm';
import NewCheckListPage from '../../components/NewCheckListPage/NewCheckListPage';
import UpdateCheckListForm from '../../components/UpdateCheckListForm/UpdateCheckListForm';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [checkList, setCheckList] = useState([]);
  const navigate = useNavigate();

  async function addCheckListItem(checkListData) {
    const newCheckListItem = await checkListAPI.create(checkListData);
    setCheckList([...checkList, newCheckListItem])
    // console.log(newCheckListItem)
  }

  async function deleteListItem(id) {
    await checkListAPI.deleteListItem(id);
    const afterDeleteList = checkList.filter(note => note._id !== id);
    setCheckList(afterDeleteList);
  }

  
  async function updateListItem(updateCheckListFormData, id) {
    // const updatedItem = await checkListAPI.updateListItem(updateCheckListFormData, id);
    await checkListAPI.updateListItem(updateCheckListFormData, id);
    const checkList = await checkListAPI.getAll();
    setCheckList(checkList)
    navigate('/blanklist')
  }

  async function updateBoolean(booleanData, id) {
    // const updatedItem = await checkListAPI.updateListItem(updateCheckListFormData, id);
    await checkListAPI.updateBoolean(booleanData, id);
    const checkListBoolean = await checkListAPI.getAll();
    setCheckList(checkListBoolean)
  }


  useEffect(function () {
    async function getAllItems() {
      const entireCheckList = await checkListAPI.getAll();
      setCheckList(entireCheckList)
    };
    getAllItems();
  }, [])

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/blanklist" element={<NewCheckListPage
              checkList={checkList}
              addCheckListItem={addCheckListItem}
              deleteListItem={deleteListItem}
              updateListItem={updateListItem}
              updateBoolean={updateBoolean} 
              />} />
            {/* <Route path="/checklist/:id/update" element={UpdateCheckListForm} /> */}

            {/* <Route path="/newchecklist" element={<BlankListForm addCheckListItem={addCheckListItem} />} /> */}
            <Route path="/" element={<HomePage />} />
            <Route path="/:checkList" element={<DevSkillsList checkListSteps={checkLists} />} />
            <Route path="/blanklist/:id/update" element={<UpdateCheckListForm checkList={checkList} updateListItem={updateListItem} />} />

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