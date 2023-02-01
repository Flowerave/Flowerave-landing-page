import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import '@/styles/index.scss'
import Preloader from "@/componentns/Preloader/Preloader";

export default function App({ Component, pageProps }) {


  // Состояние загрузки 
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // Обработка начала загрузки
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });

    // Обработка окончания загрузки
    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, []);

  return (
      <>
      {
        // Если загружается то показываем прелоадер
        loading && <Preloader />
      }
      <Component {...pageProps} />
    </>
  );
}
