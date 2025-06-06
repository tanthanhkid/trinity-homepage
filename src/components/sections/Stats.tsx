'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { TrendingUp, Users, Clock, Award } from 'lucide-react';
import Image from 'next/image';
import { companyInfo } from '@/data/company';

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: TrendingUp,
      number: "100+",
      label: t('stats.projects'),
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      number: "50+",
      label: t('stats.clients'), 
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      number: "30%",
      label: t('stats.savings'),
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      number: "24/7",
      label: t('stats.support'),
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/modern-office.jpg"
          alt="Modern Office"
          fill
          className="object-cover object-center"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-blue-900/80 to-purple-900/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Delivering measurable results for businesses across Vietnam
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="relative">
                  <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-blue-200 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}