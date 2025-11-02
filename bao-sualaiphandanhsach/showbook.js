document.addEventListener("DOMContentLoaded", () => {
    const slidecontainer = document.querySelector(".slidecontainer");
    const listimage = document.querySelector(".listimage");
    const sections = document.querySelectorAll(".section-box");
    const backBtn = document.getElementById("backToHomeBtn");
    document.getElementById("tamlyhoc").addEventListener("click", function(e) {
        e.preventDefault();

        // Ẩn banner và listimage
        if(slidecontainer) slidecontainer.style.display = 'none';
        if(listimage) listimage.style.display = 'none';
        backBtn.style.display = 'block';

        // Ẩn tất cả section
        sections.forEach(section => section.style.display = 'none');

        // Hiển thị section chứa sách  (ví dụ ở “Tâm Lý Học”)
        const tamlyhocSection = document.querySelector('[data-category-section="tam-ly-hoc"]');
        if(tamlyhocSection) tamlyhocSection.style.display = 'block';
        window.scrollTo({ top: document.getElementById("menu").offsetTop, behavior: 'smooth' });
    });

    document.getElementById("vanhoc").addEventListener("click", function(e) {
        e.preventDefault();

        // Ẩn banner và listimage
        if(slidecontainer) slidecontainer.style.display = 'none';
        if(listimage) listimage.style.display = 'none';
        backBtn.style.display='block';

        // Ẩn tất cả section
        sections.forEach(section => section.style.display = 'none');

        const vanhocSection = document.querySelector('[data-category-section="van-hoc"]');
        if(vanhocSection) vanhocSection.style.display = 'block';
        window.scrollTo({ top: document.getElementById("menu").offsetTop, behavior: 'smooth' });
    });

        document.getElementById("sachgk").addEventListener("click", function(e) {
        e.preventDefault();

        // Ẩn banner và listimage
        if(slidecontainer) slidecontainer.style.display = 'none';
        if(listimage) listimage.style.display = 'none';
        backBtn.style.display='block';

        // Ẩn tất cả section
        sections.forEach(section => section.style.display = 'none');

        // Hiển thị section chứa sách  (ví dụ ở “sgk”)
        const sgkSection = document.querySelector('[data-category-section="sgk"]');
        if(sgkSection) sgkSection.style.display = 'block';
        window.scrollTo({ top: document.getElementById("menu").offsetTop, behavior: 'smooth' });
    });

        document.getElementById("khcn").addEventListener("click", function(e) {
        e.preventDefault();

        // Ẩn banner và listimage
        if(slidecontainer) slidecontainer.style.display = 'none';
        if(listimage) listimage.style.display = 'none';
        backBtn.style.display = 'block';

        // Ẩn tất cả section
        sections.forEach(section => section.style.display = 'none');

        // Hiển thị section chứa  (ví dụ ở “khcn”)
        const khcnSection = document.querySelector('[data-category-section="khcn"]');
        if(khcnSection) khcnSection.style.display = 'block';
        window.scrollTo({ top: document.getElementById("menu").offsetTop, behavior: 'smooth' });
    });

        document.getElementById("kinhte").addEventListener("click", function(e) {
        e.preventDefault();

        // Ẩn banner và listimage
        if(slidecontainer) slidecontainer.style.display = 'none';
        if(listimage) listimage.style.display = 'none';
        backBtn.style.display='block';

        // Ẩn tất cả section
        sections.forEach(section => section.style.display = 'none');

        // Hiển thị section chứa sách (ví dụ ở “kinhte”)
        const kinhteSection = document.querySelector('[data-category-section="kinhte"]');
        if(kinhteSection) kinhteSection.style.display = 'block';
        window.scrollTo({ top: document.getElementById("menu").offsetTop, behavior: 'smooth' });
    });

        document.getElementById("dungcuhoc").addEventListener("click", function(e) {
        e.preventDefault();

        // Ẩn banner và listimage
        if(slidecontainer) slidecontainer.style.display = 'none';
        if(listimage) listimage.style.display = 'none';
        backBtn.style.display='block';

        // Ẩn tất cả section
        sections.forEach(section => section.style.display = 'none');

        // Hiển thị section chứa  (ví dụ ở “dungcu”)
        const dungcuSection = document.querySelector('[data-category-section="dung-cu"]');
        if(dungcuSection) dungcuSection.style.display = 'block';
        window.scrollTo({ top: document.getElementById("menu").offsetTop, behavior: 'smooth' });
    });
    backBtn.addEventListener("click", () => {
        // Hiện lại main content, slider, list image
        document.querySelector(".slidecontainer").style.display = "block";
        document.querySelector(".listimage").style.display = "flex"; // hoặc block tùy bạn
        sections.forEach(section => section.style.display = 'block');
        
        const dungcuSection = document.querySelector('[data-category-section="dung-cu"]');
        if(dungcuSection) dungcuSection.style.display = 'none';
        // Ẩn nút quay lại nếu muốn
        backBtn.style.display="none"

    });


});
