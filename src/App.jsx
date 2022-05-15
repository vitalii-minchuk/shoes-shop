import Header from "./components/Header/Header"
import s from "./App.module.scss"
import Cart from "./components/Cart/Cart"
import { useEffect, useState } from "react"
import axios from "axios"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Liked from "./pages/Liked/Liked"

const App = () => {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [isReady, setIsReady] = useState(false)

  const onSearchChangeInput = (evt) => {
    setSearchValue(evt.target.value)
  }
  
  const onClearInput = () => {
    setSearchValue("")
  }
  
  useEffect(() => {
    async function fetchData() {
      setIsReady(true)
      const response = await axios.get("https://627e94bb271f386ceffad340.mockapi.io/items/items")
      
      setIsReady(false)
      setItems(response.data);
    }

    fetchData()
  }, [])

  const cartOpenToggle = () => {
    setIsCartOpen(!isCartOpen)
  }

  const addToCart = (item) => {
    axios.post("https://627e94bb271f386ceffad340.mockapi.io/items/cart", item)
    setCartItems(prev => [...prev, item])
  }

  const deleteFromCart = (item) => {
    if(cartItems.some(el => el.id === item.id)) {
      axios.delete("https://627e94bb271f386ceffad340.mockapi.io/items/cart/" + item.id)
      setCartItems(prev => prev.filter(el => el.id !== item.id))
    }
  }

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        {isCartOpen && <Cart cartOpenToggle={cartOpenToggle} cartItems={cartItems} />}
        <Header cartOpenToggle={cartOpenToggle} cartItems={cartItems}/>
        <Routes>
          <Route path="/"  element={<Home
            items={items}
            searchValue={searchValue}
            onSearchChangeInput={onSearchChangeInput}
            addToCart={addToCart}
            deleteFromCart={deleteFromCart}
            onClearInput={onClearInput}
            isReady={isReady}
          />} />
          <Route path="/liked" element={<Liked />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
