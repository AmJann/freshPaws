import Navigationbar from "./components/NavigationBar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Fresh Paws</title>
      </head>
      <body className="bg-grey-500">
        <Navigationbar /> {/* Add Navbar here */}
        <main>
          {children} {/* This will render each page content */}
        </main>
        <footer className="bg-teal-600 text-white text-center p-4 mt-8">
          <p>&copy; {new Date().getFullYear()} Fresh Paws</p>
        </footer>
      </body>
    </html>
  );
}
