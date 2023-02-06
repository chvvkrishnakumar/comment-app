import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Item from '../CommentItem/index'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentList: [], name: '', comment: ''}

  onName = event => {
    this.setState({name: event.target.value})
  }

  onComment = event => {
    this.setState({comment: event.target.value})
  }

  randomBackground = () => {
    const color = Math.ceil(
      Math.random() * initialContainerBackgroundClassNames.length - 1,
    )
    return color
  }

  like = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  deleted = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.filter(each => id !== each.id),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      time: Date(),
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {commentList} = this.state
    return (
      <div>
        <div className="top">
          <form onSubmit={this.onAddComment}>
            <h1>Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <input
              onChange={this.onName}
              id="input"
              type="text"
              placeholder="Your Name"
            />
            <textarea
              onChange={this.onComment}
              id="textarea"
              placeholder="Your Comment"
            />
            <button className="button" type="submit">
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr />
        <ul>
          <p>
            <button className="button" type="button">
              {commentList.length}
            </button>
            Comments
          </p>
          {commentList.map(each => (
            <Item
              bcolor={
                initialContainerBackgroundClassNames[this.randomBackground()]
              }
              itemDetails={each}
              key={each.id}
              like={this.like}
              deleted={this.deleted}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
