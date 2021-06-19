import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Form } from "../components/atoms/Form"
import { Label } from "../components/atoms/Label"
import { Input } from "../components/atoms/Input"

const UpdateProfile = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <h2>Update Profile</h2>
      <Form onSubmit={handleSubmit}>
        <Label>Email</Label>
        <Input
          type="email"
          ref={emailRef}
          required
          defaultValue={currentUser.email}
        />
        <Form id="password">
          <Label>Password</Label>
          <Input
            type="password"
            ref={passwordRef}
            placeholder="Leave blank to keep the same"
          />
        </Form>
        <Label>Password Confirmation</Label>
        <Input
          type="password"
          ref={passwordConfirmRef}
          placeholder="Leave blank to keep the same"
        />
        <button disabled={loading} type="submit">
          Update
        </button>
        {error && <span>{error}</span>}
      </Form>
      <Link to="/admin">Cancel</Link>
    </>
  )
}

export default UpdateProfile