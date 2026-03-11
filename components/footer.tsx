import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row gap-3 sm:gap-0 items-center justify-between w-full py-6 text-sm text-gray-500 px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 border-t border-gray-100">
      <p className="text-center sm:text-left">© 2026 Pulser. All rights reserved.</p>

      <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
        <a href="#" className="hover:text-orange-500 transition-all">Contact Us</a>
        <span className="text-gray-200">|</span>
        <Link href="/privacy-policy" className="hover:text-orange-500 transition-all">
          Privacy Policy
        </Link>
        <span className="text-gray-200">|</span>
        <a href="#" className="hover:text-orange-500 transition-all">Trademark Policy</a>
      </div>
    </footer>
  );
}