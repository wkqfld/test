const button = document.getElementById('push');
const div = document.getElementById('area');

button.addEventListener('click', function () {
  console.log('div를 새롭게 생성');
  const newDiv = document.createElement('div');

  newDiv.style.backgroundColor = 'red';
  newDiv.style.width = '200px';
  newDiv.style.height = '200px';

  div.appendChild(newDiv);
});
