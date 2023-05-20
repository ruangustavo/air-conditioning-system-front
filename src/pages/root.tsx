import { Header } from "@/components/organisms/Header";
import { Outlet } from "react-router-dom";

export function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
