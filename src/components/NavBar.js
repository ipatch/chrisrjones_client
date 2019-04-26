import React from 'react';

class NavBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedNavItem: 'Home'
    };

    this.updateSelectedNavItem = this.updateSelectedNavItem.bind(this);
  }

  updateSelectedNavItem(item) {
    this.setState(function () {
      return {
        selectedNavItem: item
      };
    });
  }
  render() {
    var items = ['Home', 'About Me', 'dotfiles', 'Contact'];

    return (
      <ul className='items'>
        {items.map(function (item) {
          return (
            <li
              style={item === this.state.selectedNavItem ? { color: 'orange' }: null}
              onClick={this.updateSelectedNavItem.bind(null, item)}
              key={item}>
              {item}
            </li>
          );
        }, this)}
      </ul>
    );
  }
}

// module.exports = NavBar;
// preserve app state during hot reloading
// export default hot(module)(App);
export default NavBar;
