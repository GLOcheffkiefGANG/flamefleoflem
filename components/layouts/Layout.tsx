'use client'
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Header from '../modules/Header/Header';
import MobileNavbar from '../modules/MobileNavbar/MobileNavbar';
import { AnimatePresence } from 'framer-motion';
import SearchModal from '../modules/Header/SearchModal';
import { useUnit } from 'effector-react';
import { motion } from 'framer-motion';
import { $searchModal } from '@/context/modals';
import { handleCloseSearchModal } from '@/lib/utils/common';
import Footer from '../modules/Footer/Footer'

const Layout = ({ children }: {children: React.ReactNode}) => {
    const isMedia800 = useMediaQuery(800)
    const searchModal = useUnit($searchModal)
    // при разрешении меньше 800 пикселей у нас будет появляться navbar с навигацией
    return (
        <>
                    <Header />
            {children}
            {isMedia800 && <MobileNavbar />}
            <AnimatePresence>
                {searchModal && (
                <motion.div
                    initial={{ opacity: 0, zIndex: 3 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <SearchModal />
                </motion.div>
                )}
            </AnimatePresence>
            <div
             className={`header__search-overlay ${
                searchModal ? 'overlay-active' : ''
              }`}
              onClick={handleCloseSearchModal}
            />
            <Footer />
        </>
    )
}

    export default Layout;