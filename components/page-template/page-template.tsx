import { Header, Footer } from "@/components";
import { PageProps } from "./types";

export function PageTemplate({ ...props }: PageProps) {
  return (
    <>
      <Header />

      <main>
        <h1 className="max-w-7xl mx-auto">{props.children}</h1>
      </main>

      <Footer />
    </>
  );
}
