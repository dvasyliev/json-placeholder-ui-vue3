import uniqolor from 'uniqolor'

const MAX_NUMBER_OF_LETTERS = 2

export const nameIntoAbbreviation = (
  name = '',
  { maxNumberOfLetters = MAX_NUMBER_OF_LETTERS } = {},
) => {
  return name
    ?.split(' ')
    ?.map((word) => word?.charAt(0) || '')
    ?.join('')
    ?.slice(0, maxNumberOfLetters)
    ?.toUpperCase()
}

export const getColorDataByName = (name = '') => {
  const uniqolorData = uniqolor(name)

  return {
    backgroundColor: uniqolorData.color,
    color: uniqolorData.isLight ? 'black' : 'white',
  }
}
