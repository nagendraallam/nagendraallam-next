import type { Metadata } from "next";
import { Inter, Phudu, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faGithub,
  faLinkedin,
  faReddit,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import LayoutContainer from "@/components/LayoutContainer";

import { headers } from "next/headers";

const inter = Phudu({ subsets: ["cyrillic-ext"], weight: "600" });

const inter2 = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Nagendra Allam",
  description: "Nagendra Allam's personal website",
  icons: "/user-line.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  // read the custom x-url header
  const header_url = headersList.get("x-url") || "";

  return (
    <html lang="en">
      <head>
        <meta theme-color="#2e3192" />
        <title>Nagendra Allam</title>
        <link rel="icon" type="image/svg+xml" href="/user-line.svg" />
        <meta name="viewport" content="width=device-width" />
      </head>
      <body className={header_url === "weather" ? inter2.className : ""}>
        <LayoutContainer isMain={header_url === "weather"}>
          {children}
        </LayoutContainer>
      </body>
    </html>
  );
}
