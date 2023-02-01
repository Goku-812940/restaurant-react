import React, { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurantListAction } from '../actions/restaurantaction';
import { useDispatch,useSelector } from 'react-redux';

function Restuarantlist() {
  const [allrestautant, setallrestaurant] = useState([])

  // function to api call for datas iside json file

  // const restaurantdata = async () => {
  //   await fetch('/restaurants.json').then(data => {
  //     data.json().then(result => {
  //       // console.log(result);
  //       setallrestaurant(result.restaurants)

  //     })
  //   })
  // }
  // console.log(allrestautant);
const dispatch=useDispatch()
  useEffect(() => {
    // restaurantdata()
    dispatch(RestaurantListAction())
  }, [])
  return (



    <Row>
      {
        allrestautant.map(item => (
          <RestaurantCard data={item}/>
        )
        )
      }
    </Row>
  )
}

export default Restuarantlist
