import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center space-x-3">
        {/* 1D Logo Mark */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          className="fill-current text-gradient"
        >
          <path
            d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zM50 90c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"
          />
          <path
            d="M35 25h30v10H45v40H35V25z"
          />
        </svg>
        
        {/* Text part */}
        <div className="flex flex-col">
          <span className="text-2xl font-bold tracking-wider text-gradient">1D-DESIGN</span>
          <span className="text-lg tracking-wider text-gradient">STUDIO</span>
        </div>
      </div>
    </Link>
  );
}

