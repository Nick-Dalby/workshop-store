import styled from 'styled-components'
import aboutImg from '../assets/hero-bcg.jpg'
import { PageHero } from '../components'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about'/>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="workshop story" />
        <article>
          <div className="title">
            <h2>Workshop story:</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            dolorem tenetur veritatis quae quasi veniam voluptatem eum rerum ea
            praesentium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint
            dolores eveniet aliquam unde quidem porro repellat pariatur nemo
            laborum consequuntur repudiandae nostrum quos repellendus similique
            est cumque, sit distinctio?
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
