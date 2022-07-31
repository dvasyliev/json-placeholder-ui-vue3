import range from 'lodash/range'

export const getPage = (offset, limit) => {
  return Math.ceil(offset / limit) + 1
}

export const getSize = (total, limit) => {
  return Math.ceil(total / limit)
}

export const getOffset = (page, limit) => {
  return page * limit - limit
}

export const getPageNumbers = (size) => {
  return range(1, size + 1)
}

export const getIsFirstPage = (page) => {
  return page === 1
}

export const getIsLastPage = (page, size) => {
  return page === size
}

export const getIsActivePage = (page, pageNumber) => {
  return page === pageNumber
}
