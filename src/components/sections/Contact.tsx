'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { companyInfo } from '@/data/company';
import { Mail, Phone, MapPin, MessageCircle, Clock, Zap, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function Contact() {
  const { t, language } = useLanguage();

  const handleZaloRedirect = () => {
    window.open(companyInfo.contact.zaloOA, '_blank');
  };

  const benefits = [
    {
      icon: Clock,
      title: t('contact.response5min'),
      description: t('contact.teamReady')
    },
    {
      icon: Zap,
      title: t('contact.freeConsult'),
      description: t('contact.freeAnalysis')
    },
    {
      icon: Users,
      title: t('contact.experts'),
      description: t('contact.experience')
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="h-4 w-4" />
            <span>{t('contact.badge')}</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('contact.title')}
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main CTA */}
          <div className="space-y-8">
            {/* Main Zalo CTA Card */}
            <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-500">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl">
                    <MessageCircle className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {t('contact.chatTitle')}
                  </h3>
                  
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    {t('contact.chatDesc')}
                  </p>

                  <div className="space-y-3 mb-8">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3 text-left">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-white text-sm">{benefit.title}</p>
                          <p className="text-blue-200 text-xs">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={handleZaloRedirect}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 px-8 rounded-2xl font-bold text-lg group shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageCircle className="inline-block mr-3 h-6 w-6" />
                    {t('contact.startChat')}
                    <ArrowRight className="inline-block ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                  <p className="text-blue-200 text-sm mt-4">
                    {t('contact.features')}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Benefits */}
            <div className="grid grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-white text-sm mb-1">{benefit.title}</h4>
                    <p className="text-blue-200 text-xs">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/10 backdrop-blur-md border border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {t('contact.info')}
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-blue-300" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{t('contact.hotline')}</p>
                      <a href={`tel:${companyInfo.contact.phone}`} className="text-blue-300 hover:text-blue-200 transition-colors">
                        {companyInfo.contact.phone}
                      </a>
                      <p className="text-blue-200 text-sm mt-1">
                        {t('contact.support247')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-purple-300" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <a href={`mailto:${companyInfo.contact.email}`} className="text-purple-300 hover:text-purple-200 transition-colors">
                        {companyInfo.contact.email}
                      </a>
                      <p className="text-blue-200 text-sm mt-1">
                        {t('contact.emailResponse')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-green-300" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{t('contact.address')}</p>
                      <p className="text-green-300 leading-relaxed">
                        {companyInfo.contact.address}
                      </p>
                      <p className="text-blue-200 text-sm mt-1">
                        {t('contact.mainOffice')}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alternative Contact Methods */}
            <div className="grid grid-cols-2 gap-4">
              <Link href={`tel:${companyInfo.contact.phone}`}>
                <Card className="border-0 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <Phone className="h-8 w-8 text-blue-300 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <p className="font-semibold text-white text-sm">
                      {t('contact.callNow')}
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href={`mailto:${companyInfo.contact.email}`}>
                <Card className="border-0 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <Mail className="h-8 w-8 text-purple-300 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <p className="font-semibold text-white text-sm">
                      {t('contact.sendEmail')}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-blue-200 text-lg mb-6">
            {t('contact.trustedBy')}
          </p>
          
          <button 
            onClick={handleZaloRedirect}
            className="bg-white text-blue-600 hover:bg-blue-50 px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            {t('contact.getFreeConsult')}
          </button>
        </div>
      </div>
    </section>
  );
}