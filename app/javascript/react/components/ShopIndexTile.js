import React from 'react'
import { Link } from 'react-router'

 const ShopIndexTile = (props) => {
  return(
    <div className="container new-callout">
    <div className="row bob">
      <div className="columns medium-6 small-12">
        <img className="img" src={props.image} />
      </div>
      <div className="columns medium-6 small-12 shop-info">
        <h1 className="text-left">
          <Link to={`/shops/${props.id}`}>{props.name}</Link>
        </h1>
        <p className="text-left">
          {props.address} {props.city}, {props.state} {props.zip}
        </p>
        <p className="text-left">{props.phoneNumber}</p>
      </div>
      </div>
    </div>
  )
}

 export default ShopIndexTile
