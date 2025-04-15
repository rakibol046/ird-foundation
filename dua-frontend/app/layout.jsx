import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Aside, { MobileMenu } from "@/components/aside";
import Header from "@/components/header";
import RightAside from "@/components/right-aside";
import { ThemeProvider } from "@/components/theme-provider";
// Load Inter font with CSS variable
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dua App",
  description: "created by IRD Foundation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased m-2 lg:m-[40px]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex">
            <div className="flex-none">
              <Aside />
            </div>
            <div className="w-full flex-auto">
              <Header />
              <div>{children}</div>
            </div>
          </div>

          {/* <MobileMenu /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
