import { useRouteError } from "react-router-dom";
// import nurseImage from './assets/nurse.png';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div id="error-page" className="flex flex-col items-center">
				{/* <img src={nurseImage} alt="enfermera con mano en el rostro en gesto de tristeza" className="h-72"/> */}
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}	