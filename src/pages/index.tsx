import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <span>Code inside /src</span>
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  return {
    props: {
    }
  }
}