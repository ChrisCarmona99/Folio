import React, { useState, Component } from 'react';
import { BsPersonCircle } from "react-icons/bs";
import { auth } from '../firebaseConfig';


const Profile = () => {
    const [bio, setBio] = useState("");
    const [location, setLocation] = useState("");
    const [review, setReview] = useState("");
    const [input, setInput] = useState('');
    const [tags, setTags] = useState([]);   
    const [skill, setSkill] = useState([]);
    const [certification, setCertification] = useState([]);
    const [isKeyReleased, setIsKeyReleased] = useState(false);
 

    const onChange = (e) => {
        const { value } = e.target;
        setInput(value);
      };

    const onKeyDown = (e) => {
        const { key } = e;
        const trimmedInput = input.trim();
      
        if (key === ',' && trimmedInput.length && !tags.includes(trimmedInput)) {
          e.preventDefault();
          setTags(prevState => [...prevState, trimmedInput]);
          setInput('');
        }
      
        if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
          const tagsCopy = [...tags];
          const poppedTag = tagsCopy.pop();
          e.preventDefault();
          setTags(tagsCopy);
          setInput(poppedTag);
        }
      
        setIsKeyReleased(false);
      };
      
      const onKeyUp = () => {
        setIsKeyReleased(true);
      }

      const deleteTag = (index) => {
        setTags(prevState => prevState.filter((tag, i) => i !== index))
      }


    return (
    <div className="profileContent">
        <div className="profileOverview">
            <BsPersonCircle size={100} icon="avatar" />
            <h1>Name</h1>
            <input
                required
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                maxLength="140"
            ></input>
            <div className="userDetails">
                From <input value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
        </div>
        <div className="certifications">
            <h1>Certifications</h1>
            
        </div>
        <div className="skills">
            <h1>Skills</h1>
            <input
                value={input}
                placeholder="Enter a tag"
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                onChange={onChange}
            />
            {tags.map((tag, index) => (
  <div className="tag">
    {tag}
    <button onClick={() => deleteTag(index)}>x</button>
  </div>
))}    
        </div>
        <div className="portfolioPreview">
            <h1>My Portfolio</h1>
        </div>
        <div className="reviews">
            <h1>Reviews</h1>
            <textarea
                rows="3"
                value={review}
                onChange={(e) => setReview(e.target.value)}></textarea>
            <button>Submit</button>
        </div>
       
    </div>
  );
}

export default Profile;