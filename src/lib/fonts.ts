import { Inter, UnifrakturMaguntia, Caveat } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const unifraktur = UnifrakturMaguntia({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-unifraktur',
});

export const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
}); 