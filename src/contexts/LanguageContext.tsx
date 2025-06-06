'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  vi: {
    // Navigation
    'nav.home': 'Trang chủ',
    'nav.services': 'Dịch vụ',
    'nav.about': 'Về chúng tôi',
    'nav.testimonials': 'Đánh giá',
    'nav.contact': 'Liên hệ',
    'nav.contactDemo': 'Liên hệ Demo',
    
    // Hero Section
    'hero.title': 'Chuyển Đổi Số Toàn Diện',
    'hero.subtitle': 'Tối Ưu Chi Phí & Tập Trung Kiểm Soát Doanh Nghiệp',
    'hero.costSaving': 'Tiết kiệm 20-30% chi phí',
    'hero.aiAutomation': 'AI & Tự động hóa',
    'hero.guarantee': 'Bảo hành trọn đời',
    'hero.cta': 'Liên hệ Demo',
    'hero.learnMore': 'Tìm hiểu thêm',
    'hero.watchDemo': 'Xem Demo',
    'hero.trustedBy': 'Được tin tưởng bởi các doanh nghiệp hàng đầu',
    
    // Services
    'services.title': 'Dịch Vụ Của Chúng Tôi',
    'services.subtitle': 'Giải pháp công nghệ toàn diện cho doanh nghiệp hiện đại',
    'services.customSoftware': 'Phát triển phần mềm tùy chỉnh',
    'services.customSoftware.desc': 'Giải pháp phần mềm được thiết kế riêng cho doanh nghiệp của bạn với tính năng tối ưu và hiệu suất cao.',
    'services.aiAutomation': 'AI & Tự động hóa',
    'services.aiAutomation.desc': 'Ứng dụng AI và công nghệ tự động hóa để tối ưu quy trình, giảm thiểu sai sót và tăng hiệu quả.',
    'services.erp': 'Hệ thống ERP',
    'services.erp.desc': 'Quản lý tài nguyên doanh nghiệp tập trung và hiệu quả với giao diện thân thiện, dễ sử dụng.',
    'services.webDev': 'Phát triển Web',
    'services.webDev.desc': 'Website và ứng dụng web hiện đại, responsive với UX/UI chuyên nghiệp và tốc độ tải nhanh.',
    'services.digitalTransform': 'Chuyển đổi số',
    'services.digitalTransform.desc': 'Tư vấn và triển khai chuyển đổi số toàn diện, từ quy trình đến công nghệ.',
    
    // Benefits
    'benefits.title': 'Tại Sao Chọn Trinity',
    'benefits.subtitle': 'Những lợi ích vượt trội khi hợp tác cùng chúng tôi',
    'benefits.costSaving': 'Tiết kiệm 20-30% chi phí vận hành',
    'benefits.costSaving.desc': 'Tự động hóa quy trình giúp giảm thiểu chi phí nhân sự và vận hành đáng kể.',
    'benefits.lifetime': 'Bảo hành trọn đời',
    'benefits.lifetime.desc': 'Cam kết hỗ trợ và bảo trì hệ thống trong suốt thời gian sử dụng.',
    'benefits.support': 'Hỗ trợ 24/7',
    'benefits.support.desc': 'Đội ngũ kỹ thuật chuyên nghiệp sẵn sàng hỗ trợ bất cứ lúc nào.',
    'benefits.sourceCode': 'Bàn giao mã nguồn',
    'benefits.sourceCode.desc': 'Hoàn toàn sở hữu mã nguồn và có thể tự phát triển tiếp theo nhu cầu.',
    'benefits.flexible': 'Hỗ trợ linh hoạt',
    'benefits.flexible.desc': 'Cả online và offline, phù hợp với mọi tình huống và yêu cầu.',
    
    // Testimonials
    'testimonials.title': 'Khách Hàng Nói Gì',
    'testimonials.subtitle': 'Những phản hồi tích cực từ khách hàng đã hợp tác',
    
    // Contact
    'contact.title': 'Liên Hệ Với Chúng Tôi',
    'contact.subtitle': 'Sẵn sàng hỗ trợ bạn chuyển đổi số thành công',
    'contact.name': 'Họ và tên',
    'contact.email': 'Email',
    'contact.phone': 'Số điện thoại',
    'contact.company': 'Công ty',
    'contact.message': 'Tin nhắn',
    'contact.send': 'Gửi tin nhắn',
    'contact.info': 'Thông tin liên hệ',
    
    // Footer
    'footer.about': 'Về Trinity',
    'footer.about.text': 'Công ty TNHH Công Nghệ Phần Mềm Trinity chuyên cung cấp giải pháp chuyển đổi số toàn diện cho doanh nghiệp.',
    'footer.quickLinks': 'Liên kết nhanh',
    'footer.services': 'Dịch vụ',
    'footer.contact': 'Liên hệ',
    'footer.rights': 'Bản quyền thuộc về Công ty TNHH Công Nghệ Phần Mềm Trinity',
    
    // Company
    'company.name': 'Công ty TNHH Công Nghệ Phần Mềm Trinity',
    'company.address': 'Pearl Plaza, 561A Điện Biên Phủ, Bình Thạnh, Hồ Chí Minh',
    'company.taxId': 'Mã số thuế: 0318676600',
    
    // Stats
    'stats.projects': 'Dự án hoàn thành',
    'stats.clients': 'Khách hàng tin tưởng',
    'stats.savings': 'Tiết kiệm chi phí',
    'stats.support': 'Hỗ trợ khách hàng',
    
    // Contact Benefits
    'contact.badge': 'Liên hệ ngay',
    'contact.readyTitle': 'Sẵn sàng bắt đầu?',
    'contact.subtitle': 'Hãy để Trinity giúp bạn chuyển đổi số và tối ưu hóa doanh nghiệp của mình',
    'contact.chatTitle': 'Chat trực tiếp với chuyên gia',
    'contact.chatDesc': 'Nhận tư vấn miễn phí và báo giá chi tiết trong vòng 30 phút qua Zalo Official Account',
    'contact.startChat': 'Bắt đầu chat ngay',
    'contact.features': '✨ Không cần đăng ký • Tư vấn 24/7 • Hoàn toàn miễn phí',
    'contact.info': 'Thông tin liên hệ',
    'contact.hotline': 'Hotline',
    'contact.support247': 'Hỗ trợ 24/7',
    'contact.emailResponse': 'Phản hồi trong 2 giờ',
    'contact.address': 'Địa chỉ',
    'contact.mainOffice': 'Văn phòng chính',
    'contact.callNow': 'Gọi ngay',
    'contact.sendEmail': 'Gửi email',
    'contact.trustedBy': 'Hơn 100+ doanh nghiệp đã tin tưởng Trinity',
    'contact.getFreeConsult': 'Nhận tư vấn miễn phí ngay',
    'contact.response5min': 'Phản hồi trong 5 phút',
    'contact.teamReady': 'Đội ngũ tư vấn luôn sẵn sàng',
    'contact.freeConsult': 'Tư vấn miễn phí',
    'contact.freeAnalysis': 'Phân tích nhu cầu không tính phí',
    'contact.experts': 'Chuyên gia giàu kinh nghiệm',
    'contact.experience': '5+ năm trong ngành',
    
    // Floating Zalo Button
    'zalo.freeConsult': 'Tư vấn miễn phí',
    'zalo.support247': '24/7 hỗ trợ',
    'zalo.quickQuote': 'Báo giá nhanh',
    'zalo.within30min': 'Trong 30 phút',
    'zalo.hotline': 'Hotline',
    'zalo.online': 'Đang online',
    'zalo.greeting': 'Chào bạn! Tôi có thể giúp gì cho bạn hôm nay?',
    'zalo.chatNow': 'Chat ngay trên Zalo',
    'zalo.chatWith': 'Chat với Trinity'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.contactDemo': 'Contact Demo',
    
    // Hero Section
    'hero.title': 'Comprehensive Digital Transformation',
    'hero.subtitle': 'Optimize Costs & Centralize Business Control',
    'hero.costSaving': 'Save 20-30% operating costs',
    'hero.aiAutomation': 'AI & Automation',
    'hero.guarantee': 'Lifetime warranty',
    'hero.cta': 'Contact Demo',
    'hero.learnMore': 'Learn More',
    'hero.watchDemo': 'Watch Demo',
    'hero.trustedBy': 'Trusted by leading enterprises',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive technology solutions for modern enterprises',
    'services.customSoftware': 'Custom Software Development',
    'services.customSoftware.desc': 'Tailored software solutions designed specifically for your business with optimal features and high performance.',
    'services.aiAutomation': 'AI & Automation',
    'services.aiAutomation.desc': 'Apply AI and automation technology to optimize processes, minimize errors, and increase efficiency.',
    'services.erp': 'ERP Systems',
    'services.erp.desc': 'Centralized and efficient enterprise resource management with user-friendly and easy-to-use interface.',
    'services.webDev': 'Web Development',
    'services.webDev.desc': 'Modern, responsive websites and web applications with professional UX/UI and fast loading speed.',
    'services.digitalTransform': 'Digital Transformation',
    'services.digitalTransform.desc': 'Comprehensive digital transformation consulting and implementation, from processes to technology.',
    
    // Benefits
    'benefits.title': 'Why Choose Trinity',
    'benefits.subtitle': 'Superior benefits when partnering with us',
    'benefits.costSaving': 'Save 20-30% operating costs',
    'benefits.costSaving.desc': 'Process automation helps significantly reduce personnel and operational costs.',
    'benefits.lifetime': 'Lifetime warranty',
    'benefits.lifetime.desc': 'Committed to supporting and maintaining the system throughout its usage period.',
    'benefits.support': '24/7 Support',
    'benefits.support.desc': 'Professional technical team ready to support anytime.',
    'benefits.sourceCode': 'Source code handover',
    'benefits.sourceCode.desc': 'Complete ownership of source code and ability to develop further as needed.',
    'benefits.flexible': 'Flexible support',
    'benefits.flexible.desc': 'Both online and offline, suitable for all situations and requirements.',
    
    // Testimonials
    'testimonials.title': 'What Clients Say',
    'testimonials.subtitle': 'Positive feedback from clients we have worked with',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to support your successful digital transformation',
    'contact.name': 'Full Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone Number',
    'contact.company': 'Company',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.info': 'Contact Information',
    
    // Footer
    'footer.about': 'About Trinity',
    'footer.about.text': 'Trinity Software Technology Co., Ltd specializes in providing comprehensive digital transformation solutions for enterprises.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': 'Copyright © Trinity Software Technology Co., Ltd',
    
    // Company
    'company.name': 'Trinity Software Technology Co., Ltd',
    'company.address': 'Pearl Plaza, 561A Dien Bien Phu, Binh Thanh, Ho Chi Minh City',
    'company.taxId': 'Tax ID: 0318676600',
    
    // Stats
    'stats.projects': 'Projects Completed',
    'stats.clients': 'Trusted Clients',
    'stats.savings': 'Cost Savings',
    'stats.support': 'Customer Support',
    
    // Contact Benefits
    'contact.badge': 'Contact Now',
    'contact.readyTitle': 'Ready to Start?',
    'contact.subtitle': 'Let Trinity help you transform digitally and optimize your business',
    'contact.chatTitle': 'Chat directly with experts',
    'contact.chatDesc': 'Get free consultation and detailed quotes within 30 minutes via Zalo Official Account',
    'contact.startChat': 'Start chatting now',
    'contact.features': '✨ No registration required • 24/7 consultation • Completely free',
    'contact.info': 'Contact Information',
    'contact.hotline': 'Hotline',
    'contact.support247': '24/7 Support',
    'contact.emailResponse': 'Response within 2 hours',
    'contact.address': 'Address',
    'contact.mainOffice': 'Main office',
    'contact.callNow': 'Call now',
    'contact.sendEmail': 'Send email',
    'contact.trustedBy': 'Over 100+ businesses have trusted Trinity',
    'contact.getFreeConsult': 'Get free consultation now',
    'contact.response5min': 'Response in 5 minutes',
    'contact.teamReady': 'Consultation team always ready',
    'contact.freeConsult': 'Free consultation',
    'contact.freeAnalysis': 'Free needs analysis',
    'contact.experts': 'Experienced experts',
    'contact.experience': '5+ years in industry',
    
    // Floating Zalo Button
    'zalo.freeConsult': 'Free Consultation',
    'zalo.support247': '24/7 Support',
    'zalo.quickQuote': 'Quick Quote',
    'zalo.within30min': 'Within 30 mins',
    'zalo.hotline': 'Hotline',
    'zalo.online': 'Online now',
    'zalo.greeting': 'Hello! How can I help you today?',
    'zalo.chatNow': 'Chat on Zalo now',
    'zalo.chatWith': 'Chat with Trinity'
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('vi');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['vi', 'en'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};