import React from 'react'
import './list.scss'
import { DeleteIcon } from '../../assets'
// const logo: string = require('../../assets/delete.svg').default

export interface iPerson {
  person: {
    id: string
    name: string
    age: number
    img: string
    note?: string
  }
  setPeople: React.Dispatch<React.SetStateAction<iPeopleProps['people']>>
}

export interface iPeopleProps {
  people: iPerson[] | []
}

const Person: React.FC<iPerson> = ({ person, setPeople }) => {
  const handleDelete = () => {
    setPeople((prev) => prev.filter((p) => p.person.id !== person.id))
  }

  return (
    <li>
      <img src={person.img} alt={person.name} className='circle' />
      <h4>{person.name}</h4>
      <p>{`${person.age} years old`}</p>
      <p className='notes'>{person.note}</p>
      {/* <img
        onClick={() => handleDelete()}
        className='icon'
        src={logo}
        alt='logo'
      /> */}
      <DeleteIcon 
        onClick={() => handleDelete()} 
        className='icon'
      />
    </li>
  )
}

export const List: React.FC<iPeopleProps> = ({ people }) => {
  return (
    <>
      {people?.length > 0 ? (
        <ul>
          {people.map(({ person, setPeople }) => {
            return (
              <Person key={person.id} person={person} setPeople={setPeople} />
            )
          })}
        </ul>
      ) : (
        <h2 className='no-people'>No people to show</h2>
      )}
    </>
  )
}

// export const People = ({ people }: iPeopleProps) => {
// export const People: React.FC<iPeopleProps> = ({ people }) => {
//   const renderPeople = (): JSX.Element[] => {
//     <Person key={person.id} person={person} setPeople={setPeople} />
//   }
//
//   return <ul className='list'>{renderPeople()}</ul>
// }
