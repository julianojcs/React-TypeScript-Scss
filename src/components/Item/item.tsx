import { iItem, iItemProps } from 'types'
import { DeleteIcon } from '../../assets'
import './item.scss'

export const Item: React.FC<iItemProps> = ({ person, setPeople }) => {
  const handleDelete = () => {
    let result: iItem[] | null = null

    setPeople((prev) => {
      result = prev.filter((p) => p.person?.id !== person.id)
      return result
    })
    localStorage.setItem('classmates', JSON.stringify(result))
  }

  return (
    <li>
      <img src={person.img} alt={person.name} className='circle' />
      <h4>{person.name}</h4>
      <p>{`${person.age} years old`}</p>
      <p className='notes'>{person.note}</p>
      <DeleteIcon onClick={() => handleDelete()} className='icon' />
    </li>
  )
}
