let cows = 0
let clickUpgrade = 1
let autoPrice = 10
let autoClickerCheck = false
let sound = new Audio("Files/mooh.mp3")
let price = 5
let farmerPrice = 15
let farmers = 1



//Funktion for at goere HTML delen mindre cluttered 
function sayMoooh() {
    sound.play()
    sound.currentTime = 0
}

//Funktion til at opdatere HTML elementerne  
function setAmount() {
    document.getElementById("amountOfCows").innerHTML = cows
    document.getElementById("clickUpgrade").innerHTML = clickUpgrade
    document.getElementById("price").innerHTML = price

}

//Funktion til at oege klikstyrken
function incrementCows() {
    cows = cows + clickUpgrade

    setAmount()
}

//Funktion til at koebe klikstyrke opgraderingen
function purchaseClickUpgrade() {
    if (cows >= price) {
        cows = cows - price

        clickUpgrade = clickUpgrade + 1

        price = price * 2

        setAmount()

    }
}

//Funktion til at lave en autoklikker
function autoClicks() {
    cows = cows + 1
    setAmount()
}

//Funktion til at koebe autoklikkeren og samtidig soerge for at man kun kan koebe en
function purchaseAutoClicker() {
    if (autoClickerCheck != true && cows >= autoPrice) {
        autoClickerCheck = true
        cows = cows - autoPrice


        setInterval(autoClicks, 1000)

        setAmount()

    }
}


//Funktion til at lave en farmer
function farmer() {
    cows = farmers * 2
    setAmount()
}

//Funktion til at koebe en farmer, hvis man allerede ejer en autoklikker
function buyFarmer() {
    if (cows >= farmerPrice && autoClickerCheck == true) {
        cows = cows - farmerPrice
        setInterval(farmer, 1000)

        setAmount()
    }

}



