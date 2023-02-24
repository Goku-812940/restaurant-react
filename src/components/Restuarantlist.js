import React, { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurantListAction, } from '../actions/restaurantaction';
import { useDispatch,useSelector } from 'react-redux';


function Restuarantlist() {



const dispatch=useDispatch()
const result=useSelector(state=>state.restaurantReducer)
const {restaurantList}=result
  useEffect(() => {
    // restaurantdata()
    dispatch(RestaurantListAction())
  }, [])
  return (



    <Row>
      {
        restaurantList.map(item => (
          <RestaurantCard data={item}/>
        )
        )
      }
    </Row>
  )
}

export default Restuarantlist
