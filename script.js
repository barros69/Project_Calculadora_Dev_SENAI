class Calculator {
    constructor(){
         // Aqui é o propriedade que recebe os valores digitados
         this.displayValue = "";
    }
    // esse metodo adiciona valores á propriedades DisplayVlue
    // e em seguida chama o metodo update display para atualizar o visor input
    appendToDisplay(value){
        this.displayValue += value;
        this.updateDisplay();
    }
    // Este metodo atualiza o visor input com os valores 
    // que o usuario  digitou ok
    updateDisplay(){
        document.getElementById("displayContent").value = this.displayValue
    }
    // Este metodo limpa  os valores do displayValue (input) e
    //  Chama o metodo updateDisplay para atualizar o visor input
    clearDisplay(){
        this.displayValue = "";
        this.updateDisplay();
    }
    calculate(){
        try {
            const result = eval(this.displayValue);
            this.displayValue = result
            this.updateDisplay();
        } catch(error) {
            this.displayValue = "Error";
        }
    }
   
}

// instanciando o objeto
const calc = new Calculator();