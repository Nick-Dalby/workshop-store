import React, { useContext, useEffect, useReducer } from 'react'
import {
  CLEAR_FILTERS, FILTER_PRODUCTS, LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW, SORT_PRODUCTS,
  UPDATE_FILTERS, UPDATE_SORT
} from '../actions'
import reducer from '../reducers/filter_reducer'
import { useProductsContext } from './products_context'

const initialState = {}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  return (
    <FilterContext.Provider value='filter context'>
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}