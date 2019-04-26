import React from 'react';

class MenuIconAnimated extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(clickedStatus) {
    console.log('clicked');

    this.setState(function () {
      return {
        clicked: clickedStatus 
      };
    });
  }
  
  render() {
    let clickedStatus = false;
    return (
      {
        /* pass the function itself not a reference 
        of the function */
      },

      <div className="my-menu-icon-container"
        sytle={clickedStatus === this.state.clicked ? { color: '#d0021b' }: null} 
        onClick={this.handleClick}
        onKeyPress={this.onKeyPressHandler}
        role="button"
        tabIndex="0">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    );
  }
}

export default MenuIconAnimated;
