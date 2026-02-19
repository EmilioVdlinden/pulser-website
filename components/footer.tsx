export default function Footer() {
    return (
        <>
            
            <footer className="flex flex-col md:flex-row gap-3 items-center justify-around w-full py-4 text-sm bg-whitetext-white/70 px-4 md:px-16 lg:px-24 xl:px-32">
                <p>Copyright © 2026 Pulser. All rights reservered.</p>
                <div className="flex items-center gap-4">
                    <a href="#" className="hover:text-orange-500 transition-all">
                        Contact Us
                    </a>
                    <div className="h-8 w-px bg-white/20"></div>
                    <a href="#" className="hover:text-orange-500 transition-all">
                        Privacy Policy
                    </a>
                    <div className="h-8 w-px bg-white/20"></div>
                    <a href="#" className="hover:text-orange-500 transition-all">
                        Trademark Policy
                    </a>
                </div>
            </footer>
        </>
    );
};