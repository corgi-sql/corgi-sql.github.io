/** sync each horizontal scroll wrapper with its range slider */
document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll(".soft-row").forEach(row=>{
    const wrapper=row.querySelector(".model-scroll-wrapper");
    const slider=row.querySelector(".row-slider");
    if(!wrapper||!slider) return;

    // update slider max when content changes
    const updateMax=()=>{
      const max=wrapper.scrollWidth-wrapper.clientWidth;
      slider.disabled=max<=0;
      return max;
    };
    let maxScroll=updateMax();

    // sync slider on scroll
    wrapper.addEventListener("scroll",()=>{
      maxScroll=updateMax();
      if(maxScroll>0){slider.value=(wrapper.scrollLeft/maxScroll)*100;} else {slider.value=0;}
    });

    // scroll on slider input
    slider.addEventListener("input",()=>{
      maxScroll=updateMax();
      wrapper.scrollLeft=(slider.value/100)*maxScroll;
    });

    // recalc on resize
    window.addEventListener("resize",()=>{maxScroll=updateMax();});
  });
});
