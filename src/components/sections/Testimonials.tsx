'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { companyInfo } from '@/data/company';
import { Star, ChevronLeft, ChevronRight, Quote, Building2, TrendingUp, Users, Play, Award, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { t } = useLanguage();
  const testimonials = companyInfo.testimonials;

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const industryIcons = {
    'Manufacturing': Building2,
    'Technology': TrendingUp,
    'AI/ML': Star,
    'Healthcare': Award
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="h-4 w-4" />
            <span>Customer Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from businesses that transformed with Trinity
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Testimonial */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-8 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-2xl" />
                
                <div className="relative">
                  {/* Industry Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {industryIcons[testimonials[currentIndex].industry as keyof typeof industryIcons] && (
                        <span className="inline-block">
                          {React.createElement(industryIcons[testimonials[currentIndex].industry as keyof typeof industryIcons], { className: "h-4 w-4" })}
                        </span>
                      )}
                      <span>{testimonials[currentIndex].industry}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:bg-blue-50"
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    >
                      <Play className={`h-4 w-4 ${isAutoPlaying ? 'animate-pulse' : ''}`} />
                    </Button>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="h-8 w-8 text-blue-600/30 absolute -top-2 -left-2" />
                    <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed pl-6 italic">
                      "{testimonials[currentIndex].content}"
                    </blockquote>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-6 space-x-2">
                    <div className="flex">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 font-medium">
                      {testimonials[currentIndex].rating}.0 / 5.0
                    </span>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side Panel - Success Metrics */}
          <div className="space-y-6">
            {/* Company Showcase */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-gray-900">Client Spotlight</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Building2 className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-700">{testimonials[currentIndex].company}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-700">30% Cost Reduction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                    <span className="text-sm text-gray-700">Project Completed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Success Metrics</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">100+</div>
                    <div className="text-sm text-blue-100">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">99%</div>
                    <div className="text-sm text-blue-100">Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">30%</div>
                    <div className="text-sm text-blue-100">Cost Savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-blue-100">Support</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`cursor-pointer transition-all duration-300 border-2 ${
                index === currentIndex 
                  ? 'border-blue-500 shadow-lg scale-105 bg-blue-50' 
                  : 'border-gray-200 hover:border-blue-300 hover:shadow-md bg-white'
              }`}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
            >
              <CardContent className="p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{testimonial.company}</p>
                    <p className="text-xs text-gray-600">{testimonial.industry}</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}