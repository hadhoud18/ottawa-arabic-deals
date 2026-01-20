export const OfferCard = ({ offer, onRedeem }) => {
  const isActive = new Date(offer.expiry) > new Date();
  
  return (
    <div style={{
      background: 'white',
      borderRadius: '24px',
      padding: '2rem',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      cursor: isActive ? 'pointer' : 'default'
    }}
    onMouseEnter={(e) => {
      if (isActive) {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.15)';
      }
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
    }}>
      
      <img 
        src={offer.image} 
        alt={offer.title}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '16px',
          marginBottom: '1.5rem'
        }}
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/400x200/10b981/ffffff?text=عرض+متوفر';
        }}
      />
      
      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: '800',
        color: '#1f2937',
        marginBottom: '0.5rem'
      }}>
        {offer.title}
      </h3>
      
      <p style={{
        color: '#6b7280',
        fontSize: '1.1rem',
        marginBottom: '1rem'
      }}>
        {offer.merchant}
      </p>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1.5rem'
      }}>
        <span style={{
          background: '#10b981',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '50px',
          fontWeight: '700',
          fontSize: '0.9rem'
        }}>
          {offer.discount}
        </span>
        <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>
          حتى {offer.expiry}
        </span>
      </div>
      
      {isActive ? (
        <button
          onClick={() => onRedeem(offer.id)}
          style={{
            width: '100%',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: 'white',
            padding: '1rem',
            borderRadius: '16px',
            fontSize: '1.1rem',
            fontWeight: '700',
            border: 'none',
            boxShadow: '0 10px 30px rgba(16,185,129,0.4)',
            cursor: 'pointer'
          }}
        >
          🎫 استخدم العرض الآن
        </button>
      ) : (
        <div style={{
          width: '100%',
          background: '#f3f4f6',
          color: '#6b7280',
          padding: '1rem',
          borderRadius: '16px',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          منتهي الصلاحية
        </div>
      )}
    </div>
  );
};
