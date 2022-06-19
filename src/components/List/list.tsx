import React from 'react'
import './list.scss'
import { iListProps } from 'types'
import { Item } from 'components'

export const List: React.FC<iListProps> = ({ list, setPeople }) => {
  return (
    <>
      {list?.length > 0 ? (
        <ul>
          {list.map(({ person }) => {
            return (
              <Item key={person.id} person={person} setPeople={setPeople} />
            )
          })}
        </ul>
      ) : (
        <h2 className='no-people'>No people to show</h2>
      )}
    </>
  )
}
