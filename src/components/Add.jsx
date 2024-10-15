import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddVideoApi } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setAddVideoStatus}) {


  const [videoDetails,setvideoDetails] = useState(
    {
      caption:"",
      imageUrl:"",
      embededLink:""
    }
  )


  const [show, setShow] = useState(false);

  console.log(videoDetails);
  
  const handleClose = () => {
    handleCancel()
    setShow(false);
  }
  const handleShow = () => setShow(true);
  /* const getLink = (e) =>{
    const link = e.target.value
    console.log(link);
    if(link.startsWith('https://youtu.be/'))
    {
      const embedLink=`https://www.youtube.com/embed/${link.slice(17,28)}`
      setvideoDetails({...videoDetails,embededLink:embedLink})
    }
    else
    {
      const embedLink=`https://www.youtube.com/embed/${link.slice(-11)}`
      setvideoDetails({...videoDetails,embededLink:embedLink})
    }
  }
  */
 const handleCancel = () =>{
  setvideoDetails({
    caption:"",
      imageUrl:"",
      embededLink:""
  })
 }

 const handleUpload =async () =>{
const {caption , imageUrl, embededLink} = videoDetails
if(!caption || !imageUrl ||!embededLink)
{
  toast.info('Please fill the details completely')
}
else
{
  if(videoDetails.embededLink.startsWith('https://youtu.be/'))
    {
      const embed=`https://www.youtube.com/embed/${videoDetails.embededLink.slice(17,28)}`
      
      const result = await AddVideoApi({...videoDetails,embededLink:embed})
      console.log(result);
      if(result.status >=200 && result.status<=299)
      {
        toast.success('Video uploaded successfully')
        handleClose()
        setAddVideoStatus(result.data)
      }
      else
      {
        toast.error('Oops, something went wrong')
        handleClose()
      }
    }
    else
    {
      const embed=`https://www.youtube.com/embed/${videoDetails.embededLink.slice(-11)}`
  
      const result = await AddVideoApi({...videoDetails,embededLink:embed})
      console.log(result);
      if(result.status >=200 && result.status<=299)
        {
          toast.success('Video uploaded successfully')
          handleClose()
          setAddVideoStatus(result.data)

        }
        else
        {
          toast.error('Oops, something went wrong')
          handleClose()
        }
    }
}


 }
    
    
    
    
  return (
    <>
    <div className='d-flex align-items-center'>
      <button className='btn' onClick={handleShow}><h5><span className='d-none d-md-inline'>Upload New Video</span><FontAwesomeIcon icon={faCloudArrowUp} className='ms-3'/></h5></button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-3' />Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Please fill the following details</h6>
          <div className='container border border-dark rounded mt-3 p-3'>
            <form action=''>
              <input value={videoDetails.caption} onChange={(e)=>setvideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder='Video Caption' className='form-control ' />
              <input value={videoDetails.imageUrl} onChange={(e)=>setvideoDetails({...videoDetails,imageUrl:e.target.value})} type="text" placeholder='Video Image' className='form-control mt-3' />
              <input value={videoDetails.embededLink} onChange={(e)=>setvideoDetails({...videoDetails,embededLink:e.target.value})} type="text" placeholder='Video Url' className='form-control mt-3 ' />
            </form>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' autoClose='2000' theme='colored' />
    </div>
    </>
  )
}

export default Add