import { useEffect, useState } from 'react'
import s from './Card.module.scss'
import ContentLoader from "react-content-loader"

const Card = ({ id, name, img, price, onAddToCart, onDeleteFromCart, isReady }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [isAdded, setIsAdded] = useState(false)

  const likedItemToggle = () => {
    setIsLiked(!isLiked)
  }

  const addToCartToggle = () => {
    setIsAdded(!isAdded)
  }

  useEffect(() => {
    if (isAdded) {
      onAddToCart({ id, name, img, price })
    }
  }, [isAdded])

  useEffect(() => {
    if (!isAdded) {
      onDeleteFromCart({ id })
    }
  }, [isAdded])

  return (
    <>
      {!isReady
        ? <>
          <div className={s.item}>
            <button onClick={likedItemToggle} className={s.likeBtn}>
              <img className={s.heart} src={isLiked ? "/img/heartLiked.svg" : "/img/heartEmpty.svg"} alt="heart" />
            </button>
            <div className={s.picture}>
              <img className="itemImg" src={img} alt='shoes' />
            </div>
            <h5 className={s.name}>{name}</h5>
            <div className={s.description}>
              <div className={s.price}>
                <p className={s.priceText}>price:</p>
                <p className={s.priceNum}>{price}</p>
              </div>
              <button onClick={addToCartToggle} className={s.addBtn}>
                <img className={s.cart} src={isAdded ? "/img/cartAdded.svg" : "/img/cartAdd.svg"} alt="plus" />
              </button>
            </div>
          </div>
        </>
        : <ContentLoader
          speed={2}
          min-width={230}
          height={290}
          viewBox="0 0 230 290"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="45" y="30" rx="10" ry="10" width="120" height="90" />
          <rect x="30" y="155" rx="3" ry="3" width="150" height="15" />
          <rect x="60" y="178" rx="3" ry="3" width="93" height="15" />
          <rect x="30" y="223" rx="6" ry="6" width="80" height="24" />
          <rect x="139" y="220" rx="6" ry="6" width="30" height="30" />
        </ContentLoader>
      }
    </>
  )
}

export default Card