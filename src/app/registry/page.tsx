import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="...">
      {/* ...other nav code... */}
      <ul className="flex space-x-8">
        <li>
          <Link href="/details" className="...">DETAILS</Link>
        </li>
        <li>
          <Link href="/dress-code" className="...">DRESS CODE</Link>
        </li>
        <li>
          <Link href="/faqs" className="...">FAQS</Link>
        </li>
        <li>
          <a
            href="https://www.zola.com/registry/betsyandcj"
            target="_blank"
            rel="noopener noreferrer"
            className="..." // add your nav link styles here
          >
            REGISTRY
          </a>
        </li>
        <li>
          <Link href="/rsvp" className="...">RSVP</Link>
        </li>
      </ul>
      {/* ...other nav code... */}
    </nav>
  );
}
