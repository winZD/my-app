import { useEffect, useState } from "react";

const Survey = () => {
  // Initialize state for data and index
  const [data, setData] = useState({ description: "" });
  const [index, setIndex] = useState(1); // State to manage the current index

  useEffect(() => {
    // Fetch initial data based on the starting index
    fetchData(index);
  }, [index]); // Re-fetch data whenever the index changes

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(index));
  }, [index]);
  /* const navigate = useNavigate(); */

  // Function to fetch data based on the current index
  const fetchData = (currentIndex: number) => {
    fetch(`https://fakestoreapi.com/products/${currentIndex}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  return (
    <div style={{ border: "1px solid black", padding: 20 }}>
      <p>{data.description}</p>
      <p>{index}</p>
      <p>
        {"Local storage: " + localStorage.getItem("data") !== null
          ? localStorage.getItem("data")
          : "No local storage"}
      </p>

      <button
        onClick={() => {
          setIndex((prevIndex: number) => prevIndex + 1); // Increment index
          fetchData(index + 1); // Fetch next item
        }}
      >
        Next
      </button>
      <button
        disabled={index === 1}
        onClick={() => {
          setIndex((prevIndex: number) => prevIndex - 1); // Decrement index
          fetchData(index - 1); // Fetch previous item
        }}
      >
        Previous
      </button>
    </div>
  );
};

export default Survey;
