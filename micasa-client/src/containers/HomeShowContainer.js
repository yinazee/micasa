
import React from 'react';

const HomeShow = ({match, homes}) => {
  return (
    <div>
      <h3>{ homes[match.params.homeId].name }</h3>
    </div>
  );
}

export default HomeShow;
