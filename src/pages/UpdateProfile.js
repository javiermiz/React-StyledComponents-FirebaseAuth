import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Form } from "../components/atoms/Form"
import { Label } from "../components/atoms/Label"
import { Input } from "../components/atoms/Input"

const UpdateProfile = () => {
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const [formValues, setFormValues] = useState({
    email: currentUser.email,
    password: "",
    passwordConfirm: "",
  })


  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (formValues.password !== formValues.passwordConfirm) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (formValues.email !== currentUser.email) {
      promises.push(updateEmail(formValues.email))
    }
    if (formValues.password) {
      promises.push(updatePassword(formValues.password))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/admin")
      })
      .catch(() => {
        setError("Failed to update account")
      })

      return setLoading(false)
  }

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormValues({ ...formValues, [name]: value })
  }

  return (
    <>
      <h2>Update Profile</h2>
      <Form onSubmit={handleSubmit}>
        <Label>Email</Label>
        <Input
          name="email"
          type="email"
          required
          defaultValue={formValues.email}
          onChange={handleInputChange}
        />
        <Label>Password</Label>
        <Input
          name="password"
          type="password"
          placeholder="Leave blank to keep the same"
          onChange={handleInputChange}
        />
        <Label>Password Confirmation</Label>
        <Input
          name="passwordConfirm"
          type="password"
          placeholder="Leave blank to keep the same"
          onChange={handleInputChange}
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