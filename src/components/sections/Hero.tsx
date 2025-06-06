'use client';

import { Button } from '@/components/ui/button';
import { companyInfo } from '@/data/company';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, TrendingUp, Award, Users, Zap, Play, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Business Technology"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-800/75 to-purple-900/85" />
      </div>
      
      {/* Animated Overlay Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium border border-white/20">
              <Sparkles className="h-4 w-4" />
              <span>{t('hero.aiAutomation')} Solutions</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              {t('hero.title')}
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
              {t('hero.subtitle')}
            </p>

            {/* Quick Benefits */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-white">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="font-medium">{t('hero.costSaving')}</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="font-medium">{t('hero.guarantee')}</span>
              </div>
            </div>

            {/* CTA Buttons - Improved UI/UX */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={companyInfo.contact.zaloOA} target="_blank">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-bold group shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 rounded-2xl border-0 w-full sm:w-auto"
                >
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
             
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100+</div>
                <div className="text-sm text-blue-200">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">30%</div>
                <div className="text-sm text-blue-200">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-blue-200">Support</div>
              </div>
            </div>
          </div>

          {/* Right Visual Content */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl" />
              <div className="relative space-y-6">
                {/* Key Benefits Cards */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl transition-all duration-300 hover:bg-white/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-white">
                      <div className="font-semibold">{t('hero.costSaving')}</div>
                      <div className="text-sm text-blue-200">Automated processes</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl transition-all duration-300 hover:bg-white/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-white">
                      <div className="font-semibold">{t('hero.aiAutomation')}</div>
                      <div className="text-sm text-blue-200">Smart solutions</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl transition-all duration-300 hover:bg-white/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-white">
                      <div className="font-semibold">{t('hero.guarantee')}</div>
                      <div className="text-sm text-blue-200">Full support included</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust Indicators - Redesigned */}
        <div className="mt-16 pt-8">
          <div className="text-center mb-8">
            <p className="text-blue-200 text-lg font-medium mb-2">{t('hero.trustedBy')}</p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="group">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">Demax Industrial</h3>
                <p className="text-blue-200 text-sm">Manufacturing Leader</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">Asatek Corporation</h3>
                <p className="text-blue-200 text-sm">Technology Innovation</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">100+ Projects</h3>
                <p className="text-blue-200 text-sm">Successful Deliveries</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}