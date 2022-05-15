import Card from "../../components/Card/Card"
import s from "./Home.module.scss"

const Home = ({ onSearchChangeInput, searchValue, items, onClearInput,
  addToCart, deleteFromCart, isReady }) => {

  const renderItems = () => {
    const filteredItems = items.filter(el => el.name.toLowerCase().includes(searchValue.toLowerCase()))

    return (isReady ? [...Array(12)] : filteredItems).map((el, i) => (
      <Card
        key={!isReady ? el.id : i}
        name={!isReady ? el.name : null}
        img={!isReady ? el.imgUrl : null}
        price={!isReady ? el.price : null}
        id={!isReady ? el.id : null}
        onAddToCart={addToCart}
        onDeleteFromCart={deleteFromCart}
        isReady={isReady}
      />
    )
    )
  }
  return (
    <div className={s.content}>
      <div className={s.top}>
        <h1>All Goods</h1>
        <div className={s.inputBox}>
          <img className={s.searchImg} src="/img/search.svg" alt="search" />
          <input
            onChange={onSearchChangeInput}
            placeholder="Search ..."
            value={searchValue}
          />
          {searchValue && <img onClick={onClearInput} className={s.closeImg} src="/img/close.svg" alt="close" />}
        </div>
      </div>
      <div className={s.goods}>
        {renderItems()}
      </div>
    </div>
  )
}

export default Home