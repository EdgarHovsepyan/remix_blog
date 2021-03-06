import {
  Link,
  LiveReload,
  Outlet,
  Links,
   Meta
} from "remix";
import globalStylesUrl from "~/styles/global.css"

export const links = () => [{rel: 'stylesheet', href: globalStylesUrl}]

export const meta = () => {
  const description = "A cool blog built with Remix";
  const keywords = "remix, react, javascript";
  const viewport = "width=device-width,initial-scale=1"

  return {
    description,
    keywords,
    viewport
  }
}

export default function App() {
  return (
   <Document>
      <Layout>
        <Outlet />
      </Layout>
   </Document>
  );
}

function Document({children, title}) {
  return (
     <html lang="en">
      <head>
        <Links />
        <Meta />
         <meta charSet="utf-8" />
        <title>{title ? "title" : "My Remix Blog"}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}

function Layout({children}) {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">Remix</Link>
        <ul>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>

      <div className="container">
        {children}
      </div>
    </>
  )
}

export function ErrorBoundary({error}) {
    console.log(error)

    return (
        <Document>
          <Layout>
              <h1>Error</h1>
              <p>{error.message}</p>
            </Layout>
        </Document>
    )
}
