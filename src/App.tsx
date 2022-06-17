import { useState } from 'react'
import { List, iPerson, AddToList } from './components'
import './app.scss'

const list: iPerson[] = [
  {
    name: 'John Smith',
    age: 35,
    img: 'https://randomuser.me/api/portraits/thumb/men/49.jpg',
    note: 'He is a very important professor from MIT'
  },
  {
    name: "Joana Forestry D'ark",
    age: 29,
    img: 'https://randomuser.me/api/portraits/thumb/women/51.jpg'
  }
]

function App() {
  const [people, setPeople] = useState<iPerson[]>(list)
  return (
    <div className='App'>
      <h1 className='App-title'>List of All Classmates</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  )
}

export default App
