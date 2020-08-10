import React, { useCallback } from 'react';
import { useAuth } from '../../hooks/auth';

import Button from '../../components/button';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  const handleLogoutClick = useCallback(async () => {
    await signOut();
  }, [signOut]);
  return (
    <>
      <Container>
        <h1>Dashboard</h1>
        <Button onClick={handleLogoutClick}>Logout</Button>
      </Container>
    </>
  );
};

export default Dashboard;
