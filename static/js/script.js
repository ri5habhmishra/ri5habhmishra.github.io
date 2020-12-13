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