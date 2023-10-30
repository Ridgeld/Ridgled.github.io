const stored_name = localStorage.getItem('name');
const stored_class = localStorage.getItem('class');

const name_place = document.getElementById('name_place');
name_place.textContent = stored_name + " " + stored_class;