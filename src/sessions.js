// session.js
export function setRole(role) {
    localStorage.setItem('role', role);
  }
  
  export function getRole() {
    return localStorage.getItem('role');
  }
  
  export function clearRole() {
    localStorage.removeItem('role');
  }

  export function setUserName(userName) {
    localStorage.setItem('userName', userName);
  }
  
  export function getUserName() {
    return localStorage.getItem('userName');
  }
  
  export function clearUserName() {
    localStorage.removeItem('userName');
  }
  