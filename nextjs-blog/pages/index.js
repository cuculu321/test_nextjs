import Head from 'next/head'
import Feature from "../components/Feature.js"
import ExLink from "../components/ExLink.js"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
	  	<div className="name">みつい　ゆうや</div>
		<Feature id={'1'} feature={'sake'}>
			sake-mugen
	  	</Feature>

		<Feature id={'2'} feature={'sake'}>
			sake-mugen
	  	</Feature>

		<Feature id={'3'} feature={'sake'}>
			sake-mugen
	  	</Feature>

	  	<div className="links">
			<ExLink url={'https://twitter.com/camelliayuji'} link={'twitter'}/>
			<ExLink url={'https://github.com/cuculu321'} link={'github'}/>
	  	</div>
	  </main>

	<style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
		main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
		.name {

		}
		.links {
			float: left;
			list_style: none;
			margin: 30px;
		}
		`}</style>
	</div>
	);
}
