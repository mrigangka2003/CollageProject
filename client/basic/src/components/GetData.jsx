import { useState, useEffect } from "react";

const GetData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000");
        if (!response.ok) {
          {
            error && setError("");
          }
          setError("Network issue");
          console.log("Error in :: GETDATA :: 12 ");
        }

        const data = await response.json() ;
        console.log(data) ;
      } catch (error) {
        setError(error) ;
        console.log(error) ;
      }
    };

    fetchData() ;
    setLoading(false) ;
  }, []);

  return loading ? <h1>Loading ...</h1> : <div>
    {error && <p>{error}</p>}
    <div className="data">

    </div>
  </div>
};

export default GetData;
