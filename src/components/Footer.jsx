import styled from 'styled-components'
const Footer = () => {
  return (
    <Wrapper>
      <h5>&copy; {new Date().getFullYear()} <span>workshop</span></h5>
      <h5>All rights reserved | Impressum</h5>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  span {
    color: var(--accent-orange);
  }
  h5 {
    color: var(--clr-grey-3);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
    gap: 2rem;
  }
`

export default Footer
