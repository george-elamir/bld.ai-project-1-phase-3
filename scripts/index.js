window.onload = async function (e) {
  /***
   * fetching the API and data
   */
  let data = await fetch("http://localhost:3000/data");
  data = await data.json();
  const courses = data.courses;

  let activetab = document.querySelectorAll(".nav-item .active");
  let tabcourses = courses.filter((elem) => {
    return elem.type === activetab[0].innerText;
  });

  /**
   * DOM Manipulations
   */
  const cardsContainer = document.getElementById("cards-container");
  let cards = [];
  tabcourses.forEach((element, idx) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("carousel-item");
    if (!idx) cardDiv.classList.add("active");

    const cardCol = document.createElement("div");
    cardCol.classList.add("col-md-3");

    const cardContainerTop = document.createElement("div");
    cardContainerTop.classList.add("card");
    cardContainerTop.style.width = "18rem";

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-body");

    const cardImg = document.createElement("img");
    cardImg.classList.add("card-img-top");
    cardImg.setAttribute("src", element.image);

    const cardTitle = document.createElement("h4");
    const titleText = document.createTextNode(element.course_title);
    cardTitle.classList.add("card-title");
    cardTitle.appendChild(titleText);

    const cardAuthor = document.createElement("p");
    const authorText = document.createTextNode(element.author);
    cardAuthor.classList.add("card-author");
    cardAuthor.appendChild(authorText);

    const cardPrice = document.createElement("div");
    const priceText = document.createTextNode(element.price);
    cardPrice.classList.add("card-price");
    cardPrice.classList.add("font-bold");
    cardPrice.appendChild(priceText);

    cardContainer.appendChild(cardImg);
    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardAuthor);
    cardContainer.appendChild(cardPrice);

    cardContainerTop.appendChild(cardContainer);
    cardCol.appendChild(cardContainer);
    cardDiv.appendChild(cardCol);
    cardsContainer.appendChild(cardDiv);
    cards.push(cardDiv);
  });
  let items = document.querySelectorAll(".carousel .carousel-item");

  items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling;
    for (var i = 1; i < minPerSlide; i++) {
      if (!next) {
        // wrap carousel by using first child
        next = items[0];
      }
      let cloneChild = next.cloneNode(true);
      el.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });

  const searchbar = document.getElementById("searchbar");
  searchbar.addEventListener("input", (e) => {
    const searchRegex = new RegExp(e.target.value, "i");

    cardsContainer.textContent = "";
    console.log(cardsContainer);
    const filteredCourses = tabcourses.filter((elem) => {
      return searchRegex.test(elem.course_title);
    });
    console.log(filteredCourses);

    filteredCourses.forEach((element, idx) => {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("carousel-item");
      if (!idx) cardDiv.classList.add("active");

      const cardCol = document.createElement("div");
      cardCol.classList.add("col-md-3");

      const cardContainerTop = document.createElement("div");
      cardContainerTop.classList.add("card");
      cardContainerTop.style.width = "18rem";

      const cardContainer = document.createElement("div");
      cardContainer.classList.add("card-body");

      const cardImg = document.createElement("img");
      cardImg.classList.add("card-img-top");
      cardImg.setAttribute("src", element.image);

      const cardTitle = document.createElement("h4");
      const titleText = document.createTextNode(element.course_title);
      cardTitle.classList.add("card-title");
      cardTitle.appendChild(titleText);

      const cardAuthor = document.createElement("p");
      const authorText = document.createTextNode(element.author);
      cardAuthor.classList.add("card-author");
      cardAuthor.appendChild(authorText);

      const cardPrice = document.createElement("div");
      const priceText = document.createTextNode(element.price);
      cardPrice.classList.add("card-price");
      cardPrice.classList.add("font-bold");
      cardPrice.appendChild(priceText);

      cardContainer.appendChild(cardImg);
      cardContainer.appendChild(cardTitle);
      cardContainer.appendChild(cardAuthor);
      cardContainer.appendChild(cardPrice);

      cardContainerTop.appendChild(cardContainer);
      cardCol.appendChild(cardContainer);
      cardDiv.appendChild(cardCol);
      cardsContainer.appendChild(cardDiv);
      cards.push(cardDiv);
    });
    let items = document.querySelectorAll(".carousel .carousel-item");

    items.forEach((el) => {
      const minPerSlide = 4;
      let next = el.nextElementSibling;
      for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
          // wrap carousel by using first child
          next = items[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });
  });

  document.querySelectorAll(".nav-link").forEach((node) => {
    node.addEventListener("click", () => {
      searchbar.value = "";
      cardsContainer.textContent = "";
      activetab = document.querySelectorAll(".nav-item .active");
      console.log(activetab[0]);
      tabcourses = courses.filter((elem) => {
        return elem.type === activetab[0].innerText;
      });
      tabcourses.forEach((element, idx) => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("carousel-item");
        if (!idx) cardDiv.classList.add("active");

        const cardCol = document.createElement("div");
        cardCol.classList.add("col-md-3");

        const cardContainerTop = document.createElement("div");
        cardContainerTop.classList.add("card");
        cardContainerTop.style.width = "18rem";

        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card-body");

        const cardImg = document.createElement("img");
        cardImg.classList.add("card-img-top");
        cardImg.setAttribute("src", element.image);

        const cardTitle = document.createElement("h4");
        const titleText = document.createTextNode(element.course_title);
        cardTitle.classList.add("card-title");
        cardTitle.appendChild(titleText);

        const cardAuthor = document.createElement("p");
        const authorText = document.createTextNode(element.author);
        cardAuthor.classList.add("card-author");
        cardAuthor.appendChild(authorText);

        const cardPrice = document.createElement("div");
        const priceText = document.createTextNode(element.price);
        cardPrice.classList.add("card-price");
        cardPrice.classList.add("font-bold");
        cardPrice.appendChild(priceText);

        cardContainer.appendChild(cardImg);
        cardContainer.appendChild(cardTitle);
        cardContainer.appendChild(cardAuthor);
        cardContainer.appendChild(cardPrice);

        cardContainerTop.appendChild(cardContainer);
        cardCol.appendChild(cardContainer);
        cardDiv.appendChild(cardCol);
        cardsContainer.appendChild(cardDiv);
        cards.push(cardDiv);
      });
      let items = document.querySelectorAll(".carousel .carousel-item");

      items.forEach((el) => {
        const minPerSlide = 4;
        let next = el.nextElementSibling;
        for (var i = 1; i < minPerSlide; i++) {
          if (!next) {
            // wrap carousel by using first child
            next = items[0];
          }
          let cloneChild = next.cloneNode(true);
          el.appendChild(cloneChild.children[0]);
          next = next.nextElementSibling;
        }
      });
    });
  });
};
