import React from 'react';
import Card from '../components/Card';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { useState } from 'react';

export default function Logout() {
  const [errorMessage, setErrorMessage] = useState('');

  async function logout() {
    await signOut(auth);
    console.log('logged out! ');
  }

  function handleClick(e) {
    logout();
    //In case I need it
    setErrorMessage('Error goes here');
  }

  return (
    <>
      <Card
        header={'Log Out'}
        color={'danger'}
        body={
          <button className='btn text-bg-dark' onClick={handleClick}>
            Log Out
          </button>
        }
      />
      {errorMessage && (
        <div class='alert alert-danger' role='alert'>
          There's an error Logging Out!
        </div>
      )}
    </>
  );
}
