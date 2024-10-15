import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import {GetVideoFromWatchHistoryAPI,DeleteVideoFromWatchHistoryAPI} from '../services/allAPI';



function Watchhistory() {
  const [allHistoryVideos,setAllHistoryVideos] = useState([])
  const [deleteStatus,setDeleteStatus] = useState(false)
  const videoHistory = async() =>{
    const result = await GetVideoFromWatchHistoryAPI()
    console.log(result);
    setAllHistoryVideos(result.data)
    
  }
  console.log(allHistoryVideos);

  const handleDelete = async(id)=>{
    const result = await DeleteVideoFromWatchHistoryAPI(id)
    if(result.status>=200 && result.status<300)
    {
      setDeleteStatus(true)
    }

  }
  

  useEffect(()=>{
    videoHistory()
    setDeleteStatus(false)
  },[deleteStatus])
  return (
    <>
    <div className='p-4'>
      <div className='d-flex mt-5'>
        <h5>Watch History</h5>
        <Link to={'/home'} style={{textDecoration:'none'}} className='ms-auto'><h5><FontAwesomeIcon icon={faHouse} className='me-3'/><span className='d-none d-md-inline'>Back Home</span></h5></Link>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10 table-responsive">
          {allHistoryVideos?.length>0?
            <Table striped bordered hover className='mt-5'>
            <thead>
              <tr>
                <th>SL.No</th>
                <th>Caption</th>
                <th>Url</th>
                <th>Time Stamp</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allHistoryVideos?.map((item,index)=>(
                <tr>
                <td>{index+1}</td>
                <td>{item?.caption}</td>
                <td>{item?.url}</td>
                <td>{item?.time}</td>
                <td className='text-center'><button className='btn btn-danger'onClick={()=>{handleDelete(item?.id)}}><FontAwesomeIcon icon={faTrash} /></button></td>
              </tr>

              ))}
            </tbody>
            
          </Table>
          :

          <h4 className='text-warning text-center mt-3'>No Watch History</h4>}
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
    </>
  )
}

export default Watchhistory