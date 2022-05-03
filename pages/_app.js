import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>{`
        a {
          color: red;
        }
      `}</style>
    </div>
  );
}
