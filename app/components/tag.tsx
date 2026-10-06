export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2.5 py-1 text-xs font-medium bg-green-900/10 text-green-900 rounded-full border border-green-900/10">
      {children}
    </span>
  );
}
