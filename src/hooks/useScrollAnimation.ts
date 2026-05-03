import { useInView } from 'react-intersection-observer';

interface UseScrollAnimationOptions {
  threshold?: number | number[];
  triggerOnce?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.2, triggerOnce = true } = options;

  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  return { ref, isInView: inView };
}
