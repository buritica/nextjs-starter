import Meta, { rhythm } from '../meta'
import Link from 'next/link'

export default props => (
  <div>
    <Meta subtitle='change me' />

    <div className='container'>
      <Link href='/'>
        <img
          id='logo'
          src='./static/logo_condor.svg'
          alt='colombia.dev Logo Condor'
        />
      </Link>
      <h1>buritica next.js starter</h1>
      <div className='content-bg'>
        <div className='content'>
          {props.children}
        </div>
      </div>
    </div>
    <style jsx>{` 
    /* https://github.com/zeit/styled-jsx/issues/254 */
    @custom-media --medium-up (width > 641px);
    @custom-media --large-up (width > 1025px);
    
    .container {
      display: grid;
      grid-template-areas: "logo" "header" "content";
      grid-template-rows: auto auto 1fr;
      justify-items: center;

      h1 {
        text-align: center;
      }
    }

    #logo {
      grid-area: logo;
      max-width: 90%;
      margin-bottom: 0;
      cursor: pointer;

      @media (--medium-up){
        max-width: 300px;
      }
    }

    h1 {
      grid-area: header;
      text-align: center;
      margin-top: 0;
      font-size: 2.5rem;
    }

    .content-bg {
      background: black;
      width: 100%;
      min-height: 400px;
      display: grid;
      color: #ffffff;
    }

    .content {
      grid-area: content;
      height: 1fr;
      max-width: 1080px;
    }

   `}</style>

  </div>
)
