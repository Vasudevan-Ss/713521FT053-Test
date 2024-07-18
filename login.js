document.querySelector('form').addEventListener('submit', (e) => {
	e.preventDefault();

const users = [
  { username: 'vasu', password: 'vasu' },
  
];


function login(username, password) {
  for (const user of users) {
    if (user.username === username && user.password === password) {
      
      alert(`Welcome, ${username}!`);
     
      
      return true;
    }
  }
  
  alert('Invalid username or password');
  return false;
}


document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  login(username, password);
});
	alert('Login successful!');
});