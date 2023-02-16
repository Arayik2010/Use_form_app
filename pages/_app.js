import Layout from '@/components/layout'
import { DataProvider } from '@/dataContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <DataProvider>
          <Component {...pageProps} />

        </DataProvider>


      </Layout>
    </div>
  )
}
