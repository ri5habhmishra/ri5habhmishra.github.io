$(function() {
  $('.showMoreSkillButton').click(function() {
    const skillElementsContainer = $(this).parent().parent().next();
    if (skillElementsContainer.css("display") === "none") {
      $(this).css({"transform": "rotate(-45deg)"});
      skillElementsContainer.addClass("skillTypeElementsContainerAnimationClass");
    } else {
      skillElementsContainer.removeClass("skillTypeElementsContainerAnimationClass");
      $(this).css({"transform": "rotate(0deg)"});
    }
  })
})


// scrollIndicator starts

window.addEventListener('scroll', moveScrollIndicator);

const scrollIndicatorElt = document.getElementById('scrollIndicator');
const maxHeight = window.document.body.scrollHeight - window.innerHeight;

function moveScrollIndicator(e) {
  const percentage = ((window.scrollY) / maxHeight) * 100;

  scrollIndicatorElt.style.width = percentage + '%';
}

// scrollIndicator ends