import { useState } from "react";
import "./Home.css"; // optional: for styles

const Home = () => {
  const[users, setUserData] = useState([]);
  const[form, setForm] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
  });
}


export default Home;