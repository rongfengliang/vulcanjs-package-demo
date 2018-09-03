import {registerComponent } from 'meteor/vulcan:core';
import React from 'react';
const Header = props => {
  return (
    <div>
      <p>dalong demo</p>
    </div>
  )
}
registerComponent('dalonginfo', Header);
