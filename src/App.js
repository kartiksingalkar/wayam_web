import './App.css';
import { BrowserRouter as Router,  
  Route,} from "react-router-dom";
   import {  Switch } from "react-router";
import Issue_management from './Pages/Issue_management';
import AddButton from '../src/Components/AddButton';
import SubmitButton from '../src/Components/SubmitButton';
import SearchBox from '../src/Components/SearchBox';
import BenefitManagementComponent1 from '../src/Components/BenefitManagementComponent1';
import BenefitManagementComponent2 from '../src/Components/BenefitManagementComponent2';

import Librarymanagement from '../src/Pages/Librarymanagement';
import Dashboard from '../src/Pages/Dashboard';
import BenefitManagement from '../src/Pages/BenefitMangement';
import ContentManagement from './Pages/ContentManagement';

function App() {
  return (
    <>
    {/* <Router>
   <Switch>
   <Route exact path="/">
       <Dashboard/>
    </Route>
    <Route path="/Issue_management">
    <Issue_management/>
    </Route>
    
    <Route path="/Librarymanagement">
    <Librarymanagement/>
    </Route>
    
    <Route path="/BenefitMangement">
    <BenefitManagement/>
    </Route>
    <Route path="/ContentManagement">
   <ContentManagement/>
    </Route>
   </Switch> */}
      
       {/* <AddButton/> */}
       {/* <SubmitButton/> */}
       {/* <SearchBox/> */}
       {/* <BenefitManagementComponent1/> */}
       {/* <BenefitManagementComponent2/> */}
       
       <BenefitManagement/>
       
       
    
       {/* </Router> */}
      </>
  );
}

export default App;
