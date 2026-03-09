const fs = require('fs');
let saldo = 0;

function menu() {
    process.stdout.write("\n1:Saldo, 2:Dep, 3:Saq, 4:Sair: ");
    const opt = fs.readSync(0, Buffer.alloc(1), 0, 1, null) && fs.readFileSync(0).toString().trim();

    if (opt === '4') process.exit();
    
    if (opt === '1') console.log(`R$ ${saldo.toFixed(2)}`);
    else {
        process.stdout.write("Valor: ");
        const v = parseFloat(fs.readFileSync(0).toString().trim());
        if (opt == '2') saldo += v;
        if (opt == '3') v <= saldo ? saldo -= v : console.log("Sem saldo");
    }
    menu();
}
menu();