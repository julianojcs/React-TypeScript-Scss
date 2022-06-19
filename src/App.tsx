import { useEffect, useMemo, useState } from 'react'
import { List, AddToList } from 'components'
import { iItem } from './types'
import './app.scss'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [people, setPeople] = useState<iItem[]>([])
  const list: iItem[] = useMemo(() => {
    return [
      {
        person: {
          id: uuidv4(),
          name: 'Juliano Costa Silva',
          age: 46,
          img: 'https://github.com/julianojcs.png',
          note: 'A passionate JavaScript/EcmaScript and TypeScript Full Stack Web Developer with over ten years of experience.'
        }
      },
      {
        person: {
          id: uuidv4(),
          name: 'John Smith',
          age: 35,
          img: 'https://randomuser.me/api/portraits/thumb/men/49.jpg',
          note: 'He is a very important professor from MIT'
        }
      },
      {
        person: {
          id: uuidv4(),
          name: "Joana Forestry D'ark",
          age: 29,
          img: 'https://randomuser.me/api/portraits/thumb/women/51.jpg'
        }
      }
    ]
  }, [])

  useEffect(() => {
    setPeople(list)
    let res: string | null = localStorage.getItem('classmates')
    console.log(res)
    if (!res) {
      localStorage.setItem('classmates', JSON.stringify(list))
    } else {
      setPeople(JSON.parse(res))
      // let json = JSON.parse(res)
      // json = json.filter(
      //   (item: iItem) => item.person.name !== 'Juliano Costa Silva'
      // )
      // localStorage.setItem('classmates', JSON.stringify(json))
    }
    console.log(list)
  }, [list])

  return (
    <div className='App'>
      <h1 className='App-title'>List of All Classmates</h1>
      <List list={people} setPeople={setPeople} />
      <AddToList setPeople={setPeople} />
    </div>
  )
}

export default App
