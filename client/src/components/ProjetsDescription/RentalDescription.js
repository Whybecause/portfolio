import React from "react";

function RentalDescription() {
  return (
    <div className="modalContent">
      <h3> Login/Register </h3>
      <p>Hashage du mot de passe dans la BDD</p>
      <p>Authentification basée sur un token</p>
      <p>
        {" "}
        Confirmation création compte par l'envoi automatique d'un email de
        confirmation (associé à un token de confirmation)
      </p>
      <p>
        Bouton permettant de réenvoyer l'email de confirmation s'il a expiré
      </p>
      <p>
        {" "}
        Bouton permettant de recevoir un mail pour changer un mot de passe
        oublié
      </p>
      <h3>Page utilisateur</h3>
      <p>Informations sur le détail de la location effectuée</p>
      <h3>Page Profil Utilisateur</h3>
      <p>Possibilité de modifier le mot de passe actuel</p>
      <h3>Page ADMIN (pour utilisateurs ayant ce rôle uniquement)</h3>
      <p>
        Visualisation des détails de la location proposée avec possibilité de
        les modifier
      </p>
      <p>Visualisation de toutes les réservations effectuées sur cette offre</p>
      <p>
        Bouton associé à chaque réservation permettant d'envoyer un email au
        locataire
      </p>
      <h3>Réservation</h3>
      <p>Les dates proposées sont synchronisées sur un google calendar dédié</p>
      <p>
        Utilisation de l'API Google calendar pour désactiver la possibilité de
        booker des dates déjà prises
      </p>
      <p>
        L'API est également utilisée pour sauvegarder les dates réservées dans
        le google calendar
      </p>
      <p>
        API Stripe pour gérer les paiements + email de confirmation automatique
        avec récapitulation des infos de la location et facture
      </p>
      <h3>Commentaires</h3>
      <p>Possible de poster un commentaire si connecté</p>
      <p>L'ADMIN peut supprimer les commentaires</p>
      <h3>Emplacement</h3>
      <p>
        Utilisation de Google Map API pour afficher l'emplacement de la location
      </p>
      <h3>Contacter l'hôte</h3>
      <p>Formulaire à remplir qui envoie un mail à l'hôte (nodemailer)</p>
    </div>
  );
}

export default RentalDescription;
