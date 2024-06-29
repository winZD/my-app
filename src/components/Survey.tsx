import { useNavigate } from "react-router-dom";

const Survey = () => {
  const navigate = useNavigate();
  return (
    <div style={{ border: "1px solid black", padding: 20 }}>
      <p>Jeste li zadovoljni primanjima?</p>
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
