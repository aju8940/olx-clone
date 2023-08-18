/* eslint-disable no-unused-vars */
import React,{useContext,useEffect,useState} from 'react'
import './View.css'
import { PostContext } from '../../store/PostContext'
import { FirebaseContext } from '../../store/FirebaseContext'
import { collection, query, where, getDocs,getFirestore } from "firebase/firestore";

function View() {
  const [userDetails,setUserDetails] = useState()
  const {postDetail} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)
  const db = getFirestore();
  useEffect(()=>{
    const {userId} = postDetail
    const q = query(collection(db, "users"), where("id", "==", userId));
    const querySnapshot = getDocs(q)
    querySnapshot.then((snapshot)=>{
      snapshot.forEach((doc) => {
        setUserDetails(doc.data())
        console.log(doc.id, " => ", doc.data());
      });
    })
  })
  return (
    
    <div className='full-page'>
      {postDetail?
      <div className='container view-main'>
        <div className='row mx-auto'>
          <div className=' left-section-view col-md-8'>
              <div className='large-image-holder'>
                <img className='large-image' src={postDetail.downloadURL} alt="" />
              </div>
          </div>
          <div className='right-section-view col-md-4'>
            <div className='view-right-top border'>
              <div className='view-content'>
                <div className='view-price'>
                  <h4>₹ {postDetail.price} </h4>
                </div>
                <div className='view-title'>
                  <p>{postDetail.title}, {postDetail.brand}</p>
                </div>
                <div className='view-address d-flex'>
                    <div>
                      <p>{postDetail.location}</p>
                    </div>
                    <div>
                      <p>{postDetail.createdAt}</p>
                    </div>
                </div>
              </div>
            </div>
            <div className='view-right-bottom border'>
              <div className='view-content'>
                <div className='view-user-content d-flex'>
                  <div className='view-user-img'>
                  </div>
                  {userDetails && 
                  <div className='view-username'>
                    <p><b>{userDetails.name}</b></p>
                  </div>}
                </div>
                <div className='chat-btn-wrap'>
                  <button className='chat-btn'>Chat with seller</button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className='view-product-content'>
          <div className='view-sub-content border p-5 m-5'>
            <h5><b>Details</b></h5>
            <div className='view-brand d-flex'>
              <p>Brand</p>
              <p>{postDetail.brand}</p>
            </div>
            <hr />
            <h5><b>Description</b></h5>
            <div className='view-description'>
              <p>The Bard Smart Speaker is the perfect way to stay connected, entertained, and informed. With its powerful voice assistant, you can control your smart home devices, get the latest news and weather, play music, and more. The Bard Smart Speaker also features a high-quality speaker for clear and immersive sound.</p>
            </div>
          </div>
        </div>
      </div>:""}
    </div>
  
  )
}

export default View
