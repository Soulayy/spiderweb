import React from 'react';
import ErrorLogo from "./../../assets/shared/spacevaiseau.png"

const PageError = () => {
  return (
    <div className="flex flex-col bg-gray-900 text-white min-h-screen justify-center items-center">
      <h1 className="text-5xl font-bold text-center mb-8">Oups ! On dirait que vous êtes perdu(e)...</h1>
      <img
        src={ErrorLogo}
        alt="Vaisseau spatial perdu dans l'espace"
        className="mx-auto mb-2"
      />
      <h2 className="text-3xl font-bold text-center mb-4">Erreur 404 : La page que vous recherchez n'existe pas.</h2>
      <p className="text-center px-10 mb-8">
        Peut-être avez-vous suivi un lien brisé ou entré une adresse URL incorrecte. L'espace est vaste et il est facile de s'y perdre !
      </p>
      <p className="text-center font-bold mb-4">Voici quelques suggestions pour vous aider à retrouver votre chemin :</p>
      <ul className="list-disc mx-auto text-center space-y-2">
        <li>
          <a href="/" className="text-blue-500 hover:underline">Retournez à la page d'accueil : Accueil</a>
        </li>
        <li>Utilisez la barre de recherche pour trouver ce que vous recherchez.</li>
        <li>Consultez notre plan du site pour une vue d'ensemble de notre site Web.</li>
      </ul>
      <p className="text-center mt-8">
        Si vous avez besoin d'aide, n'hésitez pas à nous contacter. Nous sommes toujours heureux de vous aider à naviguer dans l'espace infini de notre site Web !
      </p>
    </div>
  );
};

export default PageError;