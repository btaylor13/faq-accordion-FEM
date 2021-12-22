document.querySelectorAll(".accordion__question").forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log("click");
    const accordionCollapse = item.nextElementSibling;

    if (!item.classList.contains("collapsing")) {
      //    OPEN ACCORDION CONTENT
      if (!item.classList.contains("open")) {
        console.log("toggle accordion button");

        accordionCollapse.style.display = "block";
        let accordionHeight = accordionCollapse.clientHeight;
        console.log(accordionHeight);

        setTimeout(() => {
          accordionCollapse.style.height = accordionHeight + "px";
          accordionCollapse.style.display = "";
        }, 1);

        accordionCollapse.classList = "accordion__collapse collapsing";

        setTimeout(() => {
          console.log("open accordion content");
          accordionCollapse.classList = "accordion__collapse collapse open";
        }, 300);

        //   CLOSE ACCORDION ITEM
      } else {
        //   REMOVE COLLAPSE OPEN AND ADD COLLAPSING TO ACCORDION__COLLAPSE
        accordionCollapse.classList = "accordion__collapse collapsing";

        setTimeout(() => {
          accordionCollapse.style.height = "0px";
        }, 1);

        //   AFTER .3S, REMOVE COLLAPSING CLASS AND ADD COLLAPSE CLASS
        setTimeout(() => {
          console.log("close accordion content");
          accordionCollapse.classList = "accordion__collapse collapse";
          accordionCollapse.style.height = "";
        }, 300);
      }

      item.classList.toggle("open");
    }
  });
});
