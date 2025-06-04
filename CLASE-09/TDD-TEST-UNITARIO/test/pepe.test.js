
console.log("por cariño")

//* ANTES (solo 1 vez para todo el describe)
before(async ()=>{

})

//* DESPUÉS (solo 1 vez para todo el describe)
after(()=>{

})

describe("Una descripción", function(){
    //* Tiempo de espera máximo (de 2 seg)

    //* ANTES (solo 1 vez para cada IT (it()))
    beforeEach(()=>{})
    //* DESPUÉS (solo 1 vez para cada IT (it()))
    afterEach(()=>{})

    it("Test 1", ()=>{

    }) 
    it("Test 2", ()=>{
        
    }) 
    //* De ser async
    it("Test 3", async ()=>{
        
    }) 

})