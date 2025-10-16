export default function Footer() {
  return (
    <footer className="border-t">
      {/* full width; tiny padding; left text */}
      <div className="w-full px-3 md:px-6 py-8 text-sm text-gray-400">
        © {new Date().getFullYear()} Victor’s Deli — Nashville, TN (Mena Plaza) — Open TBD Daily
      </div>
    </footer>
  );
}
