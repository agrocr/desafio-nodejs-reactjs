import React, { useState, useEffect } from 'react'
import api from './api'
import { ToastContainer, toast } from 'react-toastify'
import {
  Alert,
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Input,
  Form
} from 'reactstrap'

function App() {
  const [people, setPeople] = useState([])
  const [error, setError] = useState(false)
  const [newPerson, setNewPerson] = useState('')
  const [initialItems, setInitialItems] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      const { data } = await api.get('/people')
      setInitialItems(data)
      setPeople(data)
      setSearch('')
      setError(false)
    } catch (error) {
      setError(true)
    }
  }

  async function handleDelete(id) {
    try {
      const { data } = await api.delete(`/people/${id}`)
      toast(data.response)
      fetchData()
    } catch (error) {
      setError(true)
    }
  }

  function handleInput(e) {
    setNewPerson(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const { data } = await api.post('/people', { name: newPerson })
      toast(`A pessoa ${data.name} foi adicionada.`)
      setNewPerson('')
      fetchData()
    } catch (error) {
      setError(true)
    }
  }

  async function filterItems(e) {
    setSearch(e.target.value.toLowerCase())
    let updatedList = initialItems
    updatedList = updatedList.filter(item => {
      return item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1
    })
    setPeople(updatedList)
  }

  return (
    <Container>
      <h1>People List</h1>

      {error && <Alert color="danger">Erro ao acessar o servidor.</Alert>}

      <Form onSubmit={handleSubmit}>
        <Input
          className="col-6 mt-4"
          onChange={handleInput}
          value={newPerson}
          required
        />
        <Button type="submit" className="mt-2" color="success">
          Adicionar
        </Button>
      </Form>

      <hr />

      <Input
        className="col-4 mt-4"
        value={search}
        type="text"
        placeholder="Search"
        onChange={filterItems}
      />

      <ListGroup className="col-6 mt-2">
        {people.length > 0 ? (
          people.map(person => (
            <ListGroupItem
              className="d-flex justify-content-between align-items-center"
              key={person.id}
            >
              {person.name}
              <Button onClick={() => handleDelete(person.id)} color="danger">
                Remover
              </Button>
            </ListGroupItem>
          ))
        ) : (
          <Alert color="dark">Nada para exibir</Alert>
        )}
      </ListGroup>

      <ToastContainer />
    </Container>
  )
}

export default App
