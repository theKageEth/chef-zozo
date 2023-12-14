import "./globals.css";
import ThemeProvider from "../components/providers/nextUI/ThemeProvider";
import AuthProvider from "@/components/providers/auth/AuthProvider";
import MyNavbar from "@/components/myNavbar/MyNavbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Chef Zozo",
  description:
    "Birmingham Iraqi home cook by Chef Zozo Middle eastern food | Dolma | kabsah | Iraqi food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="">
        <ThemeProvider>
          <AuthProvider>
            <MyNavbar />
            <div className="flex flex-col">{children}</div>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
