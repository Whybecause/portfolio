import React from "react";

function AmazonChecker() {
    return (
        <div className="modalContent">
            <p>Amazon scrapper pour avoir un récapitulatif de l'état de la Buybox sur Amazon</p>
            <p>Possibilité d'ajouter sur l'interface une liste de références produits (ASIN) à vérifier (stockés en BDD)</p>
            <p>Lors du lancement de la vérification, l'app va évaluer toutes les pages produits pour voir qui est en possession de la buybox</p>
            <p>Le résultat est affiché dans un tableau récapitulatif et stocké en BDD</p>

        </div>
    )
}

export default AmazonChecker;