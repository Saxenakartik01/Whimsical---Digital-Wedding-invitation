import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type ElementType,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: "up" | "zoom";
  delay?: number;
  as?: ElementType;
};

export default function Reveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const base = variant === "zoom" ? "reveal-zoom" : "reveal";
  const Tag = as as any;

  return (
    <Tag
      ref={ref as any}
      className={`${base} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
