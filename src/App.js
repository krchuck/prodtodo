import React, {useState, } from 'react';
import { Form, Header, Container, List, Segment, } from "semantic-ui-react"

const App = () => {
  [todos, setTodos] = useState ([])
  [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos([name, ...todos])
    setName("")
  }

  return (
    <Container>
      <Segment textAlign="center">
        <Header as="h3">Todo List</Header>
        <Form>
          <Form.Input 
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Form>
        <List>
          { todos.map( (todo, i) => <List.Item key={i}>{todo}</List.Item> ) }
        </List>
      </Segment>
    </Container>
  )
}

export default App;
