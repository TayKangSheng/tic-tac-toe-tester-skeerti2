document.addEventListener('DOMContentLoaded', function() {


  var button = document.getElementById("move")
  button.addEventListener('click', myFunction)
  var brunchButton = document.getElementById("brunch")
  brunchButton.addEventListener('click',addToLunch)
// var count = 0
  function myFunction() {
    //count += 1
    //var divClass = document.querySelector('.container')
    //console.log(divClass);
    var ulItems = document.querySelectorAll('ul')[0]
    console.log(ulItems)
    var liItems = ulItems.getElementsByTagName('li')
    var outputArray = []
    var j = liItems.length-1
    //console.log(j)
    for (var i =0; i < liItems.length; i++) {
          outputArray[i] = liItems[j].textContent
          j += 1
          if(j === liItems.length)
          {
            j = 0
          }
      // console.log(liItems[item].textContent)
      //liItems[item].textContent = liItems[item+1].textContent
    }
    for(var i =0; i < liItems.length; i++) {
      liItems[i].innerHTML = outputArray[i]
    }
    console.log(liItems)
  }

  function addToLunch() {
    var ulItems = document.querySelectorAll('ul')[0]
    var liItems = ulItems.getElementsByTagName('li')
    var ulLunch = document.querySelectorAll('ul')[1]
    if(liItems.length > 0)
    {
      var liItem = liItems[liItems.length-1]
      ulLunch.appendChild(liItem)
    }
    else
      {
        console.log('breakfast over!')
      }
    //for(var i =0; i< liItems.length; i++)
    //{
    //  ulLunch.appendChild(liItems[i])
    //}


  }
})
