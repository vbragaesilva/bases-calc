import Head from 'next/head'

export default function Home() {
    console.log(process.env.PROJECT_NAME)
  return (
    <div>
        <Head>
            <title>Bases Calc</title>
        </Head>
        <h1>Base-ex</h1>
    </div>
  )
}
