import { ReactElement } from "react";
import PublicLayout from "../components/layouts/public/publicLayout";

export default function Home() {
  return <p>Hello world!</p>;
}

Home.getLayout = (page: ReactElement) => {
  return <PublicLayout>{page}</PublicLayout>;
};
