function createTab(title, subtitle, image, desciption, parent) {
    var div = document.createElement("div");
    div.innerHTML = "<div class=\"left\" style=\"background-image: url('" + image + "');\"></div><div class=\"right\"><h1>" + title + "</h1><h3>" +  subtitle + "</h3><p>" + desciption + "</p></div>";
    div.classList.add("tab"); 
    document.querySelector(parent).appendChild(div);
}
