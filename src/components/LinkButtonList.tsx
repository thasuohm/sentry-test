import React from 'react';
import LinkButton from './LinkButton';

const routeList = ['/', '/a', '/b', '/c'];

function LinkButtonList() {
  return (
    <>
      <h1>Link to other page</h1>
      {routeList.map((route) => (
        <LinkButton key={route} href={route}>
          {route}
        </LinkButton>
      ))}
    </>
  );
}

export default LinkButtonList;
