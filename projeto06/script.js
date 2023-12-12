document.addEventListener("DOMContentLoaded", function() {
    const home = document.getElementById('home');
    const collections = document.getElementById('collections');
    const about = document.getElementById('about');
    const library = document.getElementById('library');
    const support = document.getElementById('support');
    const news = document.getElementById('news');
    const english = document.getElementById('english');

    const section = document.getElementById('section');
    const cabecalho = document.getElementById('cabecalho');
    const sub_header = document.getElementById('sub_header');


    const sub_home = document.getElementById('sub_home');
    const sub_collections = document.getElementById('sub_collections');
    const sub_about = document.getElementById('sub_about');
    const sub_library = document.getElementById('sub_library');
    const sub_support = document.getElementById('sub_support');
    const sub_news = document.getElementById('sub_news');
    const sub_english = document.getElementById('sub_english');


    
    home.addEventListener("mouseover", function() {
        cabecalho.style.backgroundColor= "#e6fa05";
        sub_header.style.display = "flex";
        sub_home.style.display = "flex";
        sub_collections.style.display = "none"; 
        sub_about.style.display = "none";
        sub_library.style.display = "none"; 
        sub_support.style.display = "none"; 
        sub_news.style.display = "none"; 
        sub_english.style.display = "none";
        
    });
    collections.addEventListener("mouseover", function() {
        cabecalho.style.backgroundColor= "#e6fa05";
        sub_header.style.display = "flex";
        sub_home.style.display = "none";
        sub_collections.style.display = "flex"; 
        sub_about.style.display = "none";
        sub_library.style.display = "none"; 
        sub_support.style.display = "none"; 
        sub_news.style.display = "none"; 
        sub_english.style.display = "none";
    });
    about.addEventListener("mouseover", function() {
        cabecalho.style.backgroundColor= "#e6fa05";
        sub_header.style.display = "flex";
        sub_home.style.display = "none";
        sub_collections.style.display = "none"; 
        sub_about.style.display = "flex";
        sub_library.style.display = "none"; 
        sub_support.style.display = "none"; 
        sub_news.style.display = "none"; 
        sub_english.style.display = "none";
    });
    library.addEventListener("mouseover", function() {
        cabecalho.style.backgroundColor= "#e6fa05";
        sub_header.style.display = "flex";
        sub_home.style.display = "none";
        sub_collections.style.display = "none"; 
        sub_about.style.display = "none";
        sub_library.style.display = "flex"; 
        sub_support.style.display = "none"; 
        sub_news.style.display = "none"; 
        sub_english.style.display = "none";
    });
    support.addEventListener("mouseover", function() {
        cabecalho.style.backgroundColor= "#e6fa05";
        sub_header.style.display = "flex";
        sub_home.style.display = "none";
        sub_collections.style.display = "none"; 
        sub_about.style.display = "none";
        sub_library.style.display = "none"; 
        sub_support.style.display = "flex"; 
        sub_news.style.display = "none"; 
        sub_english.style.display = "none";
    });
    news.addEventListener("mouseover", function() {
        cabecalho.style.backgroundColor= "#e6fa05";
        sub_header.style.display = "flex";
        sub_home.style.display = "none";
        sub_collections.style.display = "none"; 
        sub_about.style.display = "none";
        sub_library.style.display = "none"; 
        sub_support.style.display = "none"; 
        sub_news.style.display = "flex"; 
        sub_english.style.display = "none";
    });
    english.addEventListener("mouseover", function() {
        cabecalho.style.backgroundColor= "#e6fa05";
        sub_header.style.display = "flex";
        sub_home.style.display = "none";
        sub_collections.style.display = "none"; 
        sub_about.style.display = "none";
        sub_library.style.display = "none"; 
        sub_support.style.display = "none"; 
        sub_news.style.display = "none"; 
        sub_english.style.display = "flex";
    });
    section.addEventListener("mouseover", function() {
        sub_header.style.display = "none";
        sub_home.style.display = "none";
        sub_collections.style.display = "none"; 
        sub_about.style.display = "none";
        sub_library.style.display = "none"; 
        sub_support.style.display = "none"; 
        sub_news.style.display = "none"; 
        sub_english.style.display = "none";
        cabecalho.style.backgroundColor= "transparent";
    });
});

