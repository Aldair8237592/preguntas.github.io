document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;

    const data = {
        question1: form.question1.value,
        question1Other: form.animalOther.value,
        question2: form.question2.value,
        question2Other: form.loveOther.value,
        question3: form.question3.value,
        question3Other: form.birthdayOther.value,
        question4: form.question4.value,
        question4Other: form.loveAmountOther.value,
        question5: Array.from(form['question5[]'])
                         .filter(input => input.checked)
                         .map(input => input.value)
                         .join(', '),
        question5Other: form.bathOther.value
    };

    const message = `Formulario de Preguntas:
    - Animal que escogerías: ${data.question1} ${data.question1Other ? `(Otro: ${data.question1Other})` : ''}
    - Me quieres: ${data.question2} ${data.question2Other ? `(Otro: ${data.question2Other})` : ''}
    - Mi cumpleaños: ${data.question3} ${data.question3Other ? `(Otro: ${data.question3Other})` : ''}
    - Me quieres poquito o mucho: ${data.question4} ${data.question4Other ? `(Otro: ${data.question4Other})` : ''}
    - Te bañas: ${data.question5} ${data.question5Other ? `(Otro: ${data.question5Other})` : ''}`;

    const phoneNumber = '51925015528'; // Reemplaza esto con el número de teléfono deseado
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
});
