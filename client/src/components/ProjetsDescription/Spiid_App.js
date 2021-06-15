import React from "react";

function SpiidApp() {
    return (
        <div className="modalContent">
            <p>Projet d'école réalisé en 3 jours.</p>
            <p>Service de géolocalisation de trotinettes et de location.</p>
            <p>La création d'une trotinette en BDD entraine la création d'un QR Code unique qui lorsqu'il est scanné redirige sur la page de confirmation de location de la trotinette.</p>
            <p>Utilisation de google map API pour voir les trotinettes disponibles à la location (lorsqu'une trotinette est en cours de location, elle n'apparait plus sur la carte).</p>
        </div>
    )
}

export default SpiidApp;