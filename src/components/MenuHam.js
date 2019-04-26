// libs
import React from 'react';
import PropTypes from 'prop-types';
// styles
import '../styles.css';

const AniBun = ({visible}) => (
  // <div id="ani-bun">
  <div id="bun" className={visible ? 'show' : 'animate'}>
  </div>
  // </div>
);

AniBun.propTypes = {
  visible: PropTypes.bool
};

class MenuHam extends React.Component {
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
      <div>
        <button type="button" onClick={this.handleClick}>
          {this.state.visible ? '' : ''}
        </button>
        {/* <hr /> */}
        <AniBun visible={this.state.visible} />
      </div>
    );
  }
}

export default MenuHam;
