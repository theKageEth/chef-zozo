import "./globals.css";
import ThemeProvider from "../components/providers/nextUI/ThemeProvider";
import AuthProvider from "@/components/providers/auth/AuthProvider";
import MyNavbar from "@/components/myNavbar/MyNavbar";

export const metadata = {
  title: "Chef Zozo",
  description: "Birmingham Iraqi home cook by Chef Zozo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <ThemeProvider>
          <AuthProvider>
            <MyNavbar />
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
