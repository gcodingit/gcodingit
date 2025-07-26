const btn = document.getElementById('buttonMessage');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Enviando mensaje...';

    const serviceID = 'default_service';
    const templateID = 'template_9oqicsj';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert(`Mensaje enviado con éxito!\nNos pondremos en contacto a la brevedad\nQue tenga una excelente jornada!\nMuchas gracias!!!!`);
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });

    document.getElementById("form").reset();
  });