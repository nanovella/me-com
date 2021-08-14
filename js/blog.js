class blog {
    text;
    img;
    date;

    constructor(img, text, date) {
        this.text = text;
        this.img = img;
        this.date = date;
    }

    makeBlog() {
        let b = document.createElement("div");
        let d = document.createElement("div");
        b.appendChild(d);
        b.className = "blog-box";
        document.getElementById("blogBox").appendChild(b);
        
        if(Array.isArray(this.img)){
            b.appendChild(this.makeCarosuel());
        }
        else {
            let i = document.createElement("img"); b.appendChild(i);
            i.src = this.img;
            i.className = "blog-img";
        } 
        d.innerHTML = this.text;
    }
    
    makeCarosuel() {
        let slides = document.createElement("div");
        slides.id = "slides";
        slides.className = "carousel carousel-dark slide";
        slides.setAttribute("data-bs-ride", "carousel");
        slides.setAttribute("data-bs-interval", "false");
        let indList1 = document.createElement("ol");
        indList1.className = "carousel-indicators";
        slides.appendChild(indList1);
        let slideBox = document.createElement("div"); slides.appendChild(slideBox); slideBox.className = "carousel-inner";
        let button1 = document.createElement("a"); slides.appendChild(button1); button1.className = "carousel-control-prev"; 
        button1.setAttribute("data-bs-target", "#slides"); button1.setAttribute("data-bs-slide", "prev"); button1.role = "button";
        button1.innerHTML = '<span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span>'
        let button2 = document.createElement("a"); slides.appendChild(button2); button2.className = "carousel-control-next"; 
        button2.setAttribute("data-bs-target", "#slides"); button2.setAttribute("data-bs-slide", "next"); button2.role = "button";
        button2.innerHTML = '<span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span>'
        let slideNum = 0;
        this.img.forEach(image => {
            let indListItem = document.createElement("li");
            indListItem.setAttribute("data-bs-target", slides.id);
            indListItem.setAttribute("data-bs-slide-to", slideNum.toString(10));
            indListItem.className = "active";
            indList1.appendChild(indListItem);
            let slide = document.createElement("div");
            slide.className = "carousel-item";
            
            if(slideNum == 0) {
                slide.className += " active";
                indListItem.className += " active";
            }
            let slideImg = document.createElement("img");
            slideImg.src = image;
            slideImg.className = "blog-slide-img";
            slide.appendChild(slideImg);
            slideBox.appendChild(slide);
            slideNum++;
        });
        return slides;
    }
}

