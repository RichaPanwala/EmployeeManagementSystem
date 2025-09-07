(function(){
}


const newEmp = {id: nextId++, name, email, position, department, salary};
employees.push(newEmp);
save();
render(searchInput.value);
form.reset();


// Move focus back to first field for quick entry on mobile
document.getElementById('name').focus();
}


// Delete employee by id
function handleDelete(id){
if(!confirm('Delete this employee?')) return;
employees = employees.filter(e=> e.id !== id);
save();
render(searchInput.value);
}


// Wire events
function setup(){
load();
render();
form.addEventListener('submit', handleSubmit);


// Live search
searchInput.addEventListener('input', ()=> render(searchInput.value));
filterDept.addEventListener('change', ()=> render(searchInput.value));
clearFilters.addEventListener('click', ()=>{ searchInput.value=''; filterDept.value=''; render(); });


// Reset confirmation
resetBtn.addEventListener('click', ()=>{
// small safety: confirm reset
if(!confirm('Reset form fields?')){
// prevent default reset if cancelled
event && event.preventDefault && event.preventDefault();
}
});


// show year in footer
yearSpan.textContent = new Date().getFullYear();


// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
menuToggle && menuToggle.addEventListener('click', function(){
const nav = document.querySelector('.nav-list');
const expanded = this.getAttribute('aria-expanded') === 'true';
this.setAttribute('aria-expanded', String(!expanded));
if(nav) nav.style.display = expanded ? 'none' : 'flex';
});


// Accessibility: allow Enter on delete when focused
tbody.addEventListener('keydown', (ev)=>{
if(ev.key === 'Enter' && ev.target.matches('button')) ev.target.click();
});
}


// Initialize app
setup();
})();