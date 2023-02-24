import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import {Image,Button} from 'react-bootstrap';
import Operatingtime from './Operatingtime';
import Review from './Review';
import { useDispatch,useSelector } from 'react-redux';

function ViewRest() {

  const params=useParams()
  // console.log(params.id);

 
  //   const [allrestautant, setallrestaurant] = useState([])
  
  //   // function to api call for datas iside json file
  
  //   const restaurantdata = async () => {
  //     await fetch('/restaurants.json').then(data => {
  //       data.json().then(result => {
  //         // console.log(result);
  //         setallrestaurant(result.restaurants)
  
  //       })
  //     })
  //   }
    
  
    useEffect(() => {
      // restaurantdata()
    }, [])

    const result=useSelector(state=>state.restaurantReducer)
const {restaurantList}=result

const restdata= restaurantList.find(item=>item.id==params.id)
    console.log(restdata);


  return (
    <>
    {restdata?(
    <Row>
      <Col>
      <Image src={restdata.photograph} className="p-5" fluid/>
      </Col>
      <Col className='mt-5'>
      <h1>{restdata.name}</h1>
      <h2>{restdata.neighborhood}</h2>
      <h3>Cusine type: {restdata.cuisine_type}</h3>
      <h4>Address: {restdata.address}</h4>
      <Operatingtime timedata={restdata.operating_hours}></Operatingtime><br></br>
      <Review reviewdata={restdata.reviews}></Review>

      </Col>
    </Row>

    ):null}
    </>
  )
}


export default ViewRest
