document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        document.getElementById('info').innerText = 'Страница загружена';
    }, 5000);
    
    document.getElementById('elementToRemove').addEventListener('click', function() {
        this.remove();
    });
    
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let valid = true;
        const inputs = form.querySelectorAll('input');
        
        inputs.forEach(input => {
            const errorMessage = input.nextElementSibling;
            if (!input.checkValidity()) {
                input.classList.add('error');
                valid = false;
                errorMessage.style.display = 'block';
            } else {
                input.classList.remove('error');
                errorMessage.style.display = 'none';
            }
        });
        
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            document.getElementById('password').classList.add('error');
            document.getElementById('confirmPassword').classList.add('error');
            document.getElementById('confirmPassword').nextElementSibling.style.display = 'block';
            valid = false;
        } else {
            document.getElementById('password').classList.remove('error');
            document.getElementById('confirmPassword').classList.remove('error');
            document.getElementById('confirmPassword').nextElementSibling.style.display = 'none';
        }
        
        if (valid) {
            alert('Форма успешно отправлена');
            form.reset();
        }
    });
    
    document.getElementById('styleButton').addEventListener('click', function() {
        form.style.color = 'red';
        form.style.backgroundColor = 'gray';
        form.style.fontFamily = 'Verdana';
        form.style.fontSize = '20px';
        form.style.border = '1px solid green';
    });
});