import {
  HiOutlineClipboardList,
  HiOutlineShoppingCart,
  HiOutlineCheckCircle,
  HiOutlineTruck,
} from "react-icons/hi";

const steps = [
  { label: "Customize your bat", Icon: HiOutlineClipboardList },
  { label: "Add to cart", Icon: HiOutlineShoppingCart },
  { label: "Quality check & prep", Icon: HiOutlineCheckCircle },
  { label: "We ship it to you", Icon: HiOutlineTruck },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#0f0c1d] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold uppercase mb-16 tracking-wide">
          How It Works
        </h2>

        <div className="relative flex justify-between items-center max-w-5xl mx-auto">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-white/30 z-0 transform -translate-y-1/2" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative z-10 flex flex-col items-center text-center w-1/4 px-2"
            >
              <div className="bg-[#0f0c1d] px-1 z-10">
                <step.Icon className="text-4xl text-white" />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 mt-6 text-sm font-light text-white/90 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <p key={idx} className="text-center">
              {step.label}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
