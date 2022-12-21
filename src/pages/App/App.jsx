import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
/* Components */
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import DevSkillsList from '../DevSkillsList/DevSkillsList';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import UpdateCheckListForm from '../../components/UpdateCheckListForm/UpdateCheckListForm';
import NewCheckListPage from '../NewCheckListPage/NewCheckListPage';
/* API's */
import * as checkListAPI from '../../utilities/blanklist-api';
import * as djangoListAPI from '../../utilities/djangolist-api';
import * as expressListAPI from '../../utilities/expresslist-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [checkList, setCheckList] = useState([]);
  const [djangoList, setDjangoCheckList] = useState([]);
  const [expressList, setExpressCheckList] = useState([]);
  const navigate = useNavigate();

  // Adds an item to the checklist
  async function addCheckListItem(checkListData) {
    const newCheckListItem = await checkListAPI.create(checkListData);
    setCheckList([...checkList, newCheckListItem]);
  };

  //Deletes an item from checklist with delete button
  async function deleteListItem(id) {
    await checkListAPI.deleteListItem(id);
    const afterDeleteList = checkList.filter(note => note._id !== id);
    setCheckList(afterDeleteList);
  };

  //Updates the specific item
  async function updateListItem(updateCheckListFormData, id) {
    await checkListAPI.updateListItem(updateCheckListFormData, id);
    const checkList = await checkListAPI.getAll();
    setCheckList(checkList);
    navigate('/blanklist');
  };

  // Sets the boolean value in the DB so that it renders buttom dynamically. 
  async function updateBoolean(booleanData, id) {
    await checkListAPI.updateBoolean(booleanData, id);
    await expressListAPI.updateBoolean(booleanData, id);
    await djangoListAPI.updateBoolean(booleanData, id);
    const checkListBoolean = await checkListAPI.getAll();
    const allDjangoSkills = await djangoListAPI.getAll();
    const allExpressSkills = await expressListAPI.getAll();
    setCheckList(checkListBoolean);
    setDjangoCheckList(allDjangoSkills);
    setExpressCheckList(allExpressSkills);
  };

  async function resetCheckList(checkList) {
    await checkListAPI.resetButton(checkList);
    const newlyResetList = await checkListAPI.getAll();
    setCheckList(newlyResetList);
  }
  async function resetDjangoList(djangoList) {
    await djangoListAPI.resetButton(djangoList);
    const newlyResetList = await djangoListAPI.getAll();
    setDjangoCheckList(newlyResetList);
  }
  async function resetExpressList(expressList) {
    await expressListAPI.resetButton(expressList);
    const newlyResetList = await expressListAPI.getAll();
    setExpressCheckList(newlyResetList);
  }

  useEffect(function () {
    async function getAllItems() {
      if (user) {
        const entireCheckList = await checkListAPI.getAll();
        const allDjangoSkills = await djangoListAPI.getAll();
        const allExpressSkills = await expressListAPI.getAll();
        setCheckList(entireCheckList);
        setDjangoCheckList(allDjangoSkills);
        setExpressCheckList(allExpressSkills);
      };
    };
    getAllItems();
  }, [user]);

  return (
    <main className="App">
      {user ?
        <>
          <Header user={user} setUser={setUser} />
          <Routes>
            <Route path="/blanklist" element={<NewCheckListPage
              checkList={checkList}
              addCheckListItem={addCheckListItem}
              deleteListItem={deleteListItem}
              updateListItem={updateListItem}
              updateBoolean={updateBoolean}
              resetCheckList={resetCheckList}
            />
            }
            />
            <Route path="/" element={<HomePage
              setCheckList={setCheckList}
              user={user} />} />
            <Route path="/:checklist" element={<DevSkillsList
              expressList={expressList}
              djangoList={djangoList}
              updateBoolean={updateBoolean}
              resetDjangoList={resetDjangoList}
              resetExpressList={resetExpressList}
            />} />
            <Route path="/blanklist/:id/update" element={<UpdateCheckListForm
              checkList={checkList}
              updateListItem={updateListItem} />} />
          </Routes>
          <Footer />
        </>
        :
        <>
          <AuthPage setUser={setUser} />
        </>
      }
    </main>
  );
};
