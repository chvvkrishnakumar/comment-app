import {formatDistanceToNow as timming} from 'date-fns'
import './index.css'

const Item = props => {
  const {itemDetails, like, deleted, bcolor} = props
  console.log(itemDetails)
  const {id, name, comment, isLiked, time} = itemDetails
  const url = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onLike = () => {
    like(id)
  }
  const onDelete = () => {
    deleted(id)
  }
  const clas = isLiked ? 'liked' : 'like'
  return (
    <li>
      <div className="comment">
        <button className={bcolor} type="button">
          {name[0]}
        </button>
        <div className="nam">
          <div className="name">
            <h3>{name}</h3>
            <p>{timming(new Date(time), new Date())}</p>
          </div>
          <p>{comment}</p>
        </div>
      </div>
      <div className="del">
        <div className={clas}>
          <img src={url} alt="like" />
          <button onClick={onLike} className={clas} type="button">
            Like
          </button>
        </div>
        <button onClick={onDelete} type="button" data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default Item
