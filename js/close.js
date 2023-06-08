document.getElementById("myexit").addEventListener("click", function() {
    // Play the click sound
    var audio = document.getElementById("clickSound");
    audio.currentTime = 0;
    audio.play();

    // Add the "clicked" class to the button
    this.classList.add("clicked");

    // Wait for the transition to end
    
});


    $(document).ready(function() {
      $("#myexit").click(function() {
        $(".exit-alert").fadeIn();
      });

      $(".exit-confirm").click(function() {
        window.close();
      });

      $(".exit-cancel").click(function() {
        $(".exit-alert").fadeOut();
      });
    });