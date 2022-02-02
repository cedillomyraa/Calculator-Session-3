//Functions: Step one create or declare 2:call the function
//step 1
function sayHello(name, place){
    //body of the function
    console.log("Hello " + name + " from" + place);
    let template =`<h2> Hello ${name} from <span class="place">${place}
    </span></h2>`;
    return template;

    //document.write(`
    //<h2> Hello ${name} from <span class="place">${place}</span></h2>`)
}
//step2
document.write(sayHello("Mark"," USA!"))
document.write(sayHello("April"," USA!"))
document.write(sayHello("Arturo"," USA!"))
sayHello ("Mark", " USA!");
sayHello("April", " USA!");
sayHello("Arturo", " Mexico!")


//Parameters: are    (examples above are Mark and USA)