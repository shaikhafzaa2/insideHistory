function addNewPara(){

    var elementH = document.createElement("h1");
    var main = document.getElementById("main2");
    main.appendChild(elementH);
    var textH = document.createTextNode("Middle Kingdom (2134-1690 BC)")
    elementH.appendChild(textH)
    

    var element = document.createElement("p");
    
    
    main.appendChild(element);

    var text = document.createTextNode("The kings of the Middle Kingdom restored the country's stability and prosperity, thereby stimulating a resurgence of art, literature, and monumental building projects.[33] Mentuhotep II and his Eleventh Dynasty successors ruled from Thebes, but the vizier Amenemhat I, upon assuming the kingship at the beginning of the Twelfth Dynasty around 1985 BC, shifted the kingdom's capital to the city of Itjtawy, located in Faiyum.[34] From Itjtawy, the kings of the Twelfth Dynasty undertook a far-sighted land reclamation and irrigation scheme to increase agricultural output in the region. Moreover, the military reconquered territory in Nubia that was rich in quarries and gold mines, while laborers built a defensive structure in the Eastern Delta, called the Walls-of-the-Ruler, to defend against foreign attack.");
    element.appendChild(text);

}

function hide(){
    document.getElementById("readbutton").style.display = "none";
}
