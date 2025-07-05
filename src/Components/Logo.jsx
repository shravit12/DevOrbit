

const Logo = () =>{
  return[
    <>
  <a
  className="navbar-brand fw-bold"
  onClick={() => setActiveSection('home')}
  style={{
    fontFamily: "'Helvetica Neue', sans-serif",
    fontWeight: 500,
    fontSize: '1.25rem', // smaller and cleaner
    background: 'linear-gradient(to right, rgb(255, 255, 255), rgb(117, 117, 117))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    cursor: 'pointer',
    textDecoration: 'none'
  }}
>
  DevOrbit
</a>

    </>
  ]
}
export default Logo;
