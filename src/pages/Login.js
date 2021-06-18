import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Label from "../components/Label"

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/admin")
      setLoading(false)
    } catch {
      setError("Failed to log in")
      setLoading(false)
    }

  }

  return (
    <>
      <h2>Log In</h2>
      {error && <span variant="danger">{error}</span>}
      <form onSubmit={handleSubmit}>
        <Label>Email</Label>
        <input type="email" ref={emailRef} required />
        <label>Password</label>
        <input type="password" ref={passwordRef} required />
        <button disabled={loading} type="submit">
          Log In
        </button>
      </form>
      <Link to="/forgot-password">Forgot Password?</Link>
    </>
  )
}

export default Login