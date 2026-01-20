import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { OfferCard } from '../components/OfferCard';

// Backend داخلي (بدون json-server)
const OFFERS_DB = [
  {
    id: 1,
    title: 'شاورما 1+1 مجاناً 🥙',
    merchant: 'شاورما قصر الشام - فانير',
    image: 'https://images.unsplash.com/photo-1568900865105-fb452abf6845?w=400',
    discount: '1+1',
    expiry: '2026-02-19',
    category: 'مطاعم'
  },
  {
    id: 2,
    title: 'خصم 25% على كل البقالة 🛒',
    merchant: 'سوق أدونيس - أورليانز',
    image: 'https://images.unsplash.com/photo-1603048297194?w=400',
    discount: '25%',
    expiry: '2026-02-19',
    category: 'بقالة'
  },
  {
    id: 3,
    title: 'قهوة مجانية مع أي وجبة ☕',
    merchant: 'كافيه بيروت - سنترتاون',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    discount: 'مجاناً',
    expiry: '2026-02-19',
    category: 'مطاعم'
  }
];

const REDEMPTIONS_DB = [];

export const Home = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [redemptions, setRedemptions] = useState([]);

  useEffect(() => {
    // محاكاة تحميل من Backend
    setTimeout(() => {
      setOffers(OFFERS_DB);
      setLoading(false);
    }, 1000);
  }, []);

  const handleRedeem = (offerId) => {
    const code = `OTW-${offerId}-${Date.now()}`;
    
    // حفظ في الـ "Backend" الداخلي
    const redemption = {
      id: Date.now(),
      offerId,
      code,
      timestamp: new Date().toISOString()
    };
    
    REDEMPTIONS_DB.push(redemption);
    setRedemptions([...redemptions, redemption]);
    
    alert(`✅ تم تفعيل العرض!\n\nأظهر هذا الكود للكاشير:\n\n${code}\n\nتم حفظ ${REDEMPTIONS_DB.length} عملية استرداد`);
  };

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: '#f8fafc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          fontSize: '1.5rem',
          color: '#10b981',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          جاري تحميل العروض... ⏳
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <Header />
      
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        {/* إحصائيات */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '1.2rem', color: '#6b7280', marginBottom: '1rem' }}>
            📊 إحصائيات اليوم
          </h3>
          <div style={{ fontSize: '2rem', fontWeight: '800', color: '#10b981' }}>
            {offers.length} عرض متاح | {redemptions.length} عملية استرداد
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1rem'
          }}>
            أفضل عروض اليوم في أوتاوا
          </h2>
          <p style={{ fontSize: '1.3rem', color: '#6b7280' }}>
            وفر على المطاعم والبقالة العربية في حيك
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {offers.map(offer => (
            <OfferCard 
              key={offer.id} 
              offer={offer} 
              onRedeem={handleRedeem}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
