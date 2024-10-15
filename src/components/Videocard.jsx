import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { AddWatchHistoryAPI, DeleteVideoFromAllVideosAPI } from '../services/allAPI';



function Videocard({video,setDeleteVideoStatus,ispresent}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async() => {
      setShow(true)

      const time=new Date()

      let formattedDate=new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)

      console.log(formattedDate);
      

      const requestBody={
        caption:video?.caption,
        url:video?.embededLink,
        time:formattedDate

      }
      const result = await AddWatchHistoryAPI(requestBody)

    };

    const handleDelete = async(id) =>{
      const result = await DeleteVideoFromAllVideosAPI(id)
      if(result.status>=200 && result.status<300)
      {
        setDeleteVideoStatus(result.data)
      }
    }

    const videoDrag=(e,video)=>{
      console.log(e);
      e.dataTransfer.setData("videoDetails",JSON.stringify(video))
      

    }

    

    
  return (
    <>
    
        <Card  style={{ width: '100%' }} draggable onDragStart={(e)=>{videoDrag(e,video)}}>
          {!ispresent && <Card.Img onClick={handleShow} variant="top" src={video?.imageUrl} className='w-100' height={'300px'} />}
          <Card.Body className='d-flex justify-content-between'>
            <Card.Text className='text-dark'>{video?.caption}</Card.Text>
            {!ispresent && <Button variant="danger" onClick={()=>{handleDelete(video.id)}}><FontAwesomeIcon icon={faTrash} /></Button>}
          </Card.Body>
        </Card>
    

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="426" src={`${video?.embededLink}?autoplay=1`}  title='badass' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Videocard