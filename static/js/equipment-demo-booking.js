(() => {
  const form = document.getElementById('equipment-demo-form');
  if (!form) return;
  const email = form.elements.email;
  const phone = form.elements.phone;
  const topics = [...form.querySelectorAll('[name="topics[]"]')];
  function validate() {
    email.setCustomValidity(email.value.trim() || phone.value.trim() ? '' : 'Please provide an email address or WhatsApp number.');
    topics[0].setCustomValidity(topics.some(input => input.checked) ? '' : 'Please choose at least one discussion topic.');
    form.elements.name.setCustomValidity(form.elements.name.value.trim() ? '' : 'Please enter your name.');
    form.elements.market.setCustomValidity(form.elements.market.value.trim() ? '' : 'Please enter your country / time zone.');
    const area = form.elements.area;
    form.elements.area_unit.setCustomValidity(!area.value || form.elements.area_unit.value ? '' : 'Please select the area unit.');
  }
  form.addEventListener('input', validate);
  form.addEventListener('change', validate);
  validate();
  // Keep native Netlify POST and the site's existing success/conversion flow.
  form.addEventListener('submit', event => {
    validate();
    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
    }
  });
})();
