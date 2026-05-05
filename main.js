function displayProductCategory() {
    var productCategory = document.getElementById("categoryEntry").value;

    switch (productCategory) {
        case "C" :
            document.getElementById("displayCategory").innerHTML = "Category: Clothing👚";
            break;
        case "E" :
            document.getElementById("displayCategory").innerHTML = "Category: Electronics📱";
            break;
        case "B" :
            document.getElementById("displayCategory").innerHTML = "Category: Books📚";
            break;
 
            default:
                window.alert("Invalid Section Number");
    
                            }   
            }