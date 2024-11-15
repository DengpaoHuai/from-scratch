import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { useSnackbar } from "react-simple-snackbar";
import CustomSnackBar from "../components/CustomSnackBar";

const WelcomeScreen = () => {
  const [openSnackbar, closeSnackbar] = useSnackbar();

  //fetch vers crudcrud pour générer des données en POST (movies)
  const fetchData = async () => {
    const response = await fetch(
      "https://crudcrud.com/api/4cf2ee62d4c0416cb445d28e4642fb40/movies",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "The Matrix",
          year: 1999,
          genre: "Sci-Fi",
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <div className="bg-gray-800 text-white flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to our site</h1>
          <p className="text-lg">We are happy to see you here</p>
          <Button
            onClick={() => openSnackbar("Hello from the snackbar!", 5000000)}
            label="Show Snackbar"
            className="p-button-raised p-button-rounded p-button-text p-button-lg"
          />

          <Link
            to="/dashboard"
            className="p-button p-button-raised p-button-rounded p-button-text p-button-lg"
          >
            Go to Dashboard
          </Link>
          <Button
            onClick={fetchData}
            label="Add a movie"
            className="p-button-raised p-button-rounded p-button-text p-button-lg"
          />
        </div>
      </div>
    </>
  );
};

export default WelcomeScreen;
