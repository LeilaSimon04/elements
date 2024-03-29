/**
 * //ATTENTION ELLE NE FONCTIONNE PAS Fonction pour récupérer le choix du CHAUFFEUR
function testChauffeur(){
    if(chauffeur.value===""){
        return true
    }else{
        //Sinon retourne sa valeur
        return value ()
    }
}
 */


/** 
Ecriture ternaire
Je crée une variable qui s'appelle variable et qui va chercher un truc
let variable ="truc"
Est-ce que ma variable = truc ? 
console.log(variable==="truc" ? "oui" : "non")
if(variable ==="truc"){
  console.log("oui")
}else{
   console.log("non")
}
*/
let form =document.getElementById("monForm")
let popup =document.querySelector(".popup")

//Je vais chercher mes données
let nom = document.getElementById("nom")
nom.addEventListener("change",testNom)
let prenom = document.getElementById("prenom")
prenom.addEventListener("change",testPrenom)
let email = document.getElementById("email")
email.addEventListener("change",testEmail)
let phone = document.getElementById("phone")
phone.addEventListener("change",testPhone)
let numeroRue = document.getElementById("numeroRue")
numeroRue.addEventListener("change",testNumeroRue)
let adresseLigne1 = document.getElementById("adresseLigne1")
adresseLigne1.addEventListener("change",testAdresse1)
let adresseLigne2 = document.getElementById("adresseLigne2")
adresseLigne2.addEventListener("change",testAdresse2)
let codePostal = document.getElementById("codePostal")
codePostal.addEventListener("change",testCodePostal)
let ville = document.getElementById("ville")
ville.addEventListener("change",testVille)
let choixHotel = document.getElementById("choixHotel")
choixHotel.addEventListener("change",testChoixHotel)
let choixChambre = document.getElementById("choixChambre")
choixChambre.addEventListener("change",testChoixChambre)
let nombrePersonne = document.getElementById("nombrePersonne")
nombrePersonne.addEventListener("change",testNombrePersonne)
let dateArrivee = document.getElementById("dateArrivee")
dateArrivee.addEventListener("change",testDateArrivee)
let dateDepart = document.getElementById("dateDepart")
dateDepart.addEventListener("change",testDateDepart)
let chauffeur = document.getElementById("chauffeur")
chauffeur.addEventListener("checked", testChauffeur)
// FONCTIONS DE RECUPERATION DE DONNEES  FONCTIONS DE RECUPERATION DE DONNEES 
//Fonction Test NOM
function testNom(){
  //Est-ce que l'utilisateur a bien remplit ce champ
  //On test si le champ est vide
  if(nom.value==""){
      //affiche un message d'erreur
      //on met la bordure rouge sur l'input
      afficheErreur("nom", "Ce champ ne peut pas être vide")
      return false
  }else{
  //On teste si l'utisateur a bien utilisé :
  //des caractères alphabétiques 
  //Si ce n'est pas le cas :
  //affiche un message d'erreur
  //on met la bordure rouge sur l'input
  //la variable est ici une expression rationnelle (régulière) pour dire que dans ce input on peut y écrire des caractères alphabétiques avec des accents, etc.. 
  //Si on voulait préciser aussi le nombre de caractères possibles. Ici jusqu'à 20 le premier prénom et pareil pour le second : /^[a-zA-ZÀ-ÿ'-]{2,50}(?:\s[a-zA-ZÀ-ÿ'-]{2,50})*$/
  let reg =/^[a-zA-ZÀ-ÿ'-]+(?:\s[a-zA-ZÀ-ÿ'-]+)*$/
  if(reg.test(nom.value)===false){
      //Si il y a des chiffres 
      afficheErreur("nom", "Ce champ comporte des caractères non autorisés")
      return false
  }else if(hasCode(nom.value)){
      //Est-ce que notre utilisateur n'est pas entrain d'injecter du code
      afficheErreur("nom", "Vous ne pouvez pas injecter du code ici")
      return false
  }else if(nom.value.length >=50){
      afficheErreur("nom", "Vous avez écrit un nom trop long")
      return false
  }
  }
  enleveErreur("nom")
  //S'il n'y a eu aucune erreur de noté ci-dessus dans ce cas là tout va bien
  return true
}
//Fonction test PRENOM 
function testPrenom(){
  //Est-ce que l'utilisateur a bien remplit ce champ 
  //On test si le champ est vide
  if(prenom.value==""){
      //affiche un message d'erreur
      //on met la bordure rouge sur l'input
      afficheErreur("prenom", "Ce champ ne peut pas être vide")
      return false
  }else{
  //On teste si l'utisateur a bien utilisé :
  //des caractères alphabétiques 
  //Si ce n'est pas le cas :
  //affiche un message d'erreur
  //on met la bordure rouge sur l'input
  //la variable est ici une expression rationnelle (régulière) pour dire que dans ce input on peut y écrire des caractères alphabétiques avec des accents, etc.. 
  //Si on voulait préciser aussi le nombre de caractères possibles. Ici jusqu'à 20 le premier prénom et pareil pour le second : /^[a-zA-ZÀ-ÿ'-]{2,20}(?:\s[a-zA-ZÀ-ÿ'-]{2,20})*$/
  let reg =/^[a-zA-ZÀ-ÿ'-]+(?:\s[a-zA-ZÀ-ÿ'-]+)*$/
  if(reg.test(prenom.value)===false){
      //Si il y a des chiffres 
      afficheErreur("prenom", "Ce champ comporte des caractères non autorisés")
      return false
  }else if(hasCode(prenom.value)){
      //Est-ce que notre utilisateur n'est pas entrain d'injecter du code
      afficheErreur("prenom", "Vous ne pouvez pas injecter du code ici")
      return false
  }else if(prenom.value.length >=50){
      afficheErreur("prenom", "Vous avez écrit un prénom trop long")
      return false
  }
  }
  enleveErreur("prenom")
  //S'il n'y a eu aucune erreur de noté ci-dessus dans ce cas là tout va bien
  return true
}
//Fonction pour l'EMAIL
function testEmail(){
  //Est-ce que l'utilisateur a bien remplit ce champ 
  //On test si le champ est vide
  if(email.value==""){
      //affiche un message d'erreur
      //on met la bordure rouge sur l'input
      afficheErreur("email", "Ce champ ne peut pas être vide")
      return false
  }else{
  //On teste si l'utisateur a bien utilisé :
  //des caractères numériques 
  //Si ce n'est pas le cas :
  //affiche un message d'erreur
  //on met la bordure rouge sur l'input
  //la variable est ici une expression rationnelle (régulière) pour dire que dans ce input on peut y écrire seulement des nombres
  //let reg =/^[^\s@]+@[^\s@]+\.[^\s@]+$/
  let reg =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if(reg.test(email.value)===false){
      //Si il y a des lettres 
      afficheErreur("email", "Ce champ comporte des caractères non autorisés")
      return false
  }else if(hasCode(email.value)){
      //Est-ce que notre utilisateur n'est pas entrain d'injecter du code
      afficheErreur("email", "Vous ne pouvez pas injecter du code ici")
      return false
  }else if(email.value.length >=100){
      afficheErreur("email", "Vous avez écrit un email trop long")
      return false
  }
  }
  enleveErreur("email")
  //S'il n'y a eu aucune erreur de noté ci-dessus dans ce cas là tout va bien
  return true
}
//Fonction pour le téléphone 
function testPhone(){
  //Est-ce que l'utilisateur a bien remplit ce champ 
  //On test si le champ est vide
  if(phone.value==""){
      //affiche un message d'erreur
      //on met la bordure rouge sur l'input
      afficheErreur("phone", "Ce champ ne peut pas être vide")
      return false
  }else{
  //On teste si l'utisateur a bien utilisé :
  //des caractères numériques 
  //Si ce n'est pas le cas :
  //affiche un message d'erreur
  //on met la bordure rouge sur l'input
  //la variable est ici une expression rationnelle (régulière) pour dire que dans ce input on peut y écrire seulement des nombres
  //Si on voulait préciser aussi le nombre de caractères possibles. Ici jusqu'à 20 le premier prénom et pareil pour le second : /^[a-zA-ZÀ-ÿ'-]{2,20}(?:\s[a-zA-ZÀ-ÿ'-]{2,20})*$/
  let reg =/^[0-9]+$/
  if(reg.test(phone.value)===false){
      //Si il y a des lettres 
      afficheErreur("phone", "Ce champ comporte des caractères non autorisés et l'email doit avoir ce format : example@exalmple.com")
      return false
  }else if(hasCode(phone.value)){
      //Est-ce que notre utilisateur n'est pas entrain d'injecter du code
      afficheErreur("phone", "Vous ne pouvez pas injecter du code ici")
      return false
  }else if(phone.value.length <10 || phone.value.length >14){
      afficheErreur("phone", "Ce numéro de téléphone ne convient pas. Il doit être sous cette forme : 01 02 03 04 05 ou 0102030405")
      return false
  }
  }
  enleveErreur("phone")
  //S'il n'y a eu aucune erreur de noté ci-dessus dans ce cas là tout va bien
  return true
}
//Fonction pour le NUMERO de RUE
function testNumeroRue(){
  //Est-ce que l'utilisateur a bien remplit ce champ 
  //On test si le champ est vide
  if(numeroRue.value==""){
      //affiche un message d'erreur
      //on met la bordure rouge sur l'input
      afficheErreur("numeroRue", "Ce champ ne peut pas être vide")
      return false
  }else{
  //On teste si l'utisateur a bien utilisé :
  //des caractères numériques 
  //Si ce n'est pas le cas :
  //affiche un message d'erreur
  //on met la bordure rouge sur l'input
  //la variable est ici une expression rationnelle (régulière) pour dire que dans ce input on peut y écrire seulement des nombres
  let reg =/^[0-9]+$/
  if(reg.test(numeroRue.value)===false){
      //Si il y a des lettres 
      afficheErreur("numeroRue", "Ce champ comporte des caractères non autorisés")
      return false
  }else if(hasCode(phone.value)){
      //Est-ce que notre utilisateur n'est pas entrain d'injecter du code
      afficheErreur("numeroRue", "Vous ne pouvez pas injecter du code ici")
      return false
  }else if(numeroRue.value.length >=10){
      afficheErreur("numeroRue", "Vous avez écrit un numéro de voie trop long")
      return false
  }
  }
  enleveErreur("numeroRue")
  //S'il n'y a eu aucune erreur de noté ci-dessus dans ce cas là tout va bien
  return true
}
//Fonction pour test Adresse 1
function testAdresse1(){
  //Est-ce que l'utilisateur a bien remplit ce champ
  //On test si le champ est vide
  if(adresseLigne1.value==""){
      //affiche un message d'erreur
      //on met la bordure rouge sur l'input
      afficheErreur("adresseLigne1", "Ce champ ne peut pas être vide")
      return false
        }else{
        //On teste si l'utisateur a bien utilisé :
        //des caractères alphabétiques 
        //Si ce n'est pas le cas :
        //affiche un message d'erreur
        //on met la bordure rouge sur l'input
        //la variable est ici une expression rationnelle (régulière) pour dire que dans ce input on peut y écrire des caractères alphabétiques avec des accents, etc.. 
        let reg =/^[a-zA-ZÀ-ÿ'-]+(?:\s[a-zA-ZÀ-ÿ'-]+)*$/
        if(reg.test(adresseLigne1.value)===false){
            //Si il y a des chiffres 
            afficheErreur("adresseLigne1", "Ce champ comporte des caractères non autorisés")
            return false
            }else if(hasCode(adresseLigne1.value)){
                //Est-ce que notre utilisateur n'est pas entrain d'injecter du code
                afficheErreur("adresseLigne1", "Vous ne pouvez pas injecter du code ici")
                return false
            }else if(adresseLigne1.value.length >=150){
                afficheErreur("adresseLigne1", "Vous avez écrit un nom de voie trop long")
                return false
            }
        }
        enleveErreur("adresseLigne1")
        //S'il n'y a eu aucune erreur de noté ci-dessus dans ce cas là tout va bien
        return true
    }
//Fonction pour test Adresse 2 légèrement différente de l'adresse 1 car ce champ peut ne pas être rempli
function testAdresse2(){
    //Si l'utilisateur n'a pas remplit ce champ ce n'est pas grave car c'est facuultatif
    //On test si le champ est vide
    if(adresseLigne2.value==""){
        return true
    }else{
    //On teste si l'utisateur a bien utilisé :
    //des caractères alphabétiques 
    //Si ce n'est pas le cas :
    //affiche un message d'erreur
    //on met la bordure rouge sur l'input
    //la variable est ici une expression rationnelle (régulière) pour dire que dans ce input on peut y écrire des caractères alphabétiques avec des accents, etc.. 
    let reg =/^[a-zA-ZÀ-ÿ'-]+(?:\s[a-zA-ZÀ-ÿ'-]+)*$/
    if(reg.test(adresseLigne2.value)===false){
        //Si il y a des chiffres 
        afficheErreur("adresseLigne2", "Ce champ comporte des caractères non autorisés")
        return false
    }else if(hasCode(adresseLigne2.value)){
        //Est-ce que notre utilisateur n'est pas entrain d'injecter du code
        afficheErreur("adresseLigne2", "Vous ne pouvez pas injecter du code ici")
        return false
    }else if(adresseLigne2.value.length >=150){
        afficheErreur("adresseLigne2", "Vous avez écrit un nom de voie trop long")
        return false
    }
    enleveErreur("adresseLigne2")
    //S'il n'y a eu aucune erreur de noté ci-dessus dans ce cas là tout va bien
    return true
    }
}
//Fonction pour le CODE POSTAL
function testCodePostal(){
    //Est-ce que l'utilisateur a bien remplit ce champ 
    //On test si le champ est vide
    if(codePostal.value==""){
        //affiche un message d'erreur
        //on met la bordure rouge sur l'input
        afficheErreur("codePostal", "Ce champ ne peut pas être vide")
        return false
    }else{
    //On teste si l'utisateur a bien utilisé :
    //des caractères numériques 
    //Si ce n'est pas le cas :
    //affiche un message d'erreur
    //on met la bordure rouge sur l'input
    //la variable est ici une expression rationnelle (régulière) pour dire que dans ce input on peut y écrire seulement des nombres
    let reg =/^[0-9]+$/
    if(reg.test(codePostal.value)===false){
        //Si il y a des lettres 
        afficheErreur("codePostal", "Ce champ comporte des caractères non autorisés")
        return false
    }else if(hasCode(codePostal.value)){
        //Est-ce que notre utilisateur n'est pas entrain d'injecter du code
        afficheErreur("codePostal", "Vous ne pouvez pas injecter du code ici")
        return false
    }else if(codePostal.value.length <5 || codePostal.value.length >5){
        afficheErreur("codePostal", "Vous n'avez pas écrit un code postal. Celui-ci doit contenir 5 chiffres")
        return false
    }
    }
    enleveErreur("codePostal")
    //S'il n'y a eu aucune erreur de noté ci-dessus dans ce cas là tout va bien
    return true
  }
//Fonction pour test VILLE
function testVille(){
  //Est-ce que l'utilisateur a bien remplit ce champ Nom
  //On test si le champ est vide
  if(ville.value==""){
      //affiche un message d'erreur
      //on met la bordure rouge sur l'input
      afficheErreur("ville", "Ce champ ne peut pas être vide")
      return false
  }else{
  //On teste si l'utisateur a bien utilisé :
  //des caractères alphabétiques 
  //Si ce n'est pas le cas :
  //affiche un message d'erreur
  //on met la bordure rouge sur l'input
  //la variable est ici une expression rationnelle (régulière) pour dire que dans ce input on peut y écrire des caractères alphabétiques avec des accents, etc.. 
  //Si on voulait préciser aussi le nombre de caractères possibles. Ici jusqu'à 20 le premier prénom et pareil pour le second : /^[a-zA-ZÀ-ÿ'-]{2,20}(?:\s[a-zA-ZÀ-ÿ'-]{2,20})*$/
  let reg =/^[a-zA-ZÀ-ÿ'-]+(?:\s[a-zA-ZÀ-ÿ'-]+)*$/
  if(reg.test(ville.value)===false){
      //Si il y a des chiffres 
      afficheErreur("ville", "Ce champ comporte des caractères non autorisés")
      return false
  }else if(hasCode(ville.value)){
      //Est-ce que notre utilisateur n'est pas entrain d'injecter du code
      afficheErreur("ville", "Vous ne pouvez pas injecter du code ici")
      return false
  }else if(ville.value.length >=101){
      afficheErreur("ville", "Vous avez écrit un nom trop long")
      return false
  }
  }
  enleveErreur("ville")
  //S'il n'y a eu aucune erreur de noté ci-dessus dans ce cas là tout va bien
  return true
}
//Fonction pour vérifier que l'hôtel a bien été sélectionné
function testChoixHotel(){
    if(choixHotel.value===""){
        afficheErreur("choixHotel", "Merci de choisir un hôtel")
        return false
    }else{
        enleveErreur("choixHotel")
        return true
    }
}
//Fonction pour vérifier que la chambre a bien été sélectionnée
function testChoixChambre(){
    if(choixChambre.value===""){
        afficheErreur("choixChambre", "Merci de choisir une chambre")
        return false
    }else{
        enleveErreur("choixChambre")
        return true
    }
}
//Fonction pour vérifier que le nombre de personne a bien été sélectionné
function testNombrePersonne(){
    if(nombrePersonne.value===""){
        afficheErreur("nombrePersonne", "Merci de choisir le nombre de personne")
        return false
    }else{
        enleveErreur("nombrePersonne")
        return true
    }
}
//Fonction pour vérifier qu'une date d'arrivée a bien été sélectionnée
function testDateArrivee(){
    if(dateArrivee.value===""){
        afficheErreur("dateArrivee", "Merci de choisir une date d'arrivée")
        return false
    }else{
        enleveErreur("dateArrivee")
        return true
    }
}
//Fonction pour vérifier qu'une date de départ a bien été sélectionnée
//On VERIFIERA PLUS TARD qu'elle soit postérieure à celle de l'arrivée
function testDateDepart() {
    if(dateDepart.value===""){
        afficheErreur("dateDepart", "Merci de choisir une date de départ")
        return false
    }else{
        enleveErreur("dateDepart")
        return true
    }
}

// FONCTIONS DE VERIFICATION  FONCTIONS DE VERIFICATION
//Fonction pour NE PAS écrire de CODE
function hasCode(text){
  //Cette fonction cherche dans le code s'il y a une balise script
  //retour : true s'il y a du code
   //retour : false s'il n'y a pas de code
  let reg =/<script/
  return reg.test(text)
}
//Fonction pour faire apparaître un messsage en cas d'erreur
function afficheErreur(id,messageErreur){
  //Rôle : Afficher une erreur : mettre une bordure sur le bon input et remplir le paragraphe d'erreur associé
  //Paramètres : id = l'ID de l'imput dans lequel il y a une erreur ET messageErreur = le message à afficher
  //Retour : rien 
  let input =document.getElementById(id)
  input.classList.add("input-error")
  //Dans le html le ID du message d'erreur est nommé error-ID de l'input auquel il est associé
  let p =document.getElementById("error-"+id)
  p.innerText =messageErreur
  p.classList.remove("d-none")
}
//Fonction pour retirer l'erreur quand elle n'y est plus (qu'elle a été rectifiée)
function enleveErreur(id){
  //Rôle : enlever l'erreur sur l'input et cache le paragraphe associé
  let input =document.getElementById(id)
  input.classList.remove("input-error")
  let p =document.getElementById("error-"+id)
  p.innerText =""
  p.classList.add("d-none")
}

