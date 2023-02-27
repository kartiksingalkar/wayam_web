import { Box } from "@mui/system";
import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../CSS/Organisational_info.css";
import img1 from "../Images/management1.png";
import img2 from "../Images/organizationchart2.png";
import img3 from "../Images/organizationchart1.png";

export default function OrganisationalInfo() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Main Container */}
      <Box
        sx={{ width: "95%", margin: "2%", display: "flex", flexWrap: "wrap" }}
      >
        {/* Left Box */}
        <Box className="firstBox">
          <h3 className="h3tag">प्राथमिक माहिती</h3>
          <img className="img1" src={img1} />
        </Box>
        {/* Right Box */}
        <Box
          sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
        >
          {/* Right Box 1 */}
          <Box className="secondBox">
            <h3 className="h3tag">प्राथमिक माहिती</h3>
            <Box>
              <img className="img2" src={img2} />
            </Box>
          </Box>
          {/* Right Box 2 */}
          <Box className="thirdBox">
            <h3 className="h3tag">प्राथमिक माहिती</h3>
            <img className="img2" src={img3} />
          </Box>
        </Box>
      </Box>
      {/* Footer */}
      <Footer />
    </div>
  );
}
