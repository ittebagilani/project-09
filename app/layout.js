import "./globals.css";

import Menu from "@/components/menu/menu";

export const metadata = {
  title: "Menu",
  description: "fire ahh menu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
