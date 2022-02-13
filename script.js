console.log("i am here")
// the dom
// the btn
// â, è, é
const btn = document.getElementById("btn");
// text and numbers
var Fname = document.getElementById("fname");
var Lname = document.getElementById("lname");
var age = document.getElementById("age");
var output = document.getElementById("output");
// nationality
var moroccan = document.getElementById("Marocaine")
var etrangere = document.getElementById("Etrangere")
// nationality ‼‼‼ if you are not a morocan find free to find your nationality from the list
var country = document.getElementById("country")
var nationalityOutput
etrangere.addEventListener("click", function () {
    if (moroccan.checked) {
        var moroccoOutput = moroccan.value
        console.log(moroccoOutput)
    } if (etrangere.checked) {
        country.style.display = "block"
        var nationalityValue = document.getElementById("country").value;
        nationalityOutput = "Son pay d'origine est: " + nationalityValue
        console.log(nationalityOutput)
    }
})
moroccan.addEventListener("click", function () {
    country.style.display = "none"

    nationalityOutput = "Il est " + moroccan.value
    console.log(nationalityOutput)
})
btn.addEventListener("click", function (event) {
    event.preventDefault()
    console.log("check this out the btn is working")
    // text and numbers
    ageOutput = age.value;
    FnameOutput = Fname.value;
    LnameOutput = Lname.value;

    // radio type
    document.getElementsByName("sex").forEach(radio => {
        if (radio.checked) {
            console.log(radio.value)
        }
    })
    // show the value of the selected option
    // checkbox type
    // console.log(listArray)
    var checkboxOutput = text + listArray.join(" , ").replace(/, ([^,]*)$/, ' and $1');
    // the final output
    var finalOutput = FnameOutput + " " + LnameOutput + ",âge " + ageOutput + ". " + nationalityOutput + "Ses interets sont: " + checkboxOutput + "."
    output.innerHTML = finalOutput;
})
// this one is from the video in youtube
var text = "<span> ses interets sons : </span>"
var listArray = [];
var checkboxes = document.querySelectorAll(".checkbox");
for (var checkbox of checkboxes) {
    checkbox.addEventListener('click', function () {
        if (this.checked == true) {
            listArray.push(this.value);

            console.log(listArray)
        } else {
            listArray = listArray.filter(e => e !== this.value)
            output.innerHTML = text + listArray.join(" , ");
            console.log(listArray)
        }
    })
}
