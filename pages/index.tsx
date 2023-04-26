import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Container } from '@/src/components/Container'
import { Team } from '@/src/components/Team'
import { Hero } from '@/src/components/Hero'

const inter = Inter({ subsets: ['latin'] })

interface IHome {
  teams?: Array<any>
}
const Home: React.FC<IHome> = ({ teams }) => {
  return (
    <main>
      <Head>
        <title>Mini Blog</title>
        <link rel="icon" href="/vercel.svg" />
      </Head>

      <Hero title='Mini Blog' />

      <h2 className="text-3xl font-bold mb-32 text-center mt-10">Meet the <u className="text-blue-600">team</u></h2>

      <Container grid>
        {
          teams?.map((person: any) => (
            <Team name={person.name} title={person.username + " | " + person.email} />
          ))
        }
      </Container>
    </main>
  )
}

export const getStaticProps = async (context: any) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users?_limit=5");
  const teams = await res.json();

  return {
    props: {
      teams
    }
  }
}

export default Home;