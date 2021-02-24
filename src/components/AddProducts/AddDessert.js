import React, { useState } from "react";
import {storage, db} from "../../Firebase";
import Navbar from "../Navbar/UserNavbar/Navbar";
import Sidebar from "../Sidebar";


const AddDessert = ({user}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const types = ['image/png', 'image/jpeg'];


  const ImageHandler=(e)=>{
      let selectedFile = e.target.files[0];
      if(selectedFile && types.includes(selectedFile.type)){
          setImage(selectedFile);
          setError('')
      }
      else{
          setImage(null);
          setError("Please select a valid image type png or jpeg");
      }

  }

  const addproduct=(e)=>{
      e.preventDefault();
      console.log(name, price);
      const uploadTask = storage.ref(`dessert-images/${image.name}`).put(image);
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
        }, err => setError(err.message)
            , () => {
                storage.ref('dessert-images').child(image.name).getDownloadURL().then(url => {
                    db.collection('Desserts').add({
                        ProductName: name,
                        ProductDescription: description,
                        ProductPrice: Number(price),
                        ProductImg: url
                    }).then(() => {
                        setName('');
                        setDescription('');
                        setPrice(0)
                        setImage('');
                        setError('');
                        document.getElementById('file').value = '';
                    }).catch(err => setError(err.message))
                })
            })
  }

  const [isOpen,setIsOpen] = useState(false);
  const toggle=()=>{
      setIsOpen(!isOpen);
  };

  return (

    <>
    <Navbar user={user} toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
     
    <div className="container">

     
      <br />
      <h2> Add Dessert</h2>
      <hr />

      <form autoComplete="off" className="form-group" onSubmit={addproduct}>
        <label htmlFor="product-name"> Name </label>
        <br />
        <input type="text" className="form-control" required
        onChange ={(e)=>{ setName(e.target.value)}} value={name} />

        <label htmlFor="product-description"> Description </label>
        <br />
        <input type="text" className="form-control" required
        onChange ={(e)=>{ setDescription(e.target.value)}} value={description} />

        <label htmlFor="product-price"> Price </label>
        <br />
        <input type="number" className="form-control" required
        onChange ={(e)=>{ setPrice(e.target.value)}} value={price} />
        <br />
        <label htmlFor="product-img"> Image </label>
        <br />

        <input type="file" className="form-control " id="file" onChange={ImageHandler} />

        <br />

        <button className=" btn btn-success btn-md"> Add </button>
      </form>

      {error  && <span> {error} </span>}
    </div>

    </>
  );
};

export default AddDessert;