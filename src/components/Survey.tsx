import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Survey = ({ props }: { props: number }) => {
  console.log(props);
  const [data, setData] = useState({ description: "" });
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${Math.floor(Math.random() * 10)}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  /* { status: 'ok', method: 'GET' } */
  const navigate = useNavigate();
  return (
    <div style={{ border: "1px solid black", padding: 20 }}>
      <p>{data.description}</p>
      <button
        onClick={() => {
          alert("You clicked on yes");
          navigate("/");
        }}
      >
        Da
      </button>
      <button
        onClick={() => {
          alert("You clicked on no");
          navigate("/home");
        }}
      >
        Ne
      </button>
    </div>
  );
};

export default Survey;
