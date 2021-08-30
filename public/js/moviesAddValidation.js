window.onload = function() {
    // Elementos querySelectors
    const form = document.querySelector('form');
    const titleInput = document.querySelector('#title');
    const ratingInput = document.querySelector('#rating') ;
    const awardsInput = document.querySelector('#awards');
    const release_dateInput = document.querySelector('#release_date');
    const lengthInput = document.querySelector('#length');
    const genre_idInput = document.querySelector('#genre_id');

    // Validation querySelectors
    const titleValidation = document.querySelector('.titleValidation');
    const ratingValidation = document.querySelector('.ratingValidation');
    const awardsValidation = document.querySelector('.awardsValidation');
    const release_dateValidation = document.querySelector('.release_dateValidation');
    const lengthValidation = document.querySelector('.lengthValidation');
    const genreValidation = document.querySelector('.genreValidation');

    // Parte 1: Validación on-time en todos los elementos
    titleInput.addEventListener('blur', () => {
        if(titleInput.value == '') {
            titleInput.classList.remove('is-valid');
            titleInput.classList.add('is-invalid');

            const errorMsg = "Debes agregar un título";
            titleValidation.innerHTML = errorMsg;

        } else {
            titleInput.classList.remove('is-invalid');
            titleInput.classList.add('is-valid');

            titleValidation.innerHTML = "";
        }
    });
    
    ratingInput.addEventListener('blur', () => {
        if( ratingInput.value < 0 || ratingInput.value > 10 ) {
            ratingInput.classList.remove('is-valid');
            ratingInput.classList.add('is-invalid');

            const errorMsg = "Ingresa un valor entre 0 y 10";
            ratingValidation.innerHTML = errorMsg;

        } else if (ratingInput.value == '') {
            ratingInput.classList.remove('is-valid');
            ratingInput.classList.add('is-invalid');

            const errorMsg = "Debes agregar una calificación";
            ratingValidation.innerHTML = errorMsg;

        } else {
            ratingInput.classList.remove('is-invalid');
            ratingInput.classList.add('is-valid');

            ratingValidation.innerHTML = "";
        }
    });

    awardsInput.addEventListener('blur', () => {
        if(awardsInput.value < 0 || awardsInput.value > 10) {
            awardsInput.classList.remove('is-valid');
            awardsInput.classList.add('is-invalid');

            const errorMsg = "Ingresa un valor entre 0 y 10";
            awardsValidation.innerHTML = errorMsg;

        } else if (awardsInput.value == '') {
            awardsInput.classList.remove('is-valid');
            awardsInput.classList.add('is-invalid');

            const errorMsg = "Debes agregar un premio";
            awardsValidation.innerHTML = errorMsg;

        } else {
            awardsInput.classList.remove('is-invalid');
            awardsInput.classList.add('is-valid');

            awardsValidation.innerHTML = "";
        }
    });

    release_dateInput.addEventListener('blur', () => {
        if(release_dateInput.value == '') {
            release_dateInput.classList.remove('is-valid');
            release_dateInput.classList.add('is-invalid');

            const errorMsg = "Debes agregar una fecha";
            release_dateValidation.innerHTML = errorMsg;
            
        } else {
            release_dateInput.classList.remove('is-invalid');
            release_dateInput.classList.add('is-valid');

            release_dateValidation.innerHTML = "";
        }
    });

    lengthInput.addEventListener('blur', () => {
        if(lengthInput.value == '') {
            lengthInput.classList.remove('is-valid');
            lengthInput.classList.add('is-invalid');

            const errorMsg = "Debes agregar una duración";
            lengthValidation.innerHTML = errorMsg;

        } else if (lengthInput.value < 60 || lengthInput.value > 360) {
            lengthInput.classList.remove('is-valid');
            lengthInput.classList.add('is-invalid');

            const errorMsg = "Ingresa un valor entre 60 y 360 minutos";
            lengthValidation.innerHTML = errorMsg;

        } else {
            lengthInput.classList.remove('is-invalid');
            lengthInput.classList.add('is-valid');

            lengthValidation.innerHTML = "";
        }
    });

    genre_idInput.addEventListener('blur', () => {
        if(genre_idInput.value == '') {
            genre_idInput.classList.remove('is-valid');
            genre_idInput.classList.add('is-invalid');

            const errorMsg = "Debes agregar un género";
            genreValidation.innerHTML = errorMsg;

        } else {
            genre_idInput.classList.remove('is-invalid');
            genre_idInput.classList.add('is-valid');

            genreValidation.innerHTML = "";
        }
    });

    // Parte 2: Lista de errores
    form.addEventListener('submit', (e) => {
        let errores = [];

        if(titleInput.value == '') {
            errores.push("Debes agregar un título");
        };

        if( ratingInput.value < 0 || ratingInput.value > 10 ) {
            errores.push("Ingresa un valor entre 0 y 10");
        } else if (ratingInput.value == '') {
            errores.push("Debes agregar una calificación");
        };

        if(awardsInput.value < 0 || awardsInput.value > 10) {
            errores.push("Ingresa un valor entre 0 y 10");
        } else if (awardsInput.value == '') {
            errores.push("Debes agregar un premio");
        };

        if(release_dateInput.value == '') {
            errores.push("Debes agregar una fecha");           
        };

        if(lengthInput.value == '') {
            errores.push("Debes agregar una duración");
        } else if (lengthInput.value < 60 || lengthInput.value > 360) {
            errores.push("Ingresa un valor entre 60 y 360 minutos");
        };

        if(genre_idInput.value == '') {
            errores.push("Debes agregar un género");
        };

        if(errores.length > 0) {
            e.preventDefault();

            const ulErrores = document.querySelector('div.alert-warning ul');
            ulErrores.innerHTML = '';

            errores.forEach(error => {
                ulErrores.innerHTML += `<li>${error}</li>`
            });
        };
    });
};