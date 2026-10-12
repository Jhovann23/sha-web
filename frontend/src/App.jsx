import { useState } from "react";
import {
  Menu, X, Building2, LockKeyhole, House, PanelsTopLeft,
  ShieldCheck, Clock3, CircleDollarSign, MapPin, Phone, Mail
} from "lucide-react";

const BRAND = {
  blue: "#0055A5",
  red: "#E31837",
};

const services = [
  {
    title: "Kusen Alumunium",
    description: "Presisi tinggi, kuat, dan tahan lama untuk berbagai desain bangunan.",
    icon: Building2,
    accent: "blue",
  },
  {
    title: "Pintu & Jendela",
    description: "Desain modern, mulai dari pintu swing, sliding, hingga jendela casement.",
    icon: LockKeyhole,
    accent: "red",
  },
  {
    title: "Kitchen Set",
    description: "Rangka alumunium anti rayap dan awet untuk dapur modern Anda.",
    icon: House,
    accent: "blue",
  },
  {
    title: "Partisi Ruangan",
    description: "Pembatas ruangan estetis dan fungsional untuk kantor atau rumah.",
    icon: PanelsTopLeft,
    accent: "red",
  },
];

const advantages = [
  {
    title: "Tahan Karat & Cuaca",
    description:
      "Material alumunium pilihan kami menjamin keawetan ekstra, bebas dari karat dan tahan terhadap perubahan cuaca ekstrem.",
    icon: ShieldCheck,
    accent: "blue",
  },
  {
    title: "Pengerjaan Cepat & Rapi",
    description:
      "Dikerjakan oleh tenaga ahli berpengalaman sehingga hasil akhir presisi, rapi, dan selesai tepat waktu.",
    icon: Clock3,
    accent: "red",
  },
  {
    title: "Harga Kompetitif",
    description:
      "Kualitas premium dengan penawaran harga yang transparan dan bersaing di pasaran.",
    icon: CircleDollarSign,
    accent: "blue",
  },
];

function Logo({ footer = false }) {
  return (
    <a className={`brand ${footer ? "brand-footer" : ""}`} href="#home" aria-label="Sinar Harapan Alumunium - Beranda">
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzvdO_PpCcb7yihbqEKYzvUnQEEh-O3AEM1ECvpcwWpzMI-TzIazCad5vVEQRT5qZbgY7wSDBO-mOjoQ6xj-_GcufXriW5u-6vJ0D-CN6ImVwGY873ZOycam5K7ksvi09cB6oabLXXisiISNNWoPWCv6WqZkIdeeZGrHTHcsZKKFYXR56UtAMrd9QQxnyBI8G1Ux6LM7Tm0oPpU1MAs9UpPZatL_p0aW8MBGqyEisRUPtf47k9yea0BxqTwSpIBCi9A08"
        alt="Logo Sinar Harapan Alumunium"
      />
      {!footer && (
        <span className="brand-name">
          Sinar Harapan
          <span>Alumunium</span>
        </span>
      )}
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ["Home", "#home"],
    ["Produk & Layanan", "#layanan"],
    ["Keunggulan", "#keunggulan"],
    ["Kontak", "#kontak"],
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className={`navigation ${menuOpen ? "navigation-open" : ""}`} aria-label="Navigasi utama">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <h1>
          Membangun Harapan dengan
          <br className="desktop-break" />
          <span className="hero-highlight">Kualitas Alumunium</span> Terbaik
        </h1>
        <p>
          Solusi tepat untuk kebutuhan kusen, pintu, jendela, dan interior bangunan
          Anda dengan sentuhan profesional dan material premium.
        </p>
        <div className="hero-actions">
          <a className="button button-red" href="#kontak">Hubungi Kami</a>
          <a className="button button-outline" href="#layanan">Lihat Produk</a>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ title, description, accent = "blue" }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      <span className={`heading-line line-${accent}`} />
      {description && <p>{description}</p>}
    </div>
  );
}

function Services() {
  return (
    <section className="section services-section" id="layanan">
      <div className="container">
        <SectionHeading
          title="Layanan & Produk Kami"
          description="Kami menyediakan berbagai macam produk berbahan dasar alumunium berkualitas tinggi untuk memenuhi kebutuhan konstruksi dan interior Anda."
        />
        <div className="services-layout">
          <div className="showcase">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZCyORa2UKKT3e_CnnZhGu8n3LskjUECWop9it6cDMBHNKc0GJ-WW9-jAfNho8Ni1us1USlJqI-yHMseONjJuzdaO9KyVD2DUk3jj9-SAPDyDSSJjH0DpU0j1lWtIkOAcbnqCa4yshlZGBcMKzkJdlUUpoAnJeTQexquEGvW6ncL0qW5Ol42A38ADXSG0BDGPTUaHIYWVK2C2mDzwiK6kORfuKWETK7Bz67uUGPnHomk3UYekQsTnnmA"
              alt="Koleksi produk alumunium"
              loading="lazy"
            />
            <div className="showcase-caption">Beragam Profil Alumunium Berkualitas</div>
          </div>
          <div className="service-grid">
            {services.map(({ title, description, icon: Icon, accent }) => (
              <article className={`service-card accent-${accent}`} key={title}>
                <Icon className="service-icon" size={39} strokeWidth={1.8} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Advantages() {
  return (
    <section className="section advantages-section" id="keunggulan">
      <div className="container">
        <SectionHeading title="Mengapa Memilih Kami?" accent="red" />
        <div className="advantages-grid">
          {advantages.map(({ title, description, icon: Icon, accent }) => (
            <article className="advantage-card" key={title}>
              <div className={`advantage-icon icon-${accent}`}>
                <Icon size={33} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="kontak">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="footer-logo-wrap"><Logo footer /></div>
            <p>
              Sinar Harapan Alumunium adalah mitra terpercaya Anda untuk segala
              kebutuhan fabrikasi dan instalasi alumunium berkualitas tinggi.
            </p>
          </div>
          <div className="footer-contact">
            <h2>Hubungi Kami</h2>
            <ul>
              <li>
                <MapPin aria-hidden="true" />
                <span>Jl. Raya Penggilingan No.4a, RT.15/RW.7, Penggilingan, Kec. Cakung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13940</span>
              </li>
              <li>
                <Phone aria-hidden="true" />
                <a href="https://wa.me/62813-8211-0634">0813-8211-0634 (WhatsApp)</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Sinar Harapan Alumunium. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Advantages />
      </main>
      <Footer />
    </>
  );
}
