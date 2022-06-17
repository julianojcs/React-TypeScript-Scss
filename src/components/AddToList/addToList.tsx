import React, { useEffect, useState } from 'react'
import './style.scss'
import { iPeopleProps } from '../../components'

export interface iFormProps {
  people: iPeopleProps["people"],
  // setPeople?: React.Dispatch<React.SetStateAction<iPerson[]>>
  setPeople: React.Dispatch<React.SetStateAction<iPeopleProps["people"]>>
}

export const AddToList: React.FC<iFormProps> = ({people, setPeople}) => {
  const [disabled, setDisabled] = useState(false)
  const [cleared, setCleared] = useState({
    name: true,
    age: true,
    img: true
  })
  const [input, setInput] = useState({
    name: '',
    age: "",
    img: '',
    note: ''
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
    cleared && setCleared(prev => {
      return {
        ...prev,
        [e.target.name]: false
      }
    })
  }

  const handleAddToListClick = (): void => {
    setPeople(prev => [
      ...prev,
      { ...input, age: parseInt(input.age)}
    ])
    setInput({
      name: '',
      age: "",
      img: '',
      note: ''
    })
    setCleared({
      name: true,
      age: true,
      img: true
    })
  }

  const validateAge = (value: any) => {
    console.log(value)
    if (value === '' || isNaN(value)) {
      return false
    }
    if (parseInt(value) < 1) {
      return false
    }
    return true
  }

  useEffect(() => {
    setCleared({
      name: true,
      age: true,
      img: true
    })
  }, [])

  useEffect(() => {
    setDisabled(!input.name || !input.age || !input.img)
  }, [input])

  return (
    <div className='add-to-list'>
      <div className='add-to-list-title'>Add a new person</div>
      <div>
        <label htmlFor='Name'>Name:</label>
        <input required value={input.name} onChange={(e) => handleInputChange(e)} name='name' type='text' placeholder='Add a name' />
        {!input.name && !cleared.name && <div className='error'>Name required!</div>}
      </div>
      <div>
        <label htmlFor='Name'>Age:</label>
        <input required value={input.age} onChange={(e) => handleInputChange(e)} name='age' type='number' placeholder='Add the age' />
        {!validateAge(input.age) && !cleared.age && <div className='error'>Age required (greater than 0)!</div>}
      </div>
      <div>
        <label htmlFor='Name'>Image Url:</label>
        <input required value={input.img} onChange={(e) => handleInputChange(e)} name='img' type='text' placeholder='Add an image url' />
        {!input.img && !cleared.img && <div className='error'>Image Url required!</div>}
      </div>
      <div>
      <label htmlFor='Name'>Notes:</label>
        <textarea value={input.note} onChange={(e) => handleInputChange(e)} name='note' rows={5} placeholder='Add a note'/>
        </div>
      <button disabled={disabled} onClick={() => {handleAddToListClick()}}>Add to list</button>
    </div>
  )
}

// Github avatar url: https://github.com/julianojcs.png