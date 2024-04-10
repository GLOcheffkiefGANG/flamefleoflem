import { useUnit } from 'effector-react'
// import { faSpinner } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { forwardRef } from 'react'
// import { getCartItemsFx } from '@/api/cart'
import { withClickOutside } from '@/components/hocs/withClickOutside'
import { useLang } from '@/hooks/useLang'
import { IWrappedComponentProps } from '@/types/hocs'
// import CartPopupItem from './CartPopupItem'
// import { useTotalPrice } from '@/hooks/useTotalPrice'
// import { formatPrice } from '@/lib/utils/common'
// import { $cart, $cartFromLs } from '@/context/cart'
// import { useGoodsByAuth } from '@/hooks/useGoodsByAuth'

const CartPopup = forwardRef<HTMLDivElement, IWrappedComponentProps>(
  ({ open, setOpen }, ref) => {
    const { lang, translations } = useLang()
    const handleShowPopup = () => setOpen(true)

    const handleHidePopup = () => setOpen(false)

    return (
        <div className='cart-popup' ref={ref}>
          <Link
            className='header__links__item__btn header__links__item__btn--cart'
            href='/cart'
            onMouseEnter={handleShowPopup}
          >
          </Link>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className='cart-popup__wrapper'
                onMouseLeave={handleHidePopup}
              >
                <span className='cart-popup__arrow' />
                <button
                  className='btn-reset cart-popup__close'
                  onClick={handleHidePopup}
                />
                <h3 className='cart-popup__title'>
                  {translations[lang].breadcrumbs.cart}
                </h3>
                  <ul className='list-reset cart-popup__cart-list'>
                        <li className='cart-popup__cart-list__empty-cart' />
                      
                   
                  </ul>
                <div className='cart-popup__footer'>
                  <div className='cart-popup__footer__inner'>
                    <span>{translations[lang].common.order_price}:</span>
                    {/* <span>{formatPrice(animatedPrice)} ₽</span> */}
                  </div>
                  <Link href='/order' className='cart-popup__footer__link'>
                    {translations[lang].breadcrumbs.order}
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )
    }
  )

CartPopup.displayName = 'CartPopup'

export default withClickOutside(CartPopup)