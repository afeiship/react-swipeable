import React from 'react';
import ReactDOM from 'react-dom';
import Swipeable from './main';

import './dev.scss';

class App extends React.Component{
  swiping() {
    console.log('swiping...')
  }
  swipingUp() {
    console.log('swipingUp...')
  }
  swipingRight() {
    console.log('swipingRight...')
  }
  swipingDown() {
    console.log('swipingDown...')
  }
  swipingLeft() {
    console.log('swipingLeft...')
  }
  swipedUp() {
    console.log('swipedUp...')
  }
  swipedRight() {
    console.log('swipedRight...')
  }
  swipedDown() {
    console.log('swipedDown...')
  }
  swipedLeft() {
    console.log('swipedLeft...')
  }
  handleSwipeAction() {
    console.log('handleSwipeAction...')
  }
  render(){
    return (
        <Swipeable
          className="hello-swipeable"
          onSwiping={this.swiping.bind(this)}
          onSwipingUp={this.swipingUp.bind(this)}
          onSwipingRight={this.swipingRight.bind(this)}
          onSwipingDown={this.swipingDown.bind(this)}
          onSwipingLeft={this.swipingLeft.bind(this)}
          onSwipedUp={this.swipedUp.bind(this)}
          onSwipedRight={this.swipedRight.bind(this)}
          onSwipedDown={this.swipedDown.bind(this)}
          onSwipedLeft={this.swipedLeft.bind(this)}
          onSwiped={this.handleSwipeAction.bind(this)}>
            You can swipe here!
        </Swipeable>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
