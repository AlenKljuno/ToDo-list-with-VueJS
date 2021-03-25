var vue = new Vue({
    el:'#app',
    data:{
      
        title:'Sto je dobar ovaj Vue JS',
        tooltip:'Ovo je neki naslov',
        imgSrc:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
        todos:[],
        newItem:''
    },
    methods:{
        addItem(){
            this.todos.push(this.newItem);
        this.newItem = '';

        },
        deleteItem(index){
        this.todos.splice(index, 1);
        },
        enableEnter(e){
            if(e.keyCode === 13){
            this.addItem();
            }
               
            
            
        }
   
    }
});