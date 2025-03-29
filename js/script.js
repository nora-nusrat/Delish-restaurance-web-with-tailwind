AOS.init();




let count = document.querySelectorAll(".count")
let arr = Array.from(count)



arr.map(function(item){
  let startnumber = 0

  function counterup(){
  startnumber++
  item.innerHTML= startnumber
   
  if(startnumber == item.dataset.number){
      clearInterval(stop)
  }
}

let stop =setInterval(function(){
  counterup()
},50)

})




let tabsConfig = {
  tabs: [
   
          {
    
            id:'demoTab1',
    
            label:'Demo Tab 1',
    
            url:'index.html',
    
            tooltip:'Demo 1',
    
            tabClass:'customTabClass',
    
            spacerClass:'customSpacerClass',
    
          },
    
          // ...
    
        ]
    
    };

    $('#simpleTabsDemo').simpleTabs(tabsConfig,'demoTab1');
    $('#simpleTabsDemo').simpleTabs(tabsConfig,'demoTab2');
    $('#simpleTabsDemo').simpleTabs(tabsConfig,'demoTab3');

    