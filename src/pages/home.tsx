import React from 'react';
import LayoutComponent from '../components/layout';
import UserListComponent from '../components/users/list';

const HomePage = () => {
  return (
    <LayoutComponent>
      <UserListComponent />
    </LayoutComponent>
  );
};

export default HomePage;
