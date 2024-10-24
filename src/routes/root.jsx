import { RakuunHeader } from "../components/RakuunHeader/RakuunHeader";

export function Root({ children }) {
  return <>
    <RakuunHeader />
      <main>
        {children}
      </main>
  </> 
}