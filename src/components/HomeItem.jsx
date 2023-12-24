import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bagActions } from '../store/bagSlice'
import {GrAddCircle} from 'react-icons/gr'
import {AiFillDelete} from 'react-icons/ai'
function HomeItem({item}) {
  const bagItems = useSelector(store => store.bag)
  const dispatch = useDispatch()
  const elementFound = bagItems.indexOf(item.id) >= 0
  const handleBag = () =>{
    dispatch(bagActions.addToBag(item.id))
    console.log("item was clicked")
  }
  const handleRemoveBag = ()=> {
    dispatch(bagActions.removeFromBag(item.id))
    console.log("item was clicked remove")
  }
  return (
    <div>
        <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound
      ? <button className='btn-add-bag btn btn-danger' onClick={handleRemoveBag}><AiFillDelete/>Remove from Bag</button>
      : <button className='btn-add-bag btn btn-success' onClick={handleBag}> <GrAddCircle/> Add to Bag</button>}
    </div>
    </div>
  )
}

export default HomeItem