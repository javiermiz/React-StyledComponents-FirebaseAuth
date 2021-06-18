import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

const ForgotPassword = () => {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    resetPasswordProcess()

    setLoading(false)
  }

  const resetPasswordProcess = async () => {
    try {
      setMessage("")
      setError("")
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }
  }

  return (
    <>
      <h2>Password Reset</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" ref={emailRef} required />
        <button disabled={loading} type="submit">
          Reset Password
        </button>
        {loading && <span>Loading password reset...</span>}
        {error && <span>{error}</span>}
        {message && <span>{message}</span>}
      </form>
      <Link to="/login">Login</Link>
    </>
  )
}

export default ForgotPassword