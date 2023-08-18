/* eslint-disable no-unused-vars */
import React from "react";
import "./Create.css";
import { useState } from "react";
import { AuthContext, FirebaseContext } from "../../store/FirebaseContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import firebase from 'firebase/compat/app';
import "firebase/storage";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// import { getStorage, ref ,uploadBytes} from '../../firebase/config';

function Create() {
  const [brand, setBrand] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const [location, setLocation] = useState("");
  const [err, setErr] = useState('')
  // const [userExist, setUserExist] = useState(false)

  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const date = new Date()

  // if(user.uid){
  //   setUserExist(true)
  // }else{
  //   setUserExist(false)
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (brand, title, price, image, location) {
      const db = getFirestore();
      const storage = getStorage();
      const storageRef = ref(storage, `/image/${image.name}`);
      console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      uploadBytes(storageRef, image).then((snapshot) => {
        console.log('ffffffffffffffffffffffffffffffff');
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          const productRef = firebase.firestore().collection('products').doc();
          productRef.set({
            brand,
            title,
            price,
            downloadURL,
            location,
            userId: user.uid,
            createdAt: date.toDateString()
          });
          navigate('/')
        });
      });
    } else {
      setErr("All fields are required")
    }
  };

  return (
    <div className="main-section">
      <form action="">
        <div className="border-section">
          <h4 className="main-heading">POST YOUR AD</h4>

          <div className="sub-section">
            <div className="section-title">
              <h5>INCLUDE SOME DETAILS</h5>
            </div>
            <div>
              <label htmlFor="Brand">Brand*</label>
              <br />
              <input
                type="text"
                name="brand"
                id="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="title">Title*</label>
              <br />
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="sub-section">
            <div className="section-title">
              <h5>SET A PRICE</h5>
            </div>
            <div>
              <label htmlFor="price">Price*</label>
              <br />
              <input
                type="tel"
                placeholder="₹"
                name="price"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="sub-section">
            <div className="section-title">
              <h5>UPLOAD A PHOTO</h5>
            </div>
            <div>
              <label htmlFor="photo">Photo*</label>
              <br />
              <input
                type="file"
                name="image"
                id="image"
                ref={image}
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </div>
          <div className="sub-section">
            <div className="section-title">
              <h5>CONFIRM YOUR LOCATION</h5>
            </div>
            <div>
              <label htmlFor="loaction">Loaction*</label>
              <br />
              <input
                type="text"
                placeholder="State, Country"
                name="location"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="sub-section">
            <div>
              <p>{err ? err : ""}</p>
            </div>
            <div>
              <button onClick={handleSubmit} className="form-btn">
                Post
              </button>
            </div>
          </div>

        </div>
      </form>
    </div>
  );
}

export default Create;
