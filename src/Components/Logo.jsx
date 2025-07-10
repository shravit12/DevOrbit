import { Link } from "react-router-dom";

const Logo = () => {
  return [
    <Link
      to="/"
      className="navbar-brand fw-bold"
      style={{
        fontFamily: "'Helvetica Neue', sans-serif",
        fontWeight: 500,
        fontSize: '1.98rem',
        background: 'white',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        cursor: 'pointer',
        textDecoration: 'none'
      }}
    >
      DevOrbit
    </Link>
  ]
};

export default Logo;
