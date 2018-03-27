import Layout from '../components/layout/main'

export default () => (
  <Layout>
    <div className='content'>
      <h2>Starter</h2>
      <p>☠️hello world ☠️</p>
    </div>
    <style jsx global>{`.content-bg{background:black;}`}</style>
    <style jsx>{`
      .content {
        display:grid;
        padding: 2rem;
        max-width: 1080px;
      }
    `}</style>
  </Layout>
)
