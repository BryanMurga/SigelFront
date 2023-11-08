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
  