import { useState } from 'react';
import { register } from '../../services/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [request, setRequest] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const reqRegister = async (e) => {
    e.preventDefault();
    await register(request);
    navigate("/login");
  }

  return (
    <div>
      <h1>Register Here</h1>
      <form onSubmit={reqRegister}>
        <input value={request.firstName} onChange={(e) => setRequest({ ...request, firstName: e.target.value })} type="text" placeholder="First Name" />
        <input value={request.lastName} onChange={(e) => setRequest({ ...request, lastName: e.target.value })} type="text" placeholder="Last Name" />
        <input value={request.email} onChange={(e) => setRequest({ ...request, email: e.target.value })} type="text" placeholder="Email" />
        <input value={request.password} onChange={(e) => setRequest({ ...request, password: e.target.value })} type="text" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Register
