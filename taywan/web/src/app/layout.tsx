import "./globals.css";
import { Provider } from "react-redux";

import { Store } from "../redux/store";
import ClientComponent from "../components/ClientComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body  className={""}>
        <ClientComponent>
        {children}
      </ClientComponent>
      </body>
    </html>
  
  );
}