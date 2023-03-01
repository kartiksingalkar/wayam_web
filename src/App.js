// import './App.css';
// import { BrowserRouter as Router,
//   Route,} from "react-router-dom";
//    import {  Switch } from "react-router";

// import AddButton from '../src/Components/AddButton';
// import SubmitButton from '../src/Components/SubmitButton';
// import SearchBox from '../src/Components/SearchBox';
// import BenefitManagementComponent1 from '../src/Components/BenefitManagementComponent1';
// import BenefitManagementComponent2 from '../src/Components/BenefitManagementComponent2';

// import Librarymanagement from '../src/Pages/Librarymanagement';
// import Dashboard from './Pages/Dashboard';
// import BenefitManagement from '../src/Pages/BenefitMangement';
// import ContentManagement from './Pages/ContentManagement';
// import Organisational_info from './Pages/OrganisationalInfo'
// import NewBenfitPopup from './Pop Up/NewBenfitPopup'
// import PrimaryInformation from '../src/Pages/PrimaryInformation';
// import NewStaffPopup from './Pop Up/NewStaffPopup'

// export default function App() {
//   return (
//     <div>
//     <ContentManagement/>
//     </div>
//   )
// }
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import IssueManagement from "./Pages/IssueManagement";
// import AddButton from '../src/Components/AddButton';
// import SubmitButton from '../src/Components/SubmitButton';
// import SearchBox from '../src/Components/SearchBox';
// import BenefitManagementComponent1 from '../src/Components/BenefitManagementComponent1';
// import BenefitManagementComponent2 from '../src/Components/BenefitManagementComponent2';
// import HeaderBar from '../src/Components/HeaderBar'
import Librarymanagement from "../src/Pages/Librarymanagement";
import Dashboard from "../src/Pages/Dashboard";
import BenefitMangement from "../src/Pages/BenefitMangement";
import ContentManagement from "./Pages/ContentManagement";
import OrganisationalInfo from "./Pages/OrganisationalInfo";
import PrimaryInformation from "./Pages/PrimaryInformation"
import StaffList from "./Components/StaffList";
import NewStaffPopup from "./Pop Up/NewStaffPopup";
// import Issuemanagement from "./Pages/Issuemanagement1"
import Issuemanagement1 from "./Pages/Issuemanagement1";
import NewBenfitPopup from "./Pop Up/NewBenfitPopup";
import NewTemplate from "./Pop Up/NewTemplate";
import NewSubscriberPopup from "./Pop Up/NewSubscriberPopup";
import Login from "./Pages/Login";
import ConfirmPassword from "./Pages/ConfirmPassword"
import ChangePassword from "./Pages/ChangePassword"

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/">
            <Login/>
          </Route>


    <Route path="/confrimpassword">
      <ConfirmPassword/>
    </Route>


    <Route path="/ChangePassword">
      <ChangePassword/>
    </Route>


          <Route exact path="/Home">
            <Dashboard />
          </Route>
          <Route path="/IssueManagement">
            <IssueManagement />
          </Route>

          {/* libraryvyavasthapn */}
          <Route path="/Librarymanagement">
            <Librarymanagement />
          </Route>
          {/* libraryvyavasthapn */}

          {/* prakashanvyavasthapan */}
          <Route path="/BenefitMangement">
            <BenefitMangement />
          </Route>
        
          {/* prakashanvyavasthapan */}

          {/* yojnavyavasthapan */}
          <Route path="/ContentManagement">
            <ContentManagement />
          </Route>
          {/* yojnavyavasthapan */}

          {/* Organisationalinfo */}
          <Route path="/Organisationalinfo">
            <OrganisationalInfo />
          </Route>
          {/* Organisationalinfo */}

          {/* PrimaryInformation */}
          <Route path="/PrimaryInformation">
            <PrimaryInformation />
          </Route>
          
          {/* PrimaryInformation */}

            <Route path="/StaffList">
            <StaffList />
          </Route>

          <Route path="/NewStaffPopup">
            <NewStaffPopup />
          </Route>

          <Route path="/ContentManagement">
            <ContentManagement />
          </Route>

          <Route path="/Issuemanagement1">
            <Issuemanagement1/>
          </Route>

          <Route path='/NewBenfitPopup'>
            <NewBenfitPopup/>
          </Route>

          <Route path="/IssueManagement">
            <IssueManagement/>
          </Route>

          <Route path='/NewTemplate'>
            <NewTemplate/>
          </Route>

          <Route path="/NewSubscriberPopup">
            <NewSubscriberPopup/>
          </Route>


        </Switch>
      </Router>

      {/* <AddButton/> */}
      {/* <SubmitButton/> */}
      {/* <SearchBox/> */}
      {/* <BenefitManagementComponent1/> */}
      {/* <BenefitManagementComponent2/> */}

      {/* <BenefitManagement/> */}

      {/* <HeaderBar/> */}
    </>
  );
}

export default App;
