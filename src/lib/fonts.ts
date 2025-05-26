import { Inter, Pinyon_Script, Caveat, Spectral, Instrument_Sans } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const pinyon = Pinyon_Script({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pinyon',
});

export const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
});

export const spectral = Spectral({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-spectral',
});

export const instrumentSans = Instrument_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-sans',
}); 