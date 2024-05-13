import "./App.css";
import { BrowserRouter , HashRouter, Route } from "react-router-dom";
import { Switch } from "react-router";
import IssueManagement from "./Pages/IssueManagement";
import Librarymanagement from "../src/Pages/Librarymanagement";
import Dashboard from "../src/Pages/Dashboard";
import BenefitMangement from "../src/Pages/BenefitMangement";
import ContentManagement from "./Pages/ContentManagement";
import OrganisationalInfo from "./Pages/OrganisationalInfo";
import PrimaryInformation from "./Pages/PrimaryInformation";
import StaffList from "./Components/StaffList";
import NewStaffPopup from "./Pop Up/NewStaffPopup";
// import Issuemanagement from "./Pages/Issuemanagement1"
import Issuemanagement1 from "./Pages/Issuemanagement1";
import NewBenfitPopup from "./Pop Up/NewBenfitPopup";
import NewTemplate from "./Pop Up/NewTemplate";
import NewSubscriberPopup from "./Pop Up/NewSubscriberPopup";
import Login from "./Pages/Login";
import ConfirmPassword from "./Pages/ConfirmPassword";
import ChangePassword from "./Pages/ChangePassword";
import PublisherNew from "./Pages/PublisherNew";
import IssueStatus from "./Pages/IssueStatus";
import BannerPage from "./Pages/BannerPage";

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route path="/confrimpassword">
            <ConfirmPassword />
          </Route>

          <Route path="/ChangePassword">
            <ChangePassword />
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
            <Issuemanagement1 />
          </Route>

          <Route path="/NewBenfitPopup">
            <NewBenfitPopup />
          </Route>

          <Route path="/IssueManagement">
            <IssueManagement />
          </Route>

          <Route path="/NewTemplate">
            <NewTemplate />
          </Route>

          <Route path="/NewSubscriberPopup">
            <NewSubscriberPopup />
          </Route>

          <Route path="/PublisherNew">
            <PublisherNew />
          </Route>
          <Route path="/issuestatus">
            <IssueStatus />
          </Route>
          <Route path="/addbanner">
            <BannerPage />
          </Route>
          
        </Switch>
      </HashRouter>

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
