import React, { useState, useEffect } from 'react'
import Videocard from './Videocard'
import { AddVideoToCategoryAPI, GetVideoAPi } from '../services/allAPI'

function Allvideos({addVideoStatus,setVideoStatus}) {

  const [allvideos,setallvideos] = useState([])
  const [deleteVideoStatus,setDeleteVideoStatus] = useState({})

  const getAllVideos = async()=>{
    const result = await GetVideoAPi()
    setallvideos(result.data)
  }
console.log(allvideos);

const ondrop=(e) =>{
  e.preventDefault()
}

const videoDrop =async (e)=>{
  const {category,video}=JSON.parse(e.dataTransfer.getData("datashare"))
  console.log(category,video);

  const newArray = category?.Allvideos?.filter((items)=>(items.id!=video.id))
  console.log(newArray);
  
  const newCategory={
    category:category.category,
    Allvideos:newArray,
    id:category.id
  }

  const result = await AddVideoToCategoryAPI(category.id,newCategory)
  console.log(result);
  
  if(result.status>=200 && result.status<300)
  {
    setVideoStatus(result.data)
   
  }

  
}

  useEffect(()=>{
    getAllVideos()
  },[addVideoStatus,deleteVideoStatus])
  

  return (  
    <>
    <div droppable onDragOver={(e)=>{ondrop(e)}} onDrop={(e)=>{videoDrop(e)}}>
      <h4>All Videos</h4>
      {/* added video */}
      {allvideos.length>0?
      <div className="container">
        <div className="row">
          { allvideos.map((item)=>(
            <div className="col-md-3 p-2">
            <Videocard video={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
          </div>
          ))
            }
        </div>
      </div>
  
      :
  
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <img src="https://yt3.googleusercontent.com/ytc/AOPolaRT-gbZvWz3qn1QOUAjPSlJIhB0twb-nrmUDqZTnw=s900-c-k-c0x00ffffff-no-rj" alt="no image" className='w-100'/>
            <h5 className='text-center text-warning'>No Videos Added Yet</h5>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      }
    </div>
    
    </>
  )
}

export default Allvideos