let quest = prompt("Vous utilisez un(e) ?");
console.log(quest)

switch (quest) {
    case souris:
        alert("J'utilise une " + "quest");
        break;

    case clavier:
        alert("J'utilise un " + quest);
        break;

    case ordinateur:
        alert("J'utilise un " + quest);
        break;

    case tapis:
        alert("J'utilise un " + quest);
        break;

    case imprimante:
        alert("J'utilise une " + quest);
        break;

    case ondulateur:
        alert("J'utilise une " + quest);
        break;

    default:
        alert("objet inconu")
}
