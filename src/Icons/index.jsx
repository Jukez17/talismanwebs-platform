import React from 'react';
import ProfileIcon from './ProfileIcon';

const Icon = props => {
  switch(props.name) {
    case "profile":
      return <ProfileIcon {...props} />;
    default:
      return <div />;
  }
}
export default Icon;