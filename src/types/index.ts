type iItem = {
  person: {
    id: string
    name: string
    age: number
    img: string
    note?: string
  }
}

type iItemProps = {
  person: {
    id: string
    name: string
    age: number
    img: string
    note?: string
  },
  setPeople: React.Dispatch<React.SetStateAction<iItem[]>>
}

type iListProps = {
  list: iItem[] | [],
  setPeople: React.Dispatch<React.SetStateAction<iItem[]>>
}

type iAddToListProps = {
  setPeople: React.Dispatch<React.SetStateAction<iListProps['list']>>
}

type ReturnType<T> = [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>
];

export type {
  iItem,
  iItemProps,
  iListProps,
  iAddToListProps,
  ReturnType
}