const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');

registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});


document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        // Your action here
        console.log('Enter key pressed');
    }
});
