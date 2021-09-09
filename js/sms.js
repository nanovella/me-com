function loadBlogs() {
    let e2 = new blog(
        "images/IMG_2408.jpeg", 
        "This image shows one of the orignial radios I set up for testing communication underground.",
        "slide1"
    );
    e2.makeBlog();
    let e1 = new blog(
        ["images/Dex/bothwithflossers.JPEG", "images/Dex/flosserComb1.JPEG", "images/Dex/burnertop.JPEG"],
        "These images show the prototype I have put together to test an alternative design where the radio is on top of a stake with the sensor at the bottom.",
        "slide2"
    );
    e1.makeBlog();
}