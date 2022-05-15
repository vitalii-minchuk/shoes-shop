import s from "./Liked.module.scss"
import Info from "../../components/Info/Info"

const Liked = () => {
  return (
    <div className={s.content}>
      <h1>Favorite Goods</h1>
      <Info img={"img/sadFace.png"}
          title={"It's empty"}
          text={"You didn't add any item"}
        />
      <div className={s.goods}>
       
      </div>
    </div>
  )
}

export default Liked