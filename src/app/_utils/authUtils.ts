export const checkIfLoggedIn = () => {
  const storedData = localStorage.getItem("recoil-persist");
  if (storedData) {
    const data = JSON.parse(storedData);
    return data?.userLoginState;
  }
  return false;
};
