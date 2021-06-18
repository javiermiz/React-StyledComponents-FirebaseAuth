import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"

const Admin = () => {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  const handleLogout = async () => {
    try {
      setError("")
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  
  return (
    <>
      <h2>Welcome {currentUser.email}</h2>
      <h1>Here is your Admin Panel</h1>
      <button onClick={handleLogout}>
        Log Out
      </button>
      {error && <span>{error}</span>}
    </>
  )
}

export default Admin