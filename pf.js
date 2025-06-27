

const sessionIsActive = (lastLogin, expirationDate) => {
    if (lastLogin > expirationDate) {
      sessionState = 'EXPIRED'
      return false
    }
    return true
  }
  
  const expirationDate = new Date(2020, 10, 1)
  const currentDate = new Date()
  const isActive = sessionIsActive(currentDate, expirationDate)
  
  if (!isActive && sessionState === 'ACTIVE') {
    logout()
  }




  /*
  
  const sessionIsActive = (lastLogin, expirationDate) => {
  return lastLogin <= expirationDate;
};


const expirationDate = new Date(2020, 10, 1);
const currentDate = new Date();
const isActive = sessionIsActive(currentDate, expirationDate);

if (!isActive && sessionState === 'ACTIVE') {
  sessionState = 'EXPIRED';
  logout();
}

*/