import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({single}) {
  return <Link to={`/product/${single._id}`} className='border text-decoration-none'>
            <img src={single.image} alt="" className='img-fluid' />
            <h1>{single.name}</h1>
            <ul className='list-group'>
                <li className='list-group-item'>Price: {single.price}</li>
                <li className='list-group-item'>Stock: {single.stock}</li>
            </ul>
  </Link>;
}
