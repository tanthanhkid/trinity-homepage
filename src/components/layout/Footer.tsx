import Link from 'next/link';
import { companyInfo } from '@/data/company';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-bold text-xl">Trinity</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Công ty công nghệ hàng đầu chuyên về phát triển phần mềm, 
              AI và chuyển đổi số doanh nghiệp.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>{companyInfo.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>{companyInfo.contact.email}</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-300">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{companyInfo.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Dịch vụ</h3>
            <ul className="space-y-2">
              {companyInfo.services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href="#services" 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Liên hệ</h3>
            <div className="space-y-2">
              <Link 
                href={companyInfo.contact.zaloOA}
                target="_blank"
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <span>Zalo: {companyInfo.contact.phone}</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
              <p className="text-gray-400 text-sm">
                Mã số thuế: {companyInfo.contact.taxId}
              </p>
            </div>
            
            <div className="pt-4">
              <h4 className="font-medium mb-2">Theo dõi chúng tôi</h4>
              <div className="flex space-x-4">
                <Link 
                  href="/blog" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {companyInfo.name}. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}