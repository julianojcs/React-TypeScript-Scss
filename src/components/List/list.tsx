import React from 'react'
import './style.scss'

export interface iPerson {
  id?: number
  name: string
  age: number
  img: string
  note?: string
}

export interface iPeopleProps {
  people: iPerson[]
}

const Person: React.FC<iPerson> = (props) => {
  return (
    <li>
      <img src={props.img} alt={props.name} className='circle' />
      <h4>{props.name}</h4>
      <p>{`${props.age} years old`}</p>
      {props.note && <p className='notes'>{props.note}</p>}
    </li>
  )
}

export const List: React.FC<iPeopleProps> = ({ people }) => {
  return (
    <ul>
      {people.map((person, index) => {
        return (
          <Person key={index} {...person} />
        )
      })}
    </ul>
  )
}

// export const People = ({ people }: iPeopleProps) => {
// export const People: React.FC<iPeopleProps> = ({ people }) => {
//   const renderPeople = (): JSX.Element[] => {
//     return people.map((person) => <Person key={person.id} {...person} />)
//   }
// 
//   return <ul className='list'>{renderPeople()}</ul>
// }
