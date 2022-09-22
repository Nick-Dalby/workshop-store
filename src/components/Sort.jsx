import { BsFillGridFill, BsList } from 'react-icons/bs'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import products_reducer from '../reducers/products_reducer'

const Sort = () => {
  const {
    filtered_products: products_reducer,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext()

  return (
    <Wrapper>
      <div className="btn-container">
        <button type="button" className={`${grid_view ? 'active' : null}`}>
          <BsFillGridFill onClick={setGridView} />
        </button>
        <button type="button" className={`${!grid_view ? 'active' : null}`}>
          <BsList onClick={setListView} />
        </button>
      </div>
      <p>{products_reducer.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort">sort by</label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={sort}
          onChange={updateSort}
        >
          <option value="price-lowest">lowest price</option>
          <option value="price-highest">highest price</option>
          <option value="name-a">by name (a-z)</option>
          <option value="name-z">by name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius-1);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    color: var(--clr-primary-2);
    padding: 0.25rem 0.5rem;
    background-color: var(--clr-grey-9);
    border-radius: var(--radius-1);
    margin-left: var(--spacing-1);
  }
  label {
    font-size: 1rem;
  }
`

export default Sort
