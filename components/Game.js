AFRAME .registerComponent("gameplay",{
    schema:{
        elementId:{type:"string",default:"#coins1"}
    },
    update:function(){
        this.isCollided(this.data.elementId)
    },
    isCollided:function(elementId){
        const element=document.querySelector(elementId);
        element.addEventListener("collide",(e)=>{
            if(elementId.includes("#coins")){
                console.log(elementId+"collision")
            }
            else if(elementId.includes("#fishes")){
                console.log(elementId+"collision")
            }
        })
    }
})
