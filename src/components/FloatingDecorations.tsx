import { SpiralDoodle } from "./Doodles";

const FloatingDecorations = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-[20%] -left-4 animate-float opacity-40">
        <SpiralDoodle />
      </div>
      <div className="absolute top-[50%] -right-4 animate-float opacity-30" style={{ animationDelay: "2s" }}>
        <SpiralDoodle />
      </div>
      <div className="absolute top-[75%] left-[5%] animate-float opacity-25" style={{ animationDelay: "4s" }}>
        <SpiralDoodle />
      </div>
      
      <div className="absolute top-[30%] right-[10%] w-32 h-32 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute top-[60%] left-[8%] w-40 h-40 rounded-full bg-accent/5 blur-3xl" />
    </div>
  );
};

export default FloatingDecorations;
