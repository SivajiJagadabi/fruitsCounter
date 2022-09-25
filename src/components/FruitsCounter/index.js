// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onIncrementMango = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  onIncrementBanana = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }
  //   state = { count1 : 1, count2:0 }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="bg-container">
        <div className="fruit-container">
          <h1>
            Bob ate <span>{count1}</span> mangoes <span>{count2}</span> bananas
          </h1>
          <div className="max-container">
            <div className="img-container ">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                onClick={this.onIncrementMango}
                className="button1"
                type="button"
              >
                Eat Mango
              </button>
            </div>

            <div className="img-container ">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                onClick={this.onIncrementBanana}
                className="button2"
                type="button"
              >
                Eat Banana
              </button>

              {/* </div>

          <div> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
