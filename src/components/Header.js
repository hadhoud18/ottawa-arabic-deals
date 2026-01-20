export const Header = () => {
  return (
    <header style={{
      background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
      color: 'white',
      padding: '1.5rem 2rem',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{
          fontSize: '1.8rem',
          fontWeight: '900',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          🥙 <span>عروض أوتاوا العربية</span>
        </h1>
        <button style={{
          background: 'rgba(255,255,255,0.2)',
          color: 'white',
          padding: '0.5rem 1.5rem',
          borderRadius: '50px',
          border: 'none',
          fontWeight: '600',
          cursor: 'pointer',
          backdropFilter: 'blur(10px)'
        }}>
          English
        </button>
      </div>
    </header>
  );
};
