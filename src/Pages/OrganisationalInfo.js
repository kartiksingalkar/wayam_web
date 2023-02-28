import { Box } from "@mui/system";
import {React , useState} from "react";
import Footer from "../Components/Footer";
// import Header from "../Components/Header";
import "../CSS/Organisational_info.css";
import img1 from "../Images/management1.png";
import img2 from "../Images/organizationchart2.png";
import img3 from "../Images/organizationchart1.png";
import HeaderBar from '../Components/HeaderBar'
import { Link } from "react-router-dom";
import StaffList from "../Components/StaffList";

export default function OrganisationalInfo() {
  const [open, setOpen] = useState(false)

  const openStaffList = () =>{
      setOpen(!open)
  }

  return (
    <div>
      {/* Header */}
      <HeaderBar />
      {/* Main Container */}
      <Box
        sx={{ width: "95%", margin: "1%", display: "flex", flexWrap: "wrap" }}
      >
        {/* Left Box */}
        <Box className="firstBox">
        <Link to="/PrimaryInformation">
 
          <h3 className="h3tag">प्राथमिक माहिती</h3>
          <img className="img1" alt="hello" src={img1} />
             </Link>
        </Box>
     
        {/* Right Box */}
        <Box
          sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
        >
          {/* Right Box 1 */}
          <Box className="secondBox" onClick={openStaffList}>
            <h3 className="h3tag">प्राथमिक माहिती</h3>
            <Box>
              <img className="img2" alt="hello" src={img2} />
            </Box>
          </Box>
          {/* Right Box 2 */}
          <Box className="thirdBox">
            <h3 className="h3tag">प्राथमिक माहिती</h3>
            <img className="img2" alt="hello" src={img3} />
          </Box>
        </Box>
      </Box>
      {/* Footer */}
      <Footer />
      {
        open && (
          <StaffList open={open} setOpen={setOpen}/>
        )
      }

    </div>
  );
}
