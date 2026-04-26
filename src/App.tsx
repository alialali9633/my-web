/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  BarChart3, 
  MessageCircle, 
  ShieldCheck, 
  Settings, 
  TrendingUp, 
  Instagram, 
  Mail, 
  Zap, 
  Menu, 
  X, 
  Phone 
} from 'lucide-react';

// Images mapping from uploaded files
const IMAGES = {
  HERO: "/input_file_3.png",
  ABOUT: "/input_file_2.png",
  BIO: "/input_file_0.png",
  LIFESTYLE: "/input_file_1.png"
};

const SectionHeading = ({ children, badge }: { children: React.ReactNode, badge?: string }) => (
  <div className="mb-12">
    {badge && (
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-[10px] letter-spacing-widest uppercase font-bold text-primary mb-6 rounded-sm"
      >
        {badge}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-5xl md:text-7xl font-display font-bold leading-[0.95] text-balance uppercase tracking-tighter"
    >
      {children}
    </motion.h2>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description, features, number }: { icon: any, title: string, description: string, features: string[], number: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 bg-white/[0.03] border border-white/10 group hover:border-primary/50 transition-all flex flex-col h-full relative overflow-hidden"
  >
    <div className="flex justify-between items-start mb-12">
      <span className="text-[10px] font-mono text-primary uppercase tracking-widest leading-none">{number} / خدمة</span>
      <div className="w-4 h-4 bg-white/10 group-hover:bg-primary transition-colors"></div>
    </div>
    
    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{title}</h3>
    <p className="text-zinc-500 mb-8 flex-grow text-sm leading-relaxed">{description}</p>
    
    <ul className="space-y-4 mb-10">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-400">
          <div className="w-1 h-1 bg-primary"></div>
          {f}
        </li>
      ))}
    </ul>
    
    <button className="group flex items-center gap-3 text-[10px] letter-spacing-widest font-bold uppercase hover:text-primary transition-all">
      ابدأ الآن <ArrowRight size={14} className="group-hover:translate-x-[-4px] transition-transform" />
    </button>
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'الخدمات', href: '#services' },
    { name: 'أعمالي', href: '#cases' },
    { name: 'الأكاديمية', href: '#courses' },
    { name: 'تواصل معي', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-bg-dark text-white selection:bg-primary selection:text-black" dir="rtl">
      {/* Background Geometric Accents */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] border-[0.5px] border-white/5 rounded-full"></div>
        <div className="absolute bottom-[10%] left-[-100px] w-[400px] h-[400px] border-[0.5px] border-primary/10 rotate-45"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between z-10 border-b border-white/5 pb-6 bg-bg-dark/50 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center font-bold text-black text-sm">
              AA
            </div>
            <span className="text-[10px] letter-spacing-widest font-bold uppercase tracking-[0.3em]">علي العلي</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="hover:text-white hover:border-b hover:border-primary transition-all duration-300 pb-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a 
              href="https://wa.me/yourphone" 
              className="bg-primary text-black px-6 py-3 rounded-none text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2"
            >
              جلسة استراتيجية <Phone size={12} />
            </a>
          </div>

          <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 bg-zinc-900 border border-white/10 rounded-sm p-8 flex flex-col gap-6 shadow-2xl z-50"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-sm font-bold uppercase tracking-widest text-white/80 border-b border-white/5 pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="https://wa.me/yourphone" className="mt-4 bg-primary text-black text-center py-4 text-xs font-bold uppercase tracking-widest">
              احجز جلسة استراتيجية
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-48 pb-32 px-6 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 px-4 py-1.5 bg-white/5 border border-white/10 w-fit rounded-full">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">هندسة النمو الرقمي والأنظمة</span>
              </div>
              <h1 className="text-7xl md:text-9xl font-display font-bold leading-[0.9] mb-10 uppercase tracking-tighter">
                أبني <span className="text-primary italic">أنظمة</span> <br/>تحقق <br/>نمواً حقيقياً.
              </h1>
              <p className="text-xl text-white/50 mb-12 max-w-xl leading-relaxed font-light">
                أكثر من مجرد مسوق. أنا مشغل نمو رقمي أحول فوضى الأعمال إلى محركات مؤتمتة لإيرادات عالية التحويل.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="#services" className="px-10 py-5 bg-primary text-black rounded-none font-bold text-[11px] letter-spacing-widest uppercase hover:bg-white transition-all flex items-center gap-3 group">
                  عرض الخدمات <ArrowRight size={18} className="group-hover:translate-x-[-4px] transition-transform" />
                </a>
                <a href="#contact" className="px-10 py-5 border border-white/20 rounded-none font-bold text-[11px] letter-spacing-widest uppercase hover:bg-white/5 transition-all">
                  احجز جلسة استراتيجية
                </a>
              </div>
            </motion.div>

            <div className="mt-20 grid grid-cols-3 gap-12 border-t border-white/5 pt-12">
              <div>
                <p className="text-4xl font-display font-bold text-white">4+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-white/30">سنة خبرة</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-white">200+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-white/30">مشروع</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-white">1M+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-white/30">وصول إعلاني</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="aspect-[4/5] relative"
            >
              <div className="absolute inset-[-20px] border border-white/10 z-0"></div>
              <div className="absolute top-[-40px] right-[-40px] w-20 h-20 border-t border-r border-primary/50"></div>
              
              <div className="relative z-10 w-full h-full overflow-hidden">
                <img 
                  src={IMAGES.HERO} 
                  alt="علي العلي" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-30"></div>
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-bg-dark/90 backdrop-blur-xl p-6 border border-white/10 uppercase letter-spacing-widest">
                  <p className="text-[10px] font-bold text-primary mb-2">الهوية الجوهرية</p>
                  <p className="text-xs font-medium text-white/80 leading-relaxed">تحويل التواجد الرقمي إلى ربحية مؤتمتة.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-white/[0.02] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute inset-[-30px] border-[0.5px] border-white/5 z-0 rotate-2"></div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 aspect-[4/5] overflow-hidden"
            >
              <img 
                src={IMAGES.ABOUT} 
                alt="Architecture" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          
          <div>
            <SectionHeading badge="من أنا">مهندس أنظمة ومشغل نمو</SectionHeading>
            <div className="space-y-8 text-lg text-white/50 leading-relaxed font-light">
              <p>
                أنا <span className="text-white font-bold uppercase tracking-widest text-sm">علي العلي</span>، مشغل نمو رقمي بخبرة تزيد عن 4 سنوات في السوق الخليجي. أنا لا "أدير الإعلانات" فحسب - بل أقوم بهندسة الأنظمة البيئية للأعمال.
              </p>
              <p>
                نهجي متجذر في الدقة التقنية والتنفيذ القائم على البيانات. حل مشاكل الحسابات وبناء الأتمتة هو تخصصي.
              </p>
              
              <div className="grid grid-cols-2 gap-8 py-8 border-t border-white/5">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={16} className="text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white">إعلانات القمع الكامل</span>
                  </div>
                  <p className="text-xs">استراتيجيات محسنة لمنصات Meta و TikTok.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white">استرداد الحسابات</span>
                  </div>
                  <p className="text-xs">حل تقني لمشاكل حظر المنصات.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Settings size={16} className="text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white">الأتمتة</span>
                  </div>
                  <p className="text-xs">CRM وهندسة سير العمل.</p>
                </div>
                <div className="flex flex-col gap-3">
                   <div className="flex items-center gap-2">
                    <Zap size={16} className="text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white">تنفيذ سريع</span>
                  </div>
                  <p className="text-xs">تحويل الرؤى إلى أفعال في 24 ساعة.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <SectionHeading badge="الخدمات">حلول دقيقة</SectionHeading>
          <p className="text-white/40 text-lg max-w-md font-light leading-relaxed mb-6">
            بناء البنية التحتية التي يحتاجها عملك للتوسع بكفاءة.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <ServiceCard 
            number="01"
            icon={BarChart3}
            title="تسويق النمو"
            description="حملات ROI عالية، واستراتيجية محتوى مصممة لسوق الخليج."
            features={["Meta & TikTok", "قمع المبيعات", "تدقيق التحويل"]}
          />
          <ServiceCard 
            number="02"
            icon={ShieldCheck}
            title="العمليات التقنية"
            description="حلول لاستقرار المنصات وإزالة العوائق التي تمنع تدفق الأرباح."
            features={["استرداد الحسابات", "حل سياسات الإعلانات", "Pixel/API"]}
          />
          <ServiceCard 
            number="03"
            icon={Settings}
            title="الأنظمة و CRM"
            description="بناء بنية تحتية قوية للأعمال وأتمتة إدارة العملاء."
            features={["هندسة CRM", "WhatsApp API", "أتمتة سير العمل"]}
          />
        </div>
      </section>

      {/* Evidence Section */}
      <section id="cases" className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading badge="أعمالي">الأنظمة في حركة</SectionHeading>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/[0.02] border border-white/5 overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img src={IMAGES.BIO} alt="Case 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <span className="text-[10px] text-primary font-bold uppercase mb-4 block">01 / تجارة إلكترونية</span>
                <h3 className="text-2xl font-bold mb-4">نمو 300% لمتجر أزياء</h3>
                <p className="text-white/40 text-sm mb-6">إعادة هندسة قمع الاستحواذ بالكامل وتحسين عائد الاستثمار.</p>
              </div>
            </div>
            <div className="bg-white/[0.02] border border-white/5 overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img src={IMAGES.LIFESTYLE} alt="Case 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <span className="text-[10px] text-primary font-bold uppercase mb-4 block">02 / دعم تقني</span>
                <h3 className="text-2xl font-bold mb-4">استرداد حسابات تجارية كبرى</h3>
                <p className="text-white/40 text-sm mb-6">حل مشاكل حظر تقنية معقدة واستعادة النشاط الإعلاني بالكامل.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-4">
            <SectionHeading badge="تعلم">الأكاديمية الرقمية</SectionHeading>
            <p className="text-white/40 text-lg font-light leading-relaxed mb-10">
              احصل على المخططات التي أستخدمها للتوسع. تدريب تقني عالي للمحترفين.
            </p>
          </div>
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-white/[0.03] border border-white/10">
              <h4 className="text-xl font-bold mb-4">إعلانات TikTok المتقدمة</h4>
              <p className="text-white/40 text-sm mb-6">التلاعب الخوارزمي والتوسع الإبداعي.</p>
              <span className="text-2xl font-display font-bold">$199</span>
            </div>
            <div className="p-8 bg-white/[0.03] border border-white/10">
              <h4 className="text-xl font-bold mb-4">الأنظمة والأتمتة 1.0</h4>
              <p className="text-white/40 text-sm mb-6">بناء بنيات تحتية لـ CRM تعمل آلياً.</p>
              <span className="text-2xl font-display font-bold">$249</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-right">
          <div>
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <div className="w-8 h-8 bg-primary text-black font-bold flex items-center justify-center">AA</div>
              <span className="font-bold uppercase letter-spacing-widest">علي العلي</span>
            </div>
            <p className="text-white/30 text-sm max-w-xs leading-relaxed">
              هندسة نظم رقمية متطورة للأعمال الطموحة في دول الخليج.
            </p>
          </div>
          <div className="flex gap-6">
            <Instagram size={20} className="text-white/50 hover:text-primary transition-colors cursor-pointer" />
            <Mail size={20} className="text-white/50 hover:text-primary transition-colors cursor-pointer" />
            <MessageCircle size={20} className="text-white/50 hover:text-primary transition-colors cursor-pointer" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/5 mt-16 pt-8 text-[10px] text-white/20 uppercase tracking-[0.3em] flex justify-between">
          <p>© {new Date().getFullYear()} علي العلي</p>
          <p>D_SYSTEMS_ARCH</p>
        </div>
      </footer>
    </div>
  );
}
