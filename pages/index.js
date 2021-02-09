import Head from 'next/head'
import Link from 'next/link'
import { WelcomeDiv, BodyDiv, AtButton, DescP, NameH } from '../styles/styles.js'

export default function Home() {
  return (
    <div className="body-div">
        <Head>
            <title>Base-ex</title>
        </Head>
            <style jsx>
                {`
                    .body-div{
                        background: red;
                    }
                `}
            </style>
        <WelcomeDiv>
            <NameH>Base-ex</NameH>
            <DescP className="p">A base calculator</DescP>
            <Link href="/new">
                <AtButton>Create new Document</AtButton>
            </Link>
        </WelcomeDiv>
    </div>
  )
}
