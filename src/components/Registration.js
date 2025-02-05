import React from "react";
import { useState } from "react";
import "./Registration.css";

function Registration() {
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [phone, setPhone] = useState("");
  const [team, setTeam] = useState("");
  const [enroll, setEnroll] = useState("");
  const [enroll1, setEnroll1] = useState("");
  const [enroll2, setEnroll2] = useState("");
  const [enroll3, setEnroll3] = useState("");
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");

  const [showmodal,setShowmodal]=useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        branch,
        phone,
        team,
        enroll,
        name1,
        name2,
        name3,
        enroll1,
        enroll2,
        enroll3,
      }),
    })
    .then(function(response) {
      console.log(response.status); // Will show you the status
      if (response.status===200) {
          setShowmodal(true);
      }})
  };

  const closeModal=()=>{
    setShowmodal(false);
    setName('');
    setTeam('');
    setBranch('');
    setPhone('');
    setEnroll('');
    
  }
  return (
    <>
    <div className="R-container">
      <div className="r-main form1">
        <h2>
          CINEQUEST <br />
          Registration Form
        </h2>
        <h5>Leader details</h5>

        <div className="line"></div>

        <form className="formcss" action="">
          <label>TeamName</label>
          <input
            onChange={(e) => {
              setTeam(e.target.value);
            }}
            value={team}
            type="text"
          />
          <label>Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            type="text"
          />
          <label>Branch</label>
          <input
            onChange={(e) => {
              setBranch(e.target.value);
            }}
            value={branch}
            type="text"
          />
          <label>Phone no.</label>
          <input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
            type="text"
          />
          <label>Enrollment No.</label>
          <input
            onChange={(e) => {
              setEnroll(e.target.value);
            }}
            value={enroll}
            type="text"
          />
        </form>
      </div>
      <div className="r-main">
        <h2>
          CINEQUEST <br />
          Registration Form
        </h2>
        <h5>Member details</h5>

        <div className="line"></div>

        <form className="formcss" action="">
          <div className="member">
            <label className="item-1">Name1</label>
            <input
              className="item-2"
              onChange={(e) => {
                setName1(e.target.value);
              }}
              value={name1}
              type="text"
            />
            <label className="item-3">Enroll No.</label>
            <input
              className="item-4"
              onChange={(e) => {
                setEnroll1(e.target.value);
              }}
              value={enroll1}
              type="text"
            />
          </div>
          <div className="member">
            <label className="item-1">Name2</label>
            <input
              className="item-2"
              onChange={(e) => {
                setName2(e.target.value);
              }}
              value={name2}
              type="text"
            />
            <label className="item-3">Enroll No.</label>
            <input
              className="item-4"
              onChange={(e) => {
                setEnroll2(e.target.value);
              }}
              value={enroll2}
              type="text"
            />
          </div>
          <div className="member">
            <label className="item-1">Name3</label>
            <input
              className="item-2"
              onChange={(e) => {
                setName3(e.target.value);
              }}
              value={name3}
              type="text"
            />
            <label className="item-3">Enroll No.</label>
            <input
              className="item-4"
              onChange={(e) => {
                setEnroll3(e.target.value);
              }}
              value={enroll3}
              type="text"
            />
          </div>

          {/* <button>Submit</button> */}
        </form>
      </div>
      <div>
        <button onClick={handleSubmit} className="btn">
          Submit
        </button>
      </div>

      {showmodal &&
        <div className="modal">
          <div className="modal-content">
            
            <p>Thanks<br/>Your details has been successfully submitted</p>
            <button  onClick={closeModal}>Close</button>
          </div>
        </div>
      }
      
    </div>

    

    </>
  );
}

export default Registration;
