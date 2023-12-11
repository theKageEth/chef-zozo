import "./globals.css";
import ThemeProvider from "../components/providers/nextUI/ThemeProvider";
import AuthProvider from "@/components/providers/auth/AuthProvider";
import MyNavbar from "@/components/myNavbar/MyNavbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Chef Zozo",
  description: "Birmingham Iraqi home cook by Chef Zozo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="h-screen">
        <ThemeProvider>
          <AuthProvider>
            <MyNavbar />
            <div className="flex flex-col min-h-screen">
              <div className="flex-grow bg-[#7cd3fc] dark:bg-[#0f0f0f]">
                {children}
              </div>
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
