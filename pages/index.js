import { createClient } from 'contentful'

function Home({ fields }) {
  console.log("Entries:", fields)
  return (
    <div>
      <p>Hello. I'm { fields.title }. Designer, developer, Drupal themer &amp; all-round geek.</p>
    </div>
  )
}

Home.getInitialProps = async ({ req }) => {
  const client = createClient({
    space: '5r4yhuzsnqf4',
    accessToken: 'bfb235f07772d0bf137a2bf63f495fffec9747293d0df47ae28190aadbe4600e'
  })

  const entries = await client.getEntries({ content_type: 'blogPost' })
  return { fields: entries.items[0].fields }
}

export default Home