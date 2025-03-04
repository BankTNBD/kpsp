import { Bai_Jamjuree } from 'next/font/google'
import "./globals.css";

export const metadata = {
  title: "โรงเรียนกาญจนาภิเษกวิทยาลัย สุพรรณบุรี",
  description: "โรงเรียนกาญจนาภิเษกวิทยาลัย สุพรรณบุรี",
};

const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin', 'thai'],
  weight: '500'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${baiJamjuree.className}`}
      >
        {children}
      </body>
    </html>
  );
}
