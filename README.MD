#react-swipeable
> Swipe events for react.


## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install
+ https://github.com/dogfessional/react-swipeable (The copy of this project)

## props:
```javascript
onSwiped: PropTypes.func,
onSwiping: PropTypes.func,
onSwipingUp: PropTypes.func,
onSwipingRight: PropTypes.func,
onSwipingDown: PropTypes.func,
onSwipingLeft: PropTypes.func,
onSwipedUp: PropTypes.func,
onSwipedRight: PropTypes.func,
onSwipedDown: PropTypes.func,
onSwipedLeft: PropTypes.func,
flickThreshold: PropTypes.number,
delta: PropTypes.number,
preventDefaultTouchmoveEvent: PropTypes.bool,
stopPropagation: PropTypes.bool,
nodeName: PropTypes.string,
trackMouse: PropTypes.bool
```


## usage:
```html
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
```
