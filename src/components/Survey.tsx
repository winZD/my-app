import { useNavigate } from "react-router-dom";

const Survey = () => {
  const navigate = useNavigate();
  return (
    <div style={{ border: "1px solid black", padding: 20 }}>
      <p>Jeste li zadovoljni primanjima?</p>
      <button
        onClick={() => {
          alert("You clicked on yes");
          navigate(-1);
        }}
      >
        Da
      </button>
      <button
        onClick={() => {
          alert("You clicked on no");
          navigate(-1);
        }}
      >
        Ne
      </button>
    </div>
  );
};

export default Survey;
