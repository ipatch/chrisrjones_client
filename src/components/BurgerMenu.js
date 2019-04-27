// libs
import React from 'react';
import PropTypes from 'prop-types';
// styles
import '../styles.css';

const Buns = ({visible}) => (
  <div>
    <div id="bun" className={visible ? 'show-top'  :'animate'}></div>
    <div id="bun" className={visible ? 'show-bottom'  :'animate'}></div>
  </div>
);

Buns.propTypes = {
  visible: PropTypes.bool
};

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { visible: false };
  }

  handleClick() {
    this.setState(prev => ({ visible: !prev.visible }));
  }

  render() {
    return(
      <div id="hamburger-container" onClick={this.handleClick}>
        {this.state.visible ? '' : ''}
        <Buns visible={this.state.visible} />
      </div>
    );
  }
}

export default BurgerMenu;
