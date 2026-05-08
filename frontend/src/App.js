import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [users, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [form, setForm] = useState({
    id: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
  });
  
  const API = "http://localhost/Crud-PHP-React/backend/";

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get(API + "read.php")
      .then((res) => setUserData(res.data))
      .catch((err) => console.error("Error fetching users:", err));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    
    if (!form.first_name || !form.middle_name || !form.last_name || !form.email) {
      alert("Please fill out all the Forms");
      return;
    }

    if (form.id) {
      axios
        .post(API + "update.php", form)
        .then(() => {
          fetchUsers();
          resetForm();
        })
       
        .catch((err) => console.error("Error Updating user:", err));
    } else {
      axios
        .post(API + "add.php", form)
        .then(() => {
          fetchUsers();
          resetForm();
        })
        .catch((err) => console.error("Error adding user:", err));
    }
  };

  const handleEdit = (user) => {
    setForm(user);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this information?"))
      return;
    axios
      .post(API + "delete.php", { id })
      .then(() => fetchUsers())
      .catch((err) => console.error("Error deleting the users:", err));
  };

  const resetForm = () => {
    setForm({ 
      id: "", 
      first_name: "", 
      middle_name: "", 
      last_name: "",
      email: "" });
  };

  const isFormValid = form.first_name && form.middle_name && form.last_name && form.email;

  const handleSearch = (e) => {
        e.preventDefault();
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
    
    };

    const filteredItems = users.filter((user) => {
      const lower = searchTerm.toLowerCase();
      return (
    user.first_name.toLowerCase().includes(lower) ||
    user.middle_name.toLowerCase().includes(lower) ||
    user.last_name.toLowerCase().includes(lower) ||
    user.email.toLowerCase().includes(lower)
  );
    }
    
  );

  return (
    <div className="container">
      <h1>CRUD using PHP React System</h1>
        <div className="form-container">
          <div>
            <label>
              First Name:
              <input type="text" name="first_name" value={form.first_name} onChange={handleChange} />
            </label>
            <br />
            <label>
              Middle Name:
              <input type="text" name="middle_name" value={form.middle_name} onChange={handleChange} />
            </label>
            <br />
            <label>
              Last Name:
              <input type="text" name="last_name" value={form.last_name} onChange={handleChange} />
            </label>
            <br />
            <label>
              Email:
              <input type="text" name="email" value={form.email} onChange={handleChange} />
            </label>
            <div className="button-group">
              <div className="search" onSubmit={handleSearch}> 
                <input
                    type="search"
                    placeholder="Search"
                    name="search"
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} />
                </div> 
                <button className="btn-Save" onClick={handleSubmit} disabled={!isFormValid}>{form.id ? "Update" : "Save"}</button>
                <button className="btn-Clear" onClick={resetForm} disabled={!isFormValid}>Clear</button>
            </div>
          </div>
        </div>
      <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            filteredItems.map((user) => (
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.middle_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <div className="action-group">
                  <button className="btn-Edit" onClick={() => handleEdit(user)}>Edit</button>
                  <button className="btn-Delete" onClick={() => handleDelete(user.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No Users Found</td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default App;