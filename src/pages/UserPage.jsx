import { useState } from "react";
import "./UserPage.css"

function UserPage() {
  // Estados para los datos del formulario
  const [image, setImage] = useState("");
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Manejo del envío del formulario
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
      <h2>Formulario de Usuario</h2>

      
      <label>
        URL de imagen:
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      {image && <img src={image} alt="Preview" style={{ width: "100px", height: "100px" }} />}

      
      <label>
        Nombre de usuario:
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>

      
      <label>
        Nombre completo:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      
      <label>
        Fecha de nacimiento:
        <input
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
      </label>

      
      <label>
        Ciudad:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>

      
      <label>
        País:
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
        Contraseña:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      {/* Botón para enviar */}
      <button type="submit">Guardar datos</button>

      {/* Mostrando los datos ingresados */}
      <div className="user-data">
        <h3>Datos del Usuario:</h3>
        <p><strong>Imagen:</strong> {image ? <img src={image} alt="Preview" style={{ width: "50px", height: "50px" }} /> : "No disponible"}</p>
        <p><strong>Nombre de usuario:</strong> {userName}</p>
        <p><strong>Nombre completo:</strong> {name}</p>
        <p><strong>Fecha de nacimiento:</strong> {dateOfBirth}</p>
        <p><strong>Ciudad:</strong> {city}</p>
        <p><strong>País:</strong> {country}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    </form>
  );
}

export default UserPage;
