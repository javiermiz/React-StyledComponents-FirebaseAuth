import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

const ForgotPassword = () => {
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState({
    email: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    resetPasswordProcess()
  }

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormValues({ ...formValues, [name]: value })
  }

  const resetPasswordProcess = async () => {
    try {
      setMessage("")
      setError("")
      await resetPassword(formValues.email)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <h2>Password Reset</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" required onChange={handleInputChange} />
        <button disabled={loading} type="submit">
          Reset Password
        </button>
        {error && <span>{error}</span>}
        {message && <span>{message}</span>}
        {loading && <span>Loading password reset...</span>}
      </form>
      <Link to="/login">Login</Link>
    </>
  )
}

export default ForgotPassword