import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ContentInside from "../Components/ContentInside";
import { Box } from "@mui/material";
import SearchContentM from "../Components/SearchContentM";
import LinkContent from "../Components/LinkContent";
import AddMajkur from "../Components/AddMajkur";
import SadarMajkur from "../Components/SadarMajkur";
import SearchDownContent from "../Components/SearchDownContent";

export default function ContentManagement() {
  return (
    <div>
      <Header />

      <Box sx={{ mx: "8%" }}>
        <LinkContent
          link_title1={"लायब्ररी व्यवस्थापन"}
          link_title2={" /लायब्ररी व्यवस्थापन"}
        />
      </Box>
      <Box sx={{ mx: "8%", mt: "-1%" }}>
        <AddMajkur />
      </Box>

      <Box sx={{ justifyContent: "center" }}>
        <SearchContentM />
      </Box>
      {/* main serachbox */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: 'wrap',
        }}
      >
        <ContentInside
          title_head={"लिखित साहित्य "}
          pla1={"फाएलाचे नाव "}
          pla2={"पृष्ठांची संख्या"}
          pla3={"साईज"}
          pla4={"ओळींची संख्या"}
          pla5={"अपलोड फाइल"}
        />
        <ContentInside
          title_head={"कथाकथान  "}
          pla1={"फाएलाचे नाव "}
          pla2={"पृष्ठांची संख्या"}
          pla3={"साईज"}
          pla4={"ओळींची संख्या"}
          pla5={"अपलोड फाइल"}
        />
        <ContentInside
          title_head={"ध्रुक्श्रव्य "}
          pla1={"फाएलाचे नाव "}
          pla2={"पृष्ठांची संख्या"}
          pla3={"साईज"}
          pla4={"ओळींची संख्या"}
          pla5={"अपलोड फाइल"}
        />
      </Box>
            <Box sx={{ mx: "8%" }}>
              <SadarMajkur />
            </Box>
            <Box>
              <SearchDownContent />
            </Box>  
<Box sx={{mt:5}}>
<Footer />
</Box>
     
    </div>
  );
}
