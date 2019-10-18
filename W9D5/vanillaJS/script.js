document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  const handleFavoriteSubmitButton = (e) => {    
    e.preventDefault();

    const inputText = document.querySelector(".favorite-input");
    const ul = document.getElementById("restaurants");    

    if (inputText.value === "") {
      window.alert("Your input is empty");
    } else {
      const li = document.createElement("li");      
      li.textContent = inputText.value;
      ul.append(li);    

      inputText.value = "";
    }
  }

  document.querySelector(".favorite-submit").addEventListener("click", handleFavoriteSubmitButton);


  // adding new photos

  const toggleFormButton = (e) => {
    const form = document.querySelector(".photo-form-container");

    form.classList.toggle("hidden");
    e.stopPropagation();  // doesn't work, why???
  }

  document.querySelector(".photo-show-button").addEventListener("click", toggleFormButton);

  const addPhotoButton = (e) => {
    e.preventDefault();

    const inputUrl = document.querySelector(".photo-url-input");

    if (inputUrl.value === "") {
      alert("You must fill the URL");
    } else {      
      const ulPhotoList = document.querySelector(".dog-photos");
      const li = document.createElement("li");
      const img = document.createElement("img");

      img.src = inputUrl.value;
      ulPhotoList.append(li);
      li.append(img);

      inputUrl.value = "";
    }
  }

  document.querySelector(".photo-url-submit").addEventListener("click", addPhotoButton);
});
