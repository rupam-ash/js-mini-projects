// DOM ELEMENTS

const gameContainer = document.querySelector(".container");

const userResult = document.querySelector(".user_result img");

const cpuResult = document.querySelector(".com_result img");

const heading = document.querySelector(".heading");
const optionImage = document.querySelectorAll(".option_img");

// LOOPING OPTION IMAGE

optionImage.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "./images/rock.png";
    heading.textContent = "Wait ...";

    optionImage.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    let setTime = setTimeout(() => {
      gameContainer.classList.remove("start");

      // USER IMAGE CHANGE

      let imgsrc = e.target.querySelector("img").src;
      userResult.src = imgsrc;

      // CPU IMAGE CHANGE

      let random = Math.floor(Math.random() * 3);
      let cpuImage = [
        "./images/rock.png",
        "./images/paper.png",
        "./images/scissors.png",
      ];
      cpuResult.src = cpuImage[random];

      // LOGIC

      let cpuValue = ["r", "p", "s"][random];
      let userValue = ["r", "p", "s"][index];

      let outcomes = {
        rr: "Draw",
        ss: "Draw",
        pp: "Draw",
        rs: "User",
        sp: "User",
        pr: "User",
        sr: "CPU",
        ps: "CPU",
        rp: "CPU",
      };

      let result = outcomes[userValue + cpuValue];

      heading.textContent =
        userValue === cpuValue ? "Match Draw" : `${result} Win`;
    }, 2500);
  });
});
