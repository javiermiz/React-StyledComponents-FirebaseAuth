import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Label } from "../components/atoms/Label"
import { Input } from "../components/atoms/Input"
import { Form } from "../components/atoms/Form"
const Signup = () => {
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    signUpProcess()
  }

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormValues({ ...formValues, [name]: value })
  }

  const signUpProcess = async () => {
    if (formValues.password !== formValues.passwordConfirm) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(formValues.email, formValues.password)
      setLoading(false)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }
  }

  return (
    <>
      <h2>Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Label>Email</Label>
        <Input name="email" type="email" required onChange={handleInputChange} />

        <Label>Password</Label>
        <Input name="password" type="password" required onChange={handleInputChange} />

        <Label>Password Confirmation</Label>
        <Input name="passwordConfirm" type="password" required onChange={handleInputChange} />

        <button disabled={loading} type="submit">
          Sign Up
        </button>
        {error && <span>{error}</span>}
        {loading && <span>Loading...</span>}
      </Form>
      <div>
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}

export default Signup