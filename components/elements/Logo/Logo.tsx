import Link from 'next/link'

const Logo = () => (
  <Link className='logo' href='/'>
    <img className='logo__img' src='./img/FlameLogoBaker.png' alt='Flame Logo' />  
  </Link>
)

export default Logo