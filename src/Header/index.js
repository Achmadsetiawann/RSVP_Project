import React from 'react';
import PropTypes from 'prop-types';
import GuestInputForm from './GuestInputForm';

const Header = props =>

<header>
  <h1>RSVP</h1>
  <p>A Treehouse App</p>
  <GuestInputForm
      newGuestSubmitHandler= {props.newGuestSubmitHandler}
      pendingGuest= {props.pendingGuest}
      handleNameInput= {props.handleNameInput}
      />
</header>;

Header.propTypes= {
  newGuestSubmitHandler: PropTypes.fun.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  handleNameInput: PropTypes.fun.isRequired
};

export default Header;