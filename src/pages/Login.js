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
    loginProcess();
  }

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormValues({ ...formValues, [name]: value })
  }

  const loginProcess = async () => {
    try {
      setError("")
      setLoading(true)
      await login(formValues.email, formValues.password)
      setLoading(false)
      history.push("/admin")
    } catch {
      setError("Failed to log in")
      setLoading(false)
    }
  }

  return (
    <>
      <h2>Log In</h2>
      <Form onSubmit={handleSubmit}>
        <Label bg={"#000"}>Email</Label>
        <Input name="email" type="email" required onChange={handleInputChange} />

        <Label>Password</Label>
        <Input name="password" type="password" required onChange={handleInputChange} />

        <button type="submit">
          Log In
        </button>
        {error && <span>{error}</span>}
        {loading && <span>Loading login...</span>}
      </Form>
      <Link to="/forgot-password">Forgot Password?</Link>
    </>
  )
}

export default Login