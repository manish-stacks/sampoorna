import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface CardItem {
  quote: string;
  name: string;
  title: string;
  image?: string;
}

interface InfiniteMovingCardsProps {
  items: CardItem[];
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      setupScroller();
    }
  }, [isInView, controls]);

  const setupScroller = () => {
    if (scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      for (let i = 0; i < 3; i++) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
      }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      className={cn(
        'relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => (
          <motion.li
            key={`${item.name}-${idx}`}
            className="w-[350px] max-w-full cursor-pointer relative rounded-2xl border border-slate-700/50 flex-shrink-0 px-8 py-6 md:w-[450px] overflow-hidden group"
            style={{
              background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 1))'
            }}
          >
            <div className="absolute -inset-[1px] rounded-xl   opacity-0 group-hover:opacity-100 blur-[2px] transition-all duration-500 group-hover:duration-200 animate-border-spin" />

            <blockquote className="relative z-10">
              <div className="relative z-20">
                <p className="text-sm leading-[1.6] text-gray-100 font-normal mb-4 relative">
                  &quot;{item.quote}&quot;
                </p>

                <div className="relative z-20 mt-6 flex flex-row items-center">
                  {item.image && (
                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full border border-slate-700">
                      <Image
                        src={item.image}
                        alt={item.name}
                      width={50}
                      height={50}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex flex-col gap-1">
                    <h4 className="text-base font-medium text-white">{item.name}</h4>
                    <p className="text-sm text-slate-400">{item.title}</p>
                  </div>
                </div>
              </div>
              <div className="w-8 h-0.5 bg-orange-500 mt-3 transition-all duration-300 group-hover:w-12" />
            </blockquote>
          </motion.li>
        ))}
      </ul>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-25% - 0.5rem));
          }
        }

        .animate-scroll {
          animation: scroll 100s linear infinite; /* Fixed slow speed */
        }
      `}</style>
    </motion.div>
  );
};
