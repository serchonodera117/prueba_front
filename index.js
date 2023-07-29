let background_header = document.getElementById("dynamic-header-bg");
const arrayBanners=[
    "banner-0",
    "banner-1",
    "banner-2",
    "banner-3",
];
let index = 0;
setInterval(()=>{
    background_header.classList.remove(arrayBanners[index])
    index = (index==3)?0 : index + 1;
    background_header.classList.add(arrayBanners[index])
},3000);