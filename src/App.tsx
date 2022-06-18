import { useEffect, useMemo, useState } from 'react'
import { List, iPerson, AddToList } from 'components'
import './app.scss'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [people, setPeople] = useState<iPerson[]>([])
  const list: iPerson[] = useMemo(() => {
    return [
      {
        person: {
          id: uuidv4(),
          name: 'Juliano Costa Silva',
          age: 46,
          img: 'https://github.com/julianojcs.png',
          note: 'A passionate JavaScript/EcmaScript and TypeScript Full Stack Web Developer with over ten years of experience.'
        },
        setPeople
      },
      {
        person: {
          id: uuidv4(),
          name: 'John Smith',
          age: 35,
          img: 'https://randomuser.me/api/portraits/thumb/men/49.jpg',
          note: 'He is a very important professor from MIT'
        },
        setPeople
      },
      {
        person: {
          id: uuidv4(),
          name: "Joana Forestry D'ark",
          age: 29,
          img: 'https://randomuser.me/api/portraits/thumb/women/51.jpg'
        },
        setPeople
      }
    ]
  }, [])

  useEffect(() => {
    setPeople(list)
  }, [list])

  return (
    <div className='App'>
      <h1 className='App-title'>List of All Classmates</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  )
}

export default App
