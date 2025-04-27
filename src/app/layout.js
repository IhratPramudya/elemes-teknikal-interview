import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="transition-all duration-150 ease-in">
      <head>
        {/* Meta tags and other head elements */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
