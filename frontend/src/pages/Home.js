import { useState, useEffect } from "react";
import "./Home.css"; // optional: for styles
import axios from "axios";

const Home = () => {
  const[users, setUserData] = useState([]);
  const[form, setForm] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
  });
  
   const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = () => {
    if (!form.first_name || !form.middle_name || !form.last_name)
    alert("Please fill out all the Forms");
  return;
 }
    if (form.id){
      axios.post(API + "update.php", form)
      .then(()=> {
        fetchUsers();
        resetForm();
      })
      .catch(err=> console.err("Error Updating user:", err))
    }

  const handleEdit = (user) => {
    setForm(user);
  }

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this information?"))
    return;
    axios.post(API + "delete.php", {id}).then(() =>fetchUsers()).catch(err => console.error("Error deleting the users:", err))
  };

  const resetForm = () => {
    setForm({
      id: "",
      first_name: "",
      middle_name: "",
      last_name: "",
    })
  }

  const isFormValid = form.first_name && form.middle_name && form.last_name;

  const API = "https://localhost/crud_system/backend"
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get(API + "read.php").then(res => setUserData(res.data)).catch(err =>console.error("Error fetching suers:", err));
  };
 
   return (
    <div className="container">
      <h1>CRUD using PHP React System</h1>
        <div className="form-container">
          <form>
          <label>First Name:
          <input type="text" name="first_name" value={form.first_name} onChange={handleChange} />
          </label>
          <br />
          <label>Middle Name:
          <input type="text" name="middle_name" value={form.middle_name} onChange={handleChange} />
          </label>
          <br />
          <label>Last Name:
          <input type="text" name="last_name" value={form.last_name} onChange={handleChange} />
          </label>
          <button type="submit" onClick={handleSubmit} disabled={!isFormValid}>
          {form.id ? "Update" : "Save"}
          </button>
          <button className="btn delete" onClick={resetForm}>Clear</button>
          </form>
        </div>

        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
        </table>
    </div>



  );

}


export default Home;