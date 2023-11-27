import React, { useState } from 'react';

export default function SimpleForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    clas: '',
    gender: '',
    city: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h1>Welcome</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Enter your Name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>

        <label>
          Roll Number:
          <input
            type="number"
            placeholder="Enter your roll number"
            name="age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
        </label>

        <label>
          Class:
          <input
            type="text"
            placeholder="Enter your Class"
            name="clas"
            value={formData.clas}
            onChange={(e) => setFormData({ ...formData, clas: e.target.value })}
          />
        </label>

        <label>
          Gender:
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={() => setFormData({ ...formData, gender: 'male' })}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={() => setFormData({ ...formData, gender: 'female' })}
            />
            Female
          </label>
        </label>

        <label>
          City:
          <select
            name="city"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          >
            <option value="">Please select city</option>
            <option value="Rawalpindi">Rawalpindi</option>
            <option value="Karachi">Karachi</option>
            <option value="Lahore">Lahore</option>
            <option value="Peshawar">Peshawar</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
