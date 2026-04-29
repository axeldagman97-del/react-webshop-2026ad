import React, { useState } from 'react';

function MultiFieldForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulärdata skickad', formData);
    alert(`tack ${formData.name})! Vi har tagiat emot ditt meddelande.`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '300p',
      }}>
      <input
        name="name"
        placeholder="Namn"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        email="email"
        placeholder="email"
        value={formData.email}
        onChange={handleChange}
      />

      <textarea
        name="name"
        placeholder="Meddelande"
        value={formData.message}
        onChange={handleChange}
      />

      <button type="submit"> skicka </button>
    </form>
  );
}

export default MultiFieldForm;
