import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Sprout, BarChart3, Languages, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-farm.png';

const HeroSection = () => {
  const { t } = useTranslation();

  const features = [
    { icon: ShoppingBag, title: t('features.directTrade'), desc: t('features.directTradeDesc') },
    { icon: Users, title: t('features.community'), desc: t('features.communityDesc') },
    { icon: BarChart3, title: t('features.analytics'), desc: t('features.analyticsDesc') },
    { icon: Languages, title: t('features.multilingual'), desc: t('features.multilingualDesc') },
  ];

  return (
    <div className="min-h-[calc(100vh-64px)]">
      {/* Hero */}
      <section className="container mx-auto px-4 pt-8 pb-16 md:pt-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <Sprout className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Smart Krishi Connect</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 gradient-text">
              {t('hero.headline')}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              {t('hero.subtext')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/select-role?mode=signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold flex items-center gap-2 btn-glow"
                >
                  {t('hero.getStarted', 'Get Started')}
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
              <Link to="/marketplace">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card px-6 py-3 rounded-xl font-semibold text-foreground flex items-center gap-2 hover:bg-primary/5 transition-colors"
                >
                  <ShoppingBag className="h-5 w-5" />
                  {t('hero.explore')}
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Smart Krishi - Digital Agriculture"
                className="w-full h-auto object-cover float-animation"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 pb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-12 gradient-text"
        >
          {t('features.title')}
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feat.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feat.title}</h3>
              <p className="text-sm text-muted-foreground">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
