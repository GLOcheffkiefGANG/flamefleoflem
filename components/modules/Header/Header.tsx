'use client'
import Link from 'next/link'
import { useUnit } from 'effector-react'
import Menu from './Menu'
import { openMenu, openSearchModal } from '@/context/modals'
import {
  addOverflowHiddenToBody
} from '@/lib/utils/common'
import Logo from '@/components/elements/Logo/Logo'
import { useLang } from '@/hooks/useLang'
import { $isAuth } from '@/context/auth'
import { useEffect } from 'react'
// import { $user } from '@/context/user'
// import { useCartByAuth } from '@/hooks/useCartByAuth'
import { setLang } from '@/context/lang'
import CartPopup from './CartPopup/CartPopup'




const Header = () => {

  const handleOpenMenu = () => {
    addOverflowHiddenToBody()
    openMenu()
  }

  const handleOpenSearchModal = () => {
    openSearchModal()
    addOverflowHiddenToBody()
  }

  return (
    <header className='header'>
      <div className='container header__container'>
        <button className='btn-reset header__burger' onClick={handleOpenMenu}>
          {/* {translations[lang].header.menu_btn} */}
        </button>
        <Menu />
        <div className='header__logo'>
          <Logo />
        </div>
        <ul className='header__links list-reset'>
          <li className='header__links__item'>
            <button
              className='btn-reset header__links__item__btn header__links__item__btn--search'
              onClick={handleOpenSearchModal}
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/favorites'
              className='header__links__item__btn header__links__item__btn--favorites'
              >
            </Link>
          </li>
          <li className='header__links__item'>
              <Link
                className='header__links__item__btn header__links__item__btn--compare'
                href='/comparison'
              >
              </Link>
          </li>
         <li className='header__links__item'>
            <CartPopup/>
          </li>
          <li className='header__links__item header__links__item--profile'>
            {/* {isAuth ? (
              <HeaderProfile />
            ) : loginCheckSpinner ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : ( */}
              <button
                className='btn-reset header__links__item__btn header__links__item__btn--profile'
                // onClick={handleOpenAuthPopup}
              />
            {/* )} */}
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header