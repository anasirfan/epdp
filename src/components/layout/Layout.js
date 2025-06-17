import { useEffect } from 'react';
import Head from 'next/head';
import Header from './Header';
import { useAppContext } from '../../context/AppContext';
import Modal from '../ui/Modal';
import AOS from 'aos';

export default function Layout({ children }) {
  const { isModalOpen, modalContent, closeModal } = useAppContext();
  
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <Head>
        <title>Limi Lighting: Interactive EPDP V2.0</title>
        <meta name="description" content="Interactive Engineering & Product Development Procedure for Limi Lighting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <div className="min-h-screen flex flex-col bg-[#f8f7f5] text-gray-700 font-['Inter']">
        <Header />
        
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        
        {/* Modal component */}
        <Modal 
          isOpen={isModalOpen} 
          onClose={closeModal}
          content={modalContent}
        />
      </div>
    </>
  );
}
