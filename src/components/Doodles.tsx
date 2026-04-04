export const ArrowDoodle = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 32C12 20 20 12 32 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M24 6L32 8L30 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CurlyDoodle = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 25C15 10 25 10 25 25C25 40 35 40 40 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const SquigglyLine = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 15C15 5 25 25 35 15C45 5 55 25 65 15C75 5 85 25 95 15C105 5 115 25 115 15" 
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const SpiralDoodle = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 40C40 35 45 30 50 30C55 30 60 35 60 40C60 50 50 55 40 55C25 55 20 45 20 35C20 20 30 10 45 10C65 10 70 25 70 40C70 60 55 70 40 70" 
      stroke="hsl(340, 60%, 80%)" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
  </svg>
);
