import { supabase } from './supabase.js'

const loginForm = document.getElementById('loginform');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const submitBtn = document.querySelector('.submit-btn');

    submitBtn.innerText = 'Logging in...';
    submitBtn.disabled = true;

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        alert(error.message);
        submitBtn.innerText = 'Log in';
        submitBtn.disabled = false;
    } else {
        window.location.href = 'dashboard.html';
    }
});