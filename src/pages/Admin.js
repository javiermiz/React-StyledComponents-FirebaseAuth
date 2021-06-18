import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

const Admin = () => {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  const handleLogout = async () => {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <h1>Aqui se edita el sitio</h1>
      <button onClick={handleLogout}>
        Log Out
      </button>
    </>
  )
}

export default Admin