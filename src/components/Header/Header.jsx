import { Link } from 'react-router-dom'
import s from './Header.module.scss'

const Header = ({ cartOpenToggle, cartItems }) => {

  return (
    <header className={s.header}>
      <div className={s.headerLeft}>
        <Link to="/">
          <img className={s.logo} src='/img/logo.png' />
        </Link>
        <div>
          <h3 className={s.name}>React Sneakers</h3>
          <p className={s.motto}>the best shoes shop</p>
        </div>
      </div>
      <ul className={s.headerRight}>
        <li onClick={cartOpenToggle}>
          <img width={18} height={18} src='/img/cart.svg' />
          {cartItems.length > 0 && <span>1205 $</span>}
        </li>
        <li>
          <Link to="/liked">
            <img width={18} height={18} src='/img/heart.svg' />
          </Link>
          <img width={18} height={18} src='/img/user.svg' />
        </li>
      </ul>
    </header>
  )
}

export default Header