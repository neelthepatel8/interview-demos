import "./globals.css";

export const metadata = {
  title: "Quickbase Interview Demo",
  description: "A demo for a Quickbase interview by Neel Patel",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
