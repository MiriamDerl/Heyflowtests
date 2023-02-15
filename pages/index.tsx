import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://static.heyflow.app/widget/latest/iframe.js"></script>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Statec Binder Website Example{' '}
        </h1>

        <p className="mt-3 text-2xl">
        <heyflow-modal flow-id="jetzt-kontaktieren" height="800px" width="1000px" pass-parameters dynamic-height></heyflow-modal>
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
          <a href="#heyflow-jetzt-kontaktieren">Jetzt anfragen! &rarr;</a>
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Headline 1</h3>
            <p className="mt-4 text-xl">
            Unsere Mission: Ihre Produkte sicher und gut verpackt
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Headline 2</h3>
            <p className="mt-4 text-xl">
            Maschinen für den globalen Markt aus Österreich
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Headline 3</h3>
            <p className="mt-4 text-xl">
            Die perfekte Lösung im Bereich Verpacken und Palettieren
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 clcd assName="text-2xl font-bold">Headline 4</h3>
            <p className="mt-4 text-xl">
            Hochleistungs-Verpackungsanlagen & Hochleistungs-Palettieranlagen
            </p>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Footer
        </a>
      </footer>
    </div>
  )
}

export default Home
