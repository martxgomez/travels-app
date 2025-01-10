import { useState } from "react";
import "./UserPage.css"

function UserPage() {
  // STATES FOR THE FORM DATA
  const [image, setImage] = useState("");
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // HANDLE FUNCTION FOR THE FORM SUMBMITION
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos guardados:", {
      image,
      userName,
      name,
      dateOfBirth,
      city,
      country,
      email,
      password,
    });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>User form</h2>

      
      <label>
        Image URL:
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      {image && <img src={image} alt="Preview" style={{ width: "100px", height: "100px" }} />}

      
      <label>
        Name of the User:
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>

      
      <label>
        Complete name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      
      <label>
        Date of birth:
        <input
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
      </label>

      
      <label>
        City:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>

      
      <label>
        Country:
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </label>

      
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      {/* Submit button */}
      <button type="submit">Guardar datos</button>

      {/* Show the entered data */}
      <div className="user-data">
        <h3>User Data:</h3>
        <p><strong>Image:</strong> {image ? <img src={image} alt="Preview" style={{ width: "50px", height: "50px" }} /> : "No disponible"}</p>
        <p><strong>Name of the user:</strong> {userName}</p>
        <p><strong>Complete name:</strong> {name}</p>
        <p><strong>Date of birth:</strong> {dateOfBirth}</p>
        <p><strong>City:</strong> {city}</p>
        <p><strong>Country:</strong> {country}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    </form>
  );
}

export default UserPage;
