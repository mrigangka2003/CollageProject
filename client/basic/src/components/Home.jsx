import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [error,setError] = useState("") ;

  const navigate = useNavigate() ;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      id: id,
      email: email,
      department: department
    };

    setName("")
    setEmail("")
    setId("")
    setDepartment("")

    try {
      const response = await fetch("http://localhost:5000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        {error && setError("")}
        setError("Network error")
      }

      const data = await response.json();
      setMessage(data.message); 
      navigate('/getdata') ;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000");

        if (!response.ok) {
          setError("")
          setError("Network error")
        }

        const data = await response.json();
        setMessage(data);
        console.log(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div style={{margin :"20px", display:"flex" , flexDirection:"column"}}> 
        {message}
        {error && (
          <h4 style={{ color: "#E72929" }}>{error}</h4>
        )}
      </div>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", margin: "auto", gap: "1rem" }}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          name="id"
          placeholder="Student ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Student email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Student Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Home;
