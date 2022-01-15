import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
    <main>
      <h2>NotFound?</h2>
    </main>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </>
  )
}

export default NotFound;