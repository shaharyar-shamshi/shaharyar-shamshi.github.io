import { Reveal } from "./Reveal";
import { clientLogos } from "@/data/resume";

export const ClientLogos = () => {
  return (
    <section className="border-t border-border/60 py-10 md:py-12">
      <div className="section-inner max-w-content">
        <Reveal>
          <p className="text-center mono-tag">Forecasting for renewable energy operators including</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {clientLogos.map((client) => (
              <img
                key={client.name}
                src={client.src}
                alt={`${client.name} logo`}
                loading="lazy"
                className="h-7 w-auto object-contain grayscale opacity-60 transition-[filter,opacity] duration-200 hover:grayscale-0 hover:opacity-100 md:h-8"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
