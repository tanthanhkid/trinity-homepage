'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { companyInfo } from '@/data/company';
import { Code, Brain, Building, Globe, Zap, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const iconMap = {
  Code,
  Brain,
  Building,
  Globe,
  Zap
};

export default function Services() {
  const { t } = useLanguage();
  
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 opacity-5">
            <Image
              src="/team-work.jpg"
              alt="Team collaboration"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>
        
        {/* Section Header */}
        <div className="relative text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4" />
            <span>Premium Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('services.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid - More Visual, Less Text */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {companyInfo.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            const serviceKey = [
              'services.customSoftware',
              'services.aiAutomation', 
              'services.erp',
              'services.webDev',
              'services.digitalTransform'
            ][index];
            const descKey = serviceKey + '.desc';
            
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-white/90 backdrop-blur-sm hover:bg-white relative overflow-hidden"
              >
                {/* Card gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                    {t(serviceKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative text-center">
                  <div className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {t(descKey).split('.')[0]}.
                  </div>
                  <div className="flex items-center justify-center space-x-1 text-sm text-blue-600">
                    <CheckCircle className="h-4 w-4" />
                    <span className="font-medium">Enterprise Ready</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Key Advantages Section */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('benefits.title')}
              </span>
            </h3>
            <p className="text-lg text-gray-600">
              {t('benefits.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {companyInfo.advantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">
                    {advantage.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href={companyInfo.contact.zaloOA} target="_blank">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-10 py-5 text-lg font-semibold group shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 rounded-2xl"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}