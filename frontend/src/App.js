import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { GET_ALL_USERS } from './query/user'
import { CREATE_USER } from './mutations/user'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { theme } from './theme'
import { Box, Button, CircularProgress, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@material-ui/core'

const App = () => {
  const { data, loading, refetch } = useQuery(GET_ALL_USERS)
  const [newUser] = useMutation(CREATE_USER)
  const [users, setUsers] = useState([])
  const [username, setUsername] = useState('')
  const [age, setAge] = useState(0)

  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers)
    }
  }, [data, loading])

  const addUser = (e) => {
    e.preventDefault()
    newUser({
      variables: {
        input: {
          username, age
        }
      }
    }).then(({ data }) => {
      console.log(data)
      setUsername('')
      setAge(0)
    })
  }

  const getAll = e => {
    e.preventDefault()
    refetch()
  }

  if (loading) {
    return <CircularProgress />
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box pt={3} mb={5}>
        <Typography variant='h4' align='center'>React + Graphql + Apollo</Typography>
      </Box>
      <Container maxWidth='lg'>
        <Box mb={3}>
          <Paper elevation={1}>
            <Box component='form' p={2} display='flex' alignContent='center' alignItems='center' justifyContent='center'>
              <Box mr={3} fontWeight={700}>Add new User:</Box>
              <TextField
                variant='outlined'
                size='small'
                placeholder='Usen Name'
                id='user'
                value={username}
                onChange={e => setUsername(e.target.value)}
                type='text'
              />
              <Box> - </Box>
              <TextField
                variant='outlined'
                size='small'
                placeholder='Age'
                id='age'
                value={age}
                onChange={e => setAge(e.target.value)}
                type='number'
              />
              <Button
                variant='contained'
                color='primary'
                style={{ marginLeft: '10px' }}
                onClick={(e) => addUser(e)}
              >
                Add
              </Button>
              <Button
                variant='outlined'
                color='primary'
                style={{ marginLeft: '10px' }}
                onClick={e => getAll(e)}
              >
                Get
              </Button>
            </Box>
          </Paper>
        </Box>
        <Paper elevation={1}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>User Name</TableCell>
                  <TableCell>Age</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map(user =>
                  <TableRow key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.age}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </ThemeProvider>
  )
}

export default App
