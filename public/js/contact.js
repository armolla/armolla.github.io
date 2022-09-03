const info = document.querySelectorAll('.inputContact');
const errors = document.querySelectorAll('.errorMsg');
const form = document.querySelector('.contactForm');

const msg = {
    required: 'Dato obligatorio.',
    confirm: 'Dato completado con éxito!!',
    message: function(index, msg, boolean, info) {
        errors.forEach((error, position) => {
            if (index === position) {
                error.innerText = msg;
                if (boolean) {
                    error.style.color = 'var(--done)';
                    info.style.border = '1px solid var(--done)';
                } else {
                    error.style.color = 'var(--error)';
                    info.style.border = '1px solid var(--error)';
                }
            }
        })
    }
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    info.forEach((data, index) => {
        if (data.value === '' && data.name !== 'phone' && data.name !== 'subject') {
            msg.message(index, msg.confirm, false, data);
        }
    });
});
