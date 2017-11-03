import Head from 'next/head'

export default () => (
    <div>
    <Head>
      <title>binbash.co</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet"/>
    </Head>
    <style jsx global>{`
     *{
          padding:0;
          margin:0;
          box-sizzing: border-box;
      }
      body { 
        background: #2e2e4e;
        font: 11px menlo;
        color: #fff;
        font-family: Inconsolata,monospace;
      }
      .app {
        height:100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
)