export const metadata = {
  title: "Arko",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body id="root">{children}</body>
    </html>
  );
}
