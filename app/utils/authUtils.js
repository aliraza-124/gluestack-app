import {useState} from 'react';

const useAuthentication = () => {
  const [auth, setAuth] = useState([]);

  const registerUser = (name, email, password) => {
    const newAuth = {name, email, password};
    setAuth(prevAuthArray => [...prevAuthArray, newAuth]);
  };

  const authenticateUser = (email, password) => {
    // const userInfo = auth.find(
    //   item => item.email === email && item.password === password,
    // );

    // return userInfo ? true : false;

    if (email === 'A@gmail.com' && password === '124') {
      return true;
    } else {
      return false;
    }
  };

  return {auth, registerUser, authenticateUser};
};

export default useAuthentication;
