const NomComplet = () => {
    let etudiant = {
        prenom : 'Masse' ,
        nom : 'DIOUKHANE'
      };
    return (
            <>
              <h5>Nom : {etudiant.nom}</h5>
              <h5>Prenom : {etudiant.prenom}</h5>
            </>
    )
}
export default NomComplet ;