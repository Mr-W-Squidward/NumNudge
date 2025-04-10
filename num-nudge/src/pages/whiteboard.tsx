import { useEffect, useRef, useState } from 'react';

export default function Whiteboard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let drawing = false;

    const getPos = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const pointerDown = (e: PointerEvent) => {
      const pos = getPos(e);
      if (e.button !== 0 && e.button !== 2) return; // Only allow left mouse button
      drawing = true
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);

      const isEraser = e.button === 2; // Right click for eraser
      ctx.strokeStyle = isEraser ? '#000000' : color;
      ctx.lineWidth = isEraser ? 20 : 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    };

    const pointerMove = (e: PointerEvent) => {
      if (!drawing) return;
      const pos = getPos(e);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    };

    const pointerUp = (e: PointerEvent) => {
      drawing = false;
      ctx.closePath();
    };

    canvas.addEventListener('pointerdown', pointerDown);
    canvas.addEventListener('pointermove', pointerMove);
    canvas.addEventListener('pointerup', pointerUp);
    canvas.addEventListener('pointerleave', pointerUp);
    // Prevent right click activation on canvas
    canvas.addEventListener('contextmenu', (e) => {e.preventDefault();});

    return () => {
      canvas.removeEventListener('pointerdown', pointerDown);
      canvas.removeEventListener('pointermove', pointerMove);
      canvas.removeEventListener('pointerup', pointerUp);
      canvas.removeEventListener('pointerleave', pointerUp);
    };
  }, [color])

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Whiteboard</h1>

      <div className="flex items-center gap-4 mb-4">
        <label className="flex items-center gap-2">
          <span>Pen Color:</span>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <button
          onClick={clearCanvas}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Clear
        </button>
      </div>

      <canvas
        ref={canvasRef}
        className="border border-gray-500"
        width={800}
        height={800}
      />
    </div>
  );
}