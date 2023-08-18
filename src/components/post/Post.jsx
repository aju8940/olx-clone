/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Post.css'
import Heart from '../../assets/Heart'
import firebase from 'firebase/compat/app';
import { collection, getDocs,getFirestore, doc } from "firebase/firestore";
// import { FirebaseContext } from '../../store/FirebaseContext'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../store/PostContext';

function Post() {
    const {setPostDetail} = useContext(PostContext)
    const [products,setProducts] = useState([])
    const db = getFirestore();
    const navigate = useNavigate()
    useEffect(()=>{
        const querySnapshot = getDocs(collection(db, "products"));
        querySnapshot.then((snapshot)=>{
            const allPost = snapshot.docs.map((product)=>{
                return{
                    ...product.data(),
                    id:product.id
                }
            })
            setProducts(allPost)
          });
        
    })
  return (
    <div className='main-wrapper container'>
        <span>Fresh recommendations</span>
        <div className='row'>
            <div className='col-md-12 wraper d-flex flex-wrap'>
                {
                    products.map((product)=>{
                        return <div className='col-md-3 col-6'>
                            <div className="card" onClick={()=>{setPostDetail(product); navigate('/view')}}>
                                <img className="card-img-top" src={product.downloadURL} alt="Card image"/>
                                <div className='heart bg-white'>
                                    <Heart />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">₹ {product.price}</h4>
                                    <p className="card-text">{product.title},{product.brand}</p>
                                    <div className='d-flex bottom-text'>
                                        <p className="details">{product.location}.</p>
                                        <p className="details">{product.createdAt}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Post
