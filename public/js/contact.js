const info = document.querySelectorAll('.inputContact');
const form = document.querySelector('.contactForm');
let submit = true;

const expresion = {
    name: /^[a-zA-Z\sñáéíóúü ]*$/,
    email: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    phone: /^[0-9]{8,15}$/
}

const msg = {
    name: 'Su nombre de 3 a 15 caracteres.',
    email: 'Complete con un email válido.',
    phone: 'Teléfono de 8 a 15 dígitos, no obligatorio.',
    subject: 'Asunto no obligatorio hasta 30 caracteres.',
    msg: 'Mensaje entre 20 y 250 caracteres.',
    required: 'Este dato es obligatorio.',
    confirm: 'Dato completado con éxito!!'
}

const error = {
    errors: document.querySelectorAll('.msg'),
    message: function(index, msg, data, boolean) {
        this.errors.forEach((error, position) => {
            if (index === position) {
                if (boolean) {
                    error.textContent = msg;
                    error.style.color = 'var(--done)';
                    data.style.border = '2px solid var(--done)';
                    submit = boolean;
                } else {
                    error.textContent = msg;
                    error.style.color = 'var(--error)';
                    data.style.border = '2px solid var(--error)';
                    submit = boolean;
                }  
            }
        });
    },
    messageClear: function (data, index) {
        this.errors.forEach((error, position) => {
            if (position === index) {
                error.textContent = '';
                data.style.border = 'none';
            }
        });
    },
    modalIn: function() {
        const modal = document.querySelector('.errorContainer');
        const body = document.querySelector('body');
        if (modal.display !== 'flex') {
            modal.style.display = 'flex';
            body.style.overflowY = 'hidden';
        }
    },
    modalOff: function() {
        document.querySelector('.close').addEventListener('click', ()=>{
            document.querySelector('.errorContainer').style.display = 'none';
            const body = document.querySelector('body');
            body.style.overflowY = 'auto';
        });
    }
}

info.forEach((data, index) => {
    data.addEventListener('blur', ()=>{
        switch (data.name) {
            case 'name':
                if (!expresion.name.test(data.value.trim()) || data.value.trim().length < 3 || data.value.trim().length > 15) {
                    error.message(index, msg.name, data, false);
                } else {
                    error.message(index, msg.confirm, data, true);
                }
            break;
            case 'email':
                if (!expresion.email.test(data.value.trim())) {
                    error.message(index, msg.email, data, false);
                } else {
                    error.message(index, msg.confirm, data, true);
                }
            break;
            case 'phone':
                if (data.value.trim() === '') {
                   error.messageClear(data, index)
                } else if (!expresion.phone.test(data.value.trim())) {
                    error.message(index, msg.phone, data, false);
                } else {
                    error.message(index, msg.confirm, data, true);
                }    
            break;
            case 'subject':
                if (data.value.trim() === '') {
                    error.messageClear(data, index);
                } else if (data.value.trim().length > 30) {
                    error.message(index, msg.subject, data, false);
                } else {
                    error.message(index, msg.confirm, data, true);
                }
            break;
            case 'message':
                if (data.value.trim().length < 20 || data.value.trim().length > 250) {
                    error.message(index, msg.msg, data, false);
                } else {
                    error.message(index, msg.confirm, data, true);
                }
            break;
        }
    });
});

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    info.forEach((data, index) => {
        if (data.value === '' && data.name !== 'phone' && data.name !== 'subject') { 
            submit = false;
            error.message(index, msg.required, data, false)
            error.modalIn();
            error.modalOff();
        }   
    });
});
