
import React, { useEffect, useState } from 'react';

interface SnowItem {
  id: number;
  left: string;
  size: string;
  duration: string;
  delay: string;
  content: string;
  color: string;
}

const FloatingHearts: React.FC = () => {
  const [elements, setElements] = useState<SnowItem[]>([]);

  useEffect(() => {
    // Initial batch
    const initialItems = Array.from({ length: 40 }).map((_, i) => createItem(i));
    setElements(initialItems);

    const interval = setInterval(() => {
      setElements(prev => {
        const newItem = createItem(Date.now());
        // Keep about 80 items on screen for a "really many" effect
        return [...prev.slice(-80), newItem];
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  function createItem(id: number): SnowItem {
    const types = ['❤️', '💖', '⭐', '✨', '🤍'];
    const colors = ['#d12d3e', '#ff4d6d', '#ffd700', '#ffb3c1', '#ffffff'];
    const idx = Math.floor(Math.random() * types.length);
    
    return {
      id,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * (20 - 10) + 10}px`,
      duration: `${Math.random() * (8 - 4) + 4}s`,
      delay: `${Math.random() * 2}s`,
      content: types[idx],
      color: colors[idx]
    };
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map(el => (
        <span
          key={el.id}
          className="snow-element"
          style={{
            left: el.left,
            fontSize: el.size,
            animationDuration: el.duration,
            animationDelay: el.delay,
            color: el.color,
          }}
        >
          {el.content}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
