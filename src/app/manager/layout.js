import "../globals.css";
import { Inter } from "next/font/google";
import ThemeRegistry from "@/components/themeRegistry/ThemeRegistry";
import GlobalMUIStyles from "@/app/globalMUIStyles";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "КафедраМОВС",
  description: "Кафедра МОВС ПГНИУ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <GlobalMUIStyles />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
