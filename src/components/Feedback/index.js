import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isEmojiClicked: false}

  onClickedEmoji = () => {
    this.setState({isEmojiClicked: true})
  }

  renderThankYouScreen() {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thankyou-text">Thank You!</h1>
        <p className="thankyou-note">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  renderFeedbackScreen() {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="feedback-container">
        <h1 className="feedback-text">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-container">
          {emojis.map(eachItem => (
            <li key={eachItem.id}>
              <button
                className="emoji-button"
                type="button"
                onClick={this.onClickedEmoji}
              >
                <img
                  src={eachItem.imageUrl}
                  alt={eachItem.name}
                  className="emoji-image"
                />{' '}
                <br />
                <span className="emoji-name">{eachItem.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          {isEmojiClicked
            ? this.renderThankYouScreen()
            : this.renderFeedbackScreen()}
        </div>
      </div>
    )
  }
}

export default Feedback
