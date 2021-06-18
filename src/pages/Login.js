import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Label } from "../components/atoms/Label"
import { Input } from "../components/atoms/Input"
import { Form } from "../components/atoms/Form"

const Login = () => {
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      loginAndRedirect();
    } catch {
      setError("Failed to log in")
      setLoading(false)
    }
  }

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormValues({ ...formValues, [name]: value })
  }

  const loginAndRedirect = async () => {
    setError("")
    setLoading(true)
    await login(formValues.email, formValues.password)
    history.push("/admin")
    setLoading(false)
  }

  return (
    <>
      <h2>Log In</h2>
      {error && <span variant="danger">{error}</span>}
      <Form onSubmit={handleSubmit}>
        <Label bg={"#000"}>Email</Label>
        <Input name="email" type="email" required onChange={handleInputChange} />

        <Label>Password</Label>
        <Input name="password" type="password" required onChange={handleInputChange} />

        <button disabled={loading} type="submit">
          Log In
        </button>
      </Form>
      <Link to="/forgot-password">Forgot Password?</Link>
    </>
  )
}

export default Login