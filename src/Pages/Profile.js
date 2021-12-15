import React, { useCallback, useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
// import EdiText from "react-editext";
import { database, auth } from "../firebaseConfig";
import { collection, query, getDocs, addDoc, where } from "firebase/firestore";

const Profile = () => {
  const [bio, setBio] = useState("Enter your bio");
  const [bioInput, setBioInput] = useState("");
  const [skill, setSkill] = useState([]);
  const [skillsInput, setSkillsInput] = useState("");
  const [certification, setCertification] = useState([]);
  const [certificationInput, setCertificationInput] = useState("");

  const Init = () =>
    useCallback(async () => {
      await getCertifications();
      await getSkills();
    }, []);

  useEffect(Init(), []);

  const getCertifications = async () => {
    const certificationRef = query(
      collection(database, "certifications"),
      where("user", "==", auth.currentUser.uid)
    );
    const snapshot = await getDocs(certificationRef);
    if (snapshot.size) {
      snapshot.forEach((doc) => {
        setCertification((certification) => [
          ...certification,
          { id: doc.id, ...doc.data() },
        ]);
      });
    }
  };

  const handleCertificationChange = (e) => {
    setCertificationInput(e.target.value);
  };

  const addCertification = () => {
    if (certificationInput) {
      addDoc(collection(database, "certifications"), {
        user: auth.currentUser.uid,
        certification: certificationInput,
      })
        .then((res) => {
          setCertification([]);
          getCertifications();
        })
        .catch((e) => console.log("Error", e));
    }
  };

  const getSkills = async () => {
    const skillRef = query(
      collection(database, "skills"),
      where("user", "==", auth.currentUser.uid)
    );
    const snapshot = await getDocs(query(skillRef));
    if (snapshot.size) {
      snapshot.forEach((doc) => {
        setSkill((skills) => [...skills, { id: doc.id, ...doc.data() }]);
      });
    }
  };

  const handleSkillChange = (e) => {
    setSkillsInput(e.target.value);
  };

  const addSkill = (e) => {
    if (skillsInput) {
      addDoc(collection(database, "skills"), {
        user: auth.currentUser.uid,
        skill: skillsInput,
      })
        .then((res) => {
          setSkill([]);
          getSkills();
        })
        .catch((e) => console.log("Error", e));
    }
  };

  // // get, add, set userBio
  // const getUserBio = async () => {
  //   const userBioRef = collection(database, "userbio");
  //   const snapshot = await getDocs(query(userBioRef));
  //   if (snapshot.size) {
  //     snapshot.forEach((doc) => {
  //       const data = doc.data()
  //       setBio(data.bio);
  //     });
  //   }
  // };

  // const handleBioChange = (e) => {
  //   console.log(e);
  //   setBioInput(e.target.value);
  // };

  // const addUserBio = () => {
  //   if (bioInput) {
  //     addDoc(collection(database, "userbio"), {
  //       //TODO: Provide userID
  //       //user: ,
  //       bio: bioInput,
  //     })
  //       .then((res) => {
  //         console.log("i was added::", res);
  //         setBio();
  //         getUserBio();
  //       })
  //       .catch((e) => console.log("Error", e));
  //   }
  // };

  return (
    <div className="profileContent">
      <div className="profileOverview">
        <BsPersonCircle size={100} icon="avatar" />
        <h1>{auth.currentUser.displayName}</h1>
        <div className="biography">
          {/* <EdiText
            required
            className="bio"
            type="text"
            value={bio}
            onSave={addUserBio}
            onChange={handleBioChange}
            submitOnEnter={addUserBio}
          /> */}
        </div>
      </div>
      <div className="certifications">
        <h1>Certifications</h1>
        <input
          type={"text"}
          placeholder="Add a certification"
          onChange={(e) => handleCertificationChange(e)}
          name="certification"
        />
        <button onClick={(e) => addCertification(e)}> Add </button>
        {certification.length
          ? certification.map((data, i) => {
              return <p key={i}>{data.certification}</p>;
            })
          : null}
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <input
          type={"text"}
          placeholder="Add a skill"
          onChange={(e) => handleSkillChange(e)}
          name="skill"
        />
        <button onClick={(e) => addSkill(e)}> Add </button>
        {skill.length
          ? skill.map((data, i) => {
              return <p key={i}>{data.skill}</p>;
            })
          : null}
      </div>
      <div className="portfolioPreview">
        <h1>My Portfolio</h1>
      </div>
    </div>
  );
};

export default Profile;
