import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainMenu from "./navigation/mainPage";
import Customers from './navigation/Customers';
import Yoman from './navigation/Yoman';
import TorimLehaiom from './navigation/TorimLehaiom';
import TorimLehishur from './navigation/TorimLehishur';
import Activity from './navigation/Activity';
import ImportContacts from './navigation/ImportContacts';
import Reports from './navigation/Reports';

function App() {
  return (
    <BrowserRouter>
<MainMenu></MainMenu>
    <Routes>
      <Route path="/yoman" element={<Yoman/>}></Route>
      <Route path="/torimLehaiom" element={<TorimLehaiom/>}></Route>
      <Route path="/activity" element={<Activity/>}></Route>
      <Route path="/torimLehishur" element={<TorimLehishur/>}></Route>
      <Route path="/customers" element={<Customers/>}></Route>
      <Route path="/importContacts" element={<ImportContacts/>}></Route>
      <Route path="/reports" element={<Reports/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;