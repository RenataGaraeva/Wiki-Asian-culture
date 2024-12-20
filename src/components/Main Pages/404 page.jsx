import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <p>Извините, произошла ошибка.</p>
      <i>{error.statusText || error.message}</i>
    </>
  );
}
