'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, X, Phone, Users, Zap } from 'lucide-react';
import { companyInfo } from '@/data/company';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FloatingZaloButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { t, language } = useLanguage();

  // Hide button when scrolling down, show when scrolling up
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      
      if (direction !== "up") {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  // Auto-collapse after 5 seconds when expanded
  useEffect(() => {
    if (isExpanded) {
      const timer = setTimeout(() => {
        setIsExpanded(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [isExpanded]);

  const features = [
    {
      icon: Zap,
      title: t('zalo.freeConsult'),
      subtitle: t('zalo.support247')
    },
    {
      icon: Users,
      title: t('zalo.quickQuote'),
      subtitle: t('zalo.within30min')
    },
    {
      icon: Phone,
      title: t('zalo.hotline'),
      subtitle: companyInfo.contact.phone
    }
  ];

  return (
    <>
      {/* Floating Zalo Button */}
      <div className={`fixed right-6 bottom-6 z-[9999] transition-all duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-20'
      }`}>
        
        {/* Expanded Card */}
        {isExpanded && (
          <div className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 w-80 animate-in slide-in-from-bottom-5 duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Trinity Support</h3>
                  <div className="text-sm text-green-600 flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    {t('zalo.online')}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <p className="text-gray-600 text-sm mb-4">
              {t('zalo.greeting')}
            </p>
            
            <div className="space-y-3 mb-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-900">{feature.title}</p>
                    <p className="text-xs text-gray-500">{feature.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link href={companyInfo.contact.zaloOA} target="_blank">
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <MessageCircle className="inline-block mr-2 h-4 w-4" />
                {t('zalo.chatNow')}
              </button>
            </Link>
          </div>
        )}

        {/* Main Floating Button */}
        <div className="relative">
          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20"></div>
          <div className="absolute inset-0 bg-blue-600 rounded-full animate-pulse opacity-30"></div>
          
          {/* Main Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
          >
            <MessageCircle className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>
          
          {/* Tooltip */}
          <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {t('zalo.chatWith')}
            <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        </div>

        {/* Quick Access Button (Direct to Zalo) */}
        <Link href={companyInfo.contact.zaloOA} target="_blank">
          <div className="mt-3 w-12 h-12 bg-white border-2 border-blue-200 hover:border-blue-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group">
            <svg width="24" height="24" viewBox="0 0 24 24" className="group-hover:scale-110 transition-transform duration-300">
              <path fill="#0068FF" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438C8.34 21.475 10.11 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.59 0-3.1-.462-4.36-1.268l-3.104.923.923-3.104C4.462 15.1 4 13.59 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
              <path fill="#0068FF" d="M8.5 9.5a.5.5 0 000 1h3a.5.5 0 000-1h-3zm0 2a.5.5 0 000 1h7a.5.5 0 000-1h-7zm0 2a.5.5 0 000 1h7a.5.5 0 000-1h-7z"/>
            </svg>
          </div>
        </Link>
      </div>

      {/* Backdrop */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 z-[9998]"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  );
}