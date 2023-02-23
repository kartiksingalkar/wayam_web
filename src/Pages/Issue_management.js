import React from "react";
import "../CSS/Issue_management.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Issue_management() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Container */}
      <div className="box">
        {/* Back Blue box */}
        <div className="backBox">
          {/* Upper Text */}
          <div>
            <h3>प्रकाशन व्यवस्थापन</h3>
            <h4>शीर्षलेख माहिती</h4>
          </div>
          {/* Input Field */}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
