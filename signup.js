import { supabase } from './supabase.js'

const signupForm = document.getElementById('signupform');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmpassword').value;
    const submitBtn = document.querySelector('.submit-btn');

    // Validation
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    submitBtn.innerText = 'Creating account...';
    submitBtn.disabled = true;

    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                display_name: username,
            }
        }
    });

    if (error) {
        alert(error.message);
        submitBtn.innerText = 'Sign up';
        submitBtn.disabled = false;
    } else {
        alert("Success! Check your email or try logging in.");
        window.location.href = 'login.html';
    }
});