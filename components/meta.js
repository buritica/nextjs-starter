import Head from 'next/head'
import typography from '../utils/typography'
import { TypographyStyle, GoogleFont } from 'react-typography'

const { rhythm } = typography

export default ({ subtitle }) => (
  <div>
    <Head>
      <title>Home - {subtitle}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
    </Head>
    <style jsx global>{`
      h1, h2, h3, h4, h5, h6 {
        margin-top: 1.6875rem;
      }
    `}</style>
  </div>
)

export { rhythm }
