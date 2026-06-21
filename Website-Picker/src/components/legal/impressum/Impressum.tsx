import "./Impressum.css";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";

export default function Impressum() {
  const [, navigate] = useLocation();

  const [showDelete, setShowDelete] = useState(false);

  const back = () => {
    navigate("/");
  };

  const deleteCookies = () => {
    localStorage.removeItem("Website-Picker-Cookies");
    setShowDelete(false);

  }

  useEffect(() => {
      const stored = localStorage.getItem("Website-Picker-Cookies");
      if (stored === "true") {
        setShowDelete(true);
      }else{
        setShowDelete(false);
      }
    }, []);

  return (
    <>
      <div className="back-link" onClick={back}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-box-arrow-in-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z"
          />
          <path
            fill-rule="evenodd"
            d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708z"
          />
        </svg>{" "}
        Back
      </div>
      <div className="around-box">
        <div className="center-box-imprint">
          <p>
            Contact me on{" "}
            <a
              href="https://www.instagram.com/moki.pictures?igsh=MXdtdXF5Z2o3ZGFkNQ%3D%3D&utm_source=qr"
              target="_blank"
            >
              Instagram
            </a>
            , if you have any questions!
          </p>
          {showDelete && <div className="delete-cookies" onClick={deleteCookies}>Delete cookies</div>}
        </div>
      </div>
    </>
  );
}
