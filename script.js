 String = "";
    const button = document.getElementsByClassName('box2')
    Array.from(button).forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target.innerText == '=') {
          String = eval(String)
          document.querySelector("input").value = String;
        }
        else if (e.target.innerText == 'Clear') {
          String = " "
          document.querySelector("input").value = String;
        } else {
          String = String + e.target.innerText;
          document.querySelector("input").value = String;
        }
      })
    })
    function funn() {
    }