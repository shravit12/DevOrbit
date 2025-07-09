import { Link } from "react-router-dom";

const Logo = () => {
  return [
    <Link
      to="/"
      className="navbar-brand fw-bold"
      style={{
        fontFamily: "'Helvetica Neue', sans-serif",
        fontWeight: 500,
        fontSize: '2.25rem',
        background: 'linear-gradient(to right, rgb(255, 255, 255), rgb(117, 117, 117))',
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