// FONCTION POUR RECUPERER LES DONNEES  FONCTION POUR RECUPERER LES DONNEES
function recupereLesDonnees() {
    let nom = document.getElementById("nom").value
    let prenom = document.getElementById("prenom").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let numeroRue = document.getElementById("numeroRue").value
    let adresse1 = document.getElementById("adresseLigne1").value
    let adresse2 = document.getElementById("adresseLigne2").value
    let codePostal = document.getElementById("codePostal").value
    let ville = document.getElementById("ville").value
    let choixHotel = document.getElementById("choixHotel").selectedOptions[0]
    let choixChambre = document.getElementById("choixChambre").selectedOptions[0]
    let nombrePersonne = document.getElementById("nombrePersonne").value
    let dateArrivee = document.getElementById("dateArrivee").valueAsDate
    let dateDepart = document.getElementById("dateDepart").valueAsDate
    let chauffeur = document.getElementById("chauffeur").checked
    let choixMidi = document.getElementById("choixMidi").checked
    let choixSoir = document.getElementById("choixSoir").checked
    let choixPonctuel = document.getElementById("choixPonctuel").checked
    //Je construis mon template à partir de mes données récupérées grâce aux variables du dessus
    let zone =document.querySelector(".popup")
    zone.innerHTML+=`
<h3>Récapitulatif de votre réservation</h3>
<h4>Vos informations personnelles</h4>
<p>Nom :${nom}</p>
<p>Prénom :${prenom}</p>
<br>
<p>Email :${email}</p>
<br>
<p>Numéro de téléphone :${phone}</p>
<br>
<p>Adresse :${numeroRue} ${adresse1} ${adresse2}</p>
<br>
<p>Code postal :  ${codePostal}</p>
<p>Ville : ${ville}</p>
<h4>Votre réservation</h4>
<p>Séjour à l'hôtel : ${choixHotel.value}</p>
<br>
<p>Chambre d'hôtel : ${choixChambre.value}</p>
<br>
<p>Nombre de personne : ${nombrePersonne}</p>
<br>.
<p>Date d'arrivée : ${dateArrivee.toLocaleDateString()}</p>
<p>Date de départ : ${dateDepart.toLocaleDateString()}</p>
<h4>Vos options</h4>
<p>Chauffeur : </p>
<br>
<p>Visite guidée : </p>
<br>
<h5>Repas</h5>
<p>Repas de midi :</p>
<br>
<p>Repas du soir :</p>
<p>Repas ponctuel :</p>
<h5>Régime alimentaire</h5>
<p>Vegan :</p>
<p>Végétarien :</p>
<p>Aucun :</p>
<p>Sans gluten :</p>
<p>Sans lactose :</p>
<p class="marginParagraphe">Autres allergies et intolérances :</p>
<a href="" class="boutonReservation">Confirmer la réservation</a>
`
}

// Fonction pour vérifier que la date de Départ est bien ultérieure à celle d'arrivée
function verificationDates() {
    let depart = dateDepart.valueAsDate;
    let arrivee = dateArrivee.valueAsDate;
    // Vérifier si la date de départ est antérieure à la date d'arrivée
    if (depart > arrivee) {
        return true; 
    } else {
        afficheErreur("dateDepart", "Merci de choisir une date de départ postérieure à celle d'arrivée")
        return false
    }
}

// SUBMIT SUBMIT SUBMIT SUBMIT SUBMIT
//Je suis déjà allée chercher mon formulaire plus haut donc pas la peine d'aller le chercher
//Je lui mets un écouteur d'événement à la soumission du formulaire
form.addEventListener("submit",(e)=>{
    //On lui demande d'attendre, pour tout vérifier avant d'envoyer
    e.preventDefault()
    //On ré appelle nos fonctions du test
    //On relance notre batterie de tests
    let test1 =testNom()
    let test2 = testPrenom()
    let test3 = testEmail()
    let test4 = testPhone()
    let test5 = testNumeroRue()
    let test6 = testAdresse1()
    let test7 = testAdresse2()
    let test8 = testCodePostal()
    let test9 = testVille()
    let test10 = testChoixHotel()
    let test11 = testChoixChambre()
    let test12 = testNombrePersonne()
    let test13 = testDateArrivee()
    let test14 = testDateDepart()
    let test15 = verificationDates()
    //Si l'une d'entre elles retourne False
    if(test1===false || test2===false || test3===false || test4===false || test5===false || test6===false || test7===false || test8===false || test9===false || test10===false || test11===false || test12===false || test13===false || test14===false || test15===false){
        //On n'envoie pas le formulaire
        //Mais comme chacune des fonctions ci-dessous affichent les messages d'erreur ici on ne fait rien
    }else{
        //Sinon si elles retournent toutes True
        //Dans ce cas là j'affiche le popup
        popup.classList.remove("none")
        recupereLesDonnees()
    }
})
