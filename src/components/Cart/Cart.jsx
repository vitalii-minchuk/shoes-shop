import Info from '../Info/Info'
import s from './Cart.module.scss'

const Cart = ({ cartOpenToggle, cartItems }) => {
  return (
    <div>
      <div className={s.overlay}></div>
      <div className={s.drawer}>
        <div>
          <h3>Cart</h3>
          <button onClick={cartOpenToggle}>
            <img src="/img/close.svg" alt="close" />
          </button>
        </div>
        {cartItems.length === 0
          ? <Info img={"img/emptyBox.png"}
            title={"Cart is empty"}
            text={"Please add at least one paar of shoes to make an order"}
          />
          : <>
            <div className={s.box}>
              <div className={s.item}></div>
            </div>
            <div className={s.sum}>
              <div className={s.sumLineBox}>
                <p className={s.total}>Total</p>
                <div className={s.dots}></div>
                <p className={s.totalNum}>1222 $</p>
              </div>
            </div>
            <button>make an order
              <img src="/img/arrowNext.svg" alt="arrow" />
            </button>
          </>
        }
      </div>
    </div>
  )
}

export default Cart