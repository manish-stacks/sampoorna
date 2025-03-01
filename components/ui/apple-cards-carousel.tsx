import React, { useEffect, useRef, useState, createContext, useContext, RefObject, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useOutsideClick } from '@/hooks/use-outside-click';

interface CarouselProps {
  items: React.ReactElement[];
  initialScroll?: number;
}

type Card = {
  image: string;
  title: string;
  description: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-full w-[10%] pointer-events-none",
              ""
            )}
          ></div>
          <div
            className={cn(
              "absolute left-0 z-[1000] h-full w-[10%] pointer-events-none",
              "",
              !canScrollLeft && "opacity-0"
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-6 pl-8",
              "max-w-7xl mx-auto"
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    delay: 0.15 * index,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                key={`card-${index}`}
                className="last:pr-[10%] md:last:pr-[33%] rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-3 mr-10 mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-40 h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center disabled:opacity-40 transition-opacity duration-300 border border-gray-100"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-40 h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center disabled:opacity-40 transition-opacity duration-300 border border-gray-100"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </motion.button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // const { onCardClose, currentIndex } = useContext(CarouselContext);
  const { onCardClose } = useContext(CarouselContext);

  const handleClose = useCallback(() => {
    setOpen(false);
    onCardClose(index);
  }, [index, onCardClose]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, handleClose]);

  // useOutsideClick(containerRef, () => handleClose());
  useOutsideClick(containerRef as RefObject<HTMLElement>, handleClose);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1]
                }
              }}
              exit={{ 
                opacity: 0, 
                y: 20,
                transition: {
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1]
                }
              }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[60] my-10 p-6 md:p-10 rounded-3xl font-sans relative shadow-2xl"
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 h-10 w-10 bg-black dark:bg-white rounded-full flex items-center justify-center shadow-md"
                onClick={handleClose}
              >
                <X className="h-5 w-5 text-white dark:text-neutral-900" />
              </motion.button>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    delay: 0.1,
                    duration: 0.5
                  }
                }}
              >
                <motion.p
                  layoutId={layout ? `category-${card.title}` : undefined}
                  className="text-base font-medium text-black/80 dark:text-white/80 tracking-wide uppercase"
                >
                  {card.title}
                </motion.p>
                <motion.h2
                  layoutId={layout ? `title-${card.description}` : undefined}
                  className="text-3xl md:text-5xl font-bold text-neutral-800 mt-3 dark:text-white bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-white dark:to-neutral-300 leading-tight"
                >
                  {card.description}
                </motion.h2>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    transition: {
                      delay: 0.3,
                      duration: 0.5
                    }
                  }}
                  className="py-10"
                >
                  {card.content}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        whileHover={{ 
          y: -10,
          transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
        }}
        className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-60 md:h-[32rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10 shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div className="absolute h-full w-full top-0 inset-x-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-30 pointer-events-none" />
        
        <div className="relative h-full z-40 p-8 flex flex-col justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: 0.1,
                  duration: 0.5
                }
              }}
              className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full inline-block mb-4"
            >
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-white text-sm font-medium tracking-wide"
              >
                {card.title}
              </motion.p>
            </motion.div>
            
            <motion.h3
  layoutId={layout ? `title-${card.description}` : undefined}
  className="text-white text-base md:text-2xl font-bold font-sans text-left max-w-xs mt-2 drop-shadow-md line-clamp-3 md:line-clamp-2"
>
  {card.description}
</motion.h3>


          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                delay: 0.2,
                duration: 0.5
              }
            }}
            className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl mt-auto"
          >
            <p className="text-white/90 text-sm">View details →</p>
          </motion.div>
        </div>
        
        <div className="absolute inset-0 -z-10">
          <BlurImage
            src={card.image}
            alt={card.title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  src,
  alt,
  fill,
  className,
  ...rest
}: {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  [key: string]: unknown;
}) => {
  const [isLoading, setLoading] = useState(true);
  
  return (
    <div className={cn("relative overflow-hidden", fill && "h-full w-full")}>
      <motion.img
        initial={{ filter: 'blur(20px)', scale: 1.1 }}
        animate={{ 
          filter: isLoading ? 'blur(20px)' : 'blur(0px)',
          scale: isLoading ? 1.1 : 1,
          transition: {
            filter: { duration: 0.4, ease: 'easeOut' },
            scale: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
          }
        }}
        onLoad={() => setLoading(false)}
        src={src}
        alt={alt || "Image"}
        className={cn(
          "transition duration-700",
          fill && "absolute inset-0 h-full w-full object-cover",
          className
        )}
        loading="lazy"
        decoding="async"
        {...rest}
      />
      
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-neutral-800 animate-pulse" />
      )}
    </div>
  );
};