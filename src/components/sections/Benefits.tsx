'use client';

import { Card, CardContent } from '@/components/ui/card';
import { companyInfo } from '@/data/company';
import { CheckCircle, Shield, Clock, Code2, HeadphonesIcon } from 'lucide-react';

const iconMap = [
  CheckCircle, // Tiết kiệm chi phí
  Shield,      // Bảo hành trọn đời
  HeadphonesIcon, // Hỗ trợ 24/7
  Code2,       // Bàn giao mã nguồn
  Clock        // Hỗ trợ linh hoạt
];

export default function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Reduced Text */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose Trinity
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Your success is our commitment
          </p>
        </div>

        {/* Benefits Grid - More Visual Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {companyInfo.benefits.map((benefit, index) => {
            const IconComponent = iconMap[index % iconMap.length];
            return (
              <Card 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group hover:scale-105"
              >
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-white">
                    {benefit.title.split(' ')[0]} {benefit.title.split(' ')[1]}
                  </h3>
                  <p className="text-blue-200 text-sm">
                    {benefit.description.split('.')[0]}.
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Quy trình làm việc Agile Scrum
            </h3>
            <p className="text-lg text-blue-100">
              Phương pháp quản lý dự án hiện đại, minh bạch và hiệu quả
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Phân tích yêu cầu', desc: 'Tìm hiểu chi tiết nhu cầu và mục tiêu của doanh nghiệp' },
              { step: '02', title: 'Thiết kế giải pháp', desc: 'Xây dựng kiến trúc và thiết kế phù hợp với yêu cầu' },
              { step: '03', title: 'Phát triển & Test', desc: 'Lập trình theo từng Sprint với kiểm thử liên tục' },
              { step: '04', title: 'Triển khai & Hỗ trợ', desc: 'Đưa vào vận hành và hỗ trợ bảo trì dài hạn' }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h4 className="font-semibold text-lg mb-2 text-white">
                  {process.title}
                </h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {process.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}