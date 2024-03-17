let divImageContainer = document.getElementById("gallery");

let imgElem = document.createElement("img");
imgElem.src = "./public/images/all-members-of-house-stark.jpeg";
// set default width and height
imgElem.width = "650";
imgElem.height = "550";
divImageContainer.appendChild(imgElem);

// delete
let delButton = document.createElement("button");
delButton.innerText = "delete";
divImageContainer.appendChild(delButton);

delButton.addEventListener("click", function () {
    imgElem.remove();
    this.remove();
})

//zoom
let zoomInBtn = document.createElement("button")
zoomInBtn.innerText = " + ";
let zoomOutBtn = document.createElement("button")
zoomOutBtn.innerText = " - ";

divImageContainer.appendChild(zoomInBtn);
divImageContainer.appendChild(zoomOutBtn);

const scaleFactor = 1.5;

zoomInBtn.addEventListener("click", function () {
    imgElem.width *= scaleFactor;
    imgElem.height *= scaleFactor;

})
zoomOutBtn.addEventListener("click", function () {
    imgElem.width /= scaleFactor;
    imgElem.height /= scaleFactor;
})


