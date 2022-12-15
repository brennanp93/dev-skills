import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import NewCheckList from '../../components/NewCheckList/NewCheckList';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [checkList, setCheckList] = useState([]);


  useEffect(function() {
    async function getAll() {
      const entireCheckList = await checkListAPI.getAll();
      setCheckList(entireCheckList)
    };
    getAll();
  }, [])



  async function addCheckListItem(checkListData) {
    const newCheckListItem = await checkListAPI.create(checkListData);
    setCheckList([...checkList, newCheckListItem])
    // console.log(newCheckListItem)
  }

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/newchecklist" element={<NewCheckList checkList={checkList} addCheckListItem={addCheckListItem} />} />
            {/* <Route path="/newchecklist" element={<BlankListForm addCheckListItem={addCheckListItem} />} /> */}
            <Route path="/" element={<HomePage />} />
            <Route path="/:checkList" element={<DevSkillsList checkListSteps={checkLists} />} />
            
            <Route path="/blanklist/:newListSteps" element={<BlankList newLists={newLists} />} />
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