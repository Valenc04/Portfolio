/** Renderiza un texto donde **esto** va en negrita */
export default function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 ? <strong key={i} className="text-green-950">{part}</strong> : part
      )}
    </>
  );
}
