window.onload = function() {

    var conditionalNums = 100
    var n = 1000;
    var condition = []
    var numbersRow = document.getElementById("numbersRow");

    for(var i = 2; i < conditionalNums; i++){
        condition.push(i);
    }

    PrintNum = function(i, output){
        printedStr =  i;
        divBy = "Factors || " + output;
    }

    for(var i = 1; i <= n; i++){
        var numCell = document.createElement("td");
        var divCell = document.createElement("td");
        var conditionMet = false;
        var output = "";

        for(var j = 0; j < i && j < condition.length; j++){
            if(condition[j] != i){
                if(i % condition[j] == 0){
                    conditionMet = true;
                    if(output.length != 0){
                        output += ", " ;
                    }
                    output += + condition[j];
                }
            }
        }
        if(conditionMet){
            PrintNum(i, output);
        }
        else{
            printedStr = i;
            divBy = "N.R.I. ";
        }

        numCell.id = "numCell";
        numCell.textContent = printedStr;
        divCell.id = "divCell";
        divCell.textContent = divBy;

        numbersRow.appendChild(numCell);
        numbersRow.appendChild(divCell);

        numbersRow = document.createElement("tr");
        document.querySelector("table").appendChild(numbersRow);

    }
}
