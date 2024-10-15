import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Videocard from './Videocard';
import { AddCategoryNameAPI, AddVideoToCategoryAPI, DeleteCategoryAPI, GetAllCategoryNameAPI } from '../services/allAPI';
import { toast } from 'react-toastify';

function Category({videoStatus}) {
  const [categoryName, setCategoryName] = useState('')
  const [allCategory,setAllCategory] = useState([])
  const [addCategoryStatus,setAddCayegoryStatus] = useState({})
  const [deleteStatus,setDeleteStatus] =useState({})
  const [videoCategoryStatus,setVideoCategoryStatus]=useState({})
  
  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false)
    handleCancel()
  }
  const handleShow = () => setShow(true);

  const handleCancel = () =>{
    setCategoryName('')
  }

  const handleUpload = async()=>{
    if(categoryName)
    {
      const reqBody ={
        category:categoryName,
        Allvideos:[]
  
      }
      const result = await AddCategoryNameAPI(reqBody)
      console.log(result);
      if(result.status>=200 && result.status<300)
      {
        toast.success('Category added succesffully')
        handleClose()
        setAddCayegoryStatus(result.data)
      }
      else
      {
        toast.error('Please fill the details correctly')
        handleClose()
      }
      
    }
    else
    {
      toast.info('Please fill the details')
    }
    
  }

  const getCategory = async()=>{
    const result = await GetAllCategoryNameAPI() 
    console.log(result);
    
    setAllCategory(result.data);
  }

  console.log(allCategory);

  const handleDelete = async(id)=>{
    const result=await DeleteCategoryAPI(id)
   if(result.status>=200 && result.status<300)
   {
    setDeleteStatus(result.data)
   }
  }

  const ondrag = (e)=>{
    e.preventDefault()
  }

  const videoDrop = async(e,categoryDetails) =>{
    console.log(categoryDetails);

    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(videoDetails);

    if(categoryDetails?.Allvideos?.find((item)=>(item.id==videoDetails.id)))
    {
      toast.error("video already in category")
    }

    else
    {
      categoryDetails?.Allvideos?.push(videoDetails)
      const result = await AddVideoToCategoryAPI(categoryDetails.id,categoryDetails)

    if(result.status>=200 && result.status<300)
    {
      toast.success("Video added successfully")
      setVideoCategoryStatus(result.data)
    }

    else
    {
      toast.error("Something went wrong")
    }
    }

    
    
    

  }

  const videoDrag =(e,video,category)=>{
    console.log(video);
    console.log(category);
    console.log(e);

    const datashare = {
      category,video
    }

    e.dataTransfer.setData("datashare",JSON.stringify(datashare))
    
    
    
  }


  

  useEffect(()=>{
    getCategory()

  },[addCategoryStatus,deleteStatus,videoCategoryStatus,videoStatus])
  
  return (
    <>
    <h5>Category</h5>
    <button className='btn btn-warning w-100 mt-3' onClick={handleShow}>Add Category</button>
    {allCategory?.length>0 && 
    allCategory?.map((item)=>(   
      <div>
        <div className='border border-dark mt-3 p-3 rounded ' onDragOver={(e)=>{ondrag(e)}} onDrop={(e)=>{videoDrop(e,item)}}>
          <div className='d-flex justify-content-between'>
            <h6>{item?.category}</h6>
            <button onClick={()=>{handleDelete(item.id)}} className='btn btn-danger'><FontAwesomeIcon icon={faTrash} /></button>
          </div>
          {
          item?.Allvideos?.length>0 && 
          item?.Allvideos?.map((video)=>(
            <div className='mt-3' draggable onDragStart={(e)=>{videoDrag(e,video,item)}}>
            <Videocard video={video} ispresent={true}/>
          </div>))}
          
          
        </div>
        
        
        

          
          
      </div>
      )
    )}
      
      
    

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border border-dark p-3 rounded'>
            <input value={categoryName} type="text" placeholder='Category Name' className='form-control' onChange={(e)=>{setCategoryName(e.target.value)}} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      
    </>
  )
}

export default Category