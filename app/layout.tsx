import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amitkumar Mistry | Data Engineering",
  description:
    "Amitkumar Mistry — Senior Data Engineer focused on scalable data platforms, cloud lakehouses, ETL architecture, Databricks and Snowflake.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Amitkumar Mistry | Data Engineering",
    description: "Building reliable data platforms that turn complex data into business value.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
