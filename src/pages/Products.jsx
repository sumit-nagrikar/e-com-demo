import React from 'react'
import Item from '../components/Item';
import { useParams } from 'react-router-dom';

export default function Products() {
    const params = useParams();
    const productId = params.ItemId;
    
    if(!productId){
        return <h2>Invalid Product Id</h2>;
    }
  return (
    <div>
<div className="container">
      <div className='row'>
        <div className='row col-lg-4 my-3'>
        <Item price= {1258} title={productId +" Lorem Ipsum"} subtitle="What is Lorem Ipsum?
" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"/>
        </div>
        <div className='row col-lg-4 my-3'>
        <Item price= {1258} title="Lorem Ipsum" subtitle="What is Lorem Ipsum?
" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"/>
         </div>
        <div className='row col-lg-4 my-3'>
        <Item price= {1258} title="Lorem Ipsum" subtitle="What is Lorem Ipsum?
" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"/>
         </div>
      </div>
    </div>
    </div>
  )
}