import { useState, useEffect } from "react";

const GetData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/getdata");
        if (!response.ok) {
          {
            error && setError("");
          }
          setError("Network issue");
          console.log("Error in :: GETDATA :: 12 ");
        }

        const data = await response.json();
        setDatas(data);
      } catch (error) {
        // setError(error.message) ;
        console.log(error);
      }
    };

    fetchData();
    setLoading(false);
  }, []);

  return loading ? (
    <h1>Loading ...</h1>
  ) : (
    <div>
      {error && <p>{error}</p>}
      <div className="data">
        {Array.isArray(datas) ? (
          <ul>
            {datas.map((dataItem, index) => (
              <p key={index}>
                <strong>Name:</strong> {dataItem.name} <br />
                <strong>ID:</strong> {dataItem.studentId} <br />
                <strong>Email:</strong> {dataItem.email} <br />
                <strong>Department:</strong> {dataItem.department}
              </p>
            ))}
          </ul>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default GetData;
