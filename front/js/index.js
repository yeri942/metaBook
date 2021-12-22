const dummy= [
    {
        id:1,
        title:'title1',
        author:'author1',
        thumbnailUrl:"https://static.wixstatic.com/media/c4a473_cd5a9e152a6b4f63b5082f6d39b84a02~mv2.jpeg/v1/fit/w_633,h_418,al_c,q_80/file.jpeg"
    },
    {
        id:2,
        title:'title2',
        author:'author2',
        thumbnailUrl:"https://lh3.googleusercontent.com/proxy/eRKzsaxTL3V5eGyXu_6OpZGT5tv_styH9UFnbci3xSxP1LQyIiJYi3IpsIRpvO31Kl59r94oxogNVx_zNCc8t8-WKV9pOAO5Q62tqSnSrIUSUT9SLMGNFyttccXYbM15ww0MB2cotBKU46tbR40"
    },
    {
        id:3,
        title:'title3',
        author:'author3',
        thumbnailUrl:"https://i.pinimg.com/736x/33/67/93/3367935eba2fdc86b188e2450bf67f7d.jpg"
    },
    {
        id:4,
        title:'title4',
        author:'author4',
        thumbnailUrl:"https://cdn.gametoc.co.kr/news/photo/202108/62478_202765_4926.jpg"
    },
    {
        id:5,
        title:'title5',
        author:'author5',
        thumbnailUrl:"https://jangkunblog.com/assets/img/2021/gather-town-2021.png"
    },
    {
        id:6,
        title:'title6',
        author:'author6',
        thumbnailUrl:"https://pbs.twimg.com/media/E0FTI-MWEAUntzL?format=jpg&name=large"
    },
    {
        id:7,
        title:'title7',
        author:'author7',
        thumbnailUrl:"https://i.pinimg.com/550x/c5/aa/30/c5aa30190cb3dd1bf2938e4bfe36366d.jpg"
    },
    {
        id:8,
        title:'title8',
        author:'author8',
        thumbnailUrl:"https://static.wixstatic.com/media/c4a473_cd5a9e152a6b4f63b5082f6d39b84a02~mv2.jpeg/v1/fit/w_633,h_418,al_c,q_80/file.jpeg"
    },
    {
        id:9,
        title:'title9',
        author:'author9',
        thumbnailUrl:"https://lh3.googleusercontent.com/proxy/eRKzsaxTL3V5eGyXu_6OpZGT5tv_styH9UFnbci3xSxP1LQyIiJYi3IpsIRpvO31Kl59r94oxogNVx_zNCc8t8-WKV9pOAO5Q62tqSnSrIUSUT9SLMGNFyttccXYbM15ww0MB2cotBKU46tbR40"
    },
    {
        id:10,
        title:'title10',
        author:'author10',
        thumbnailUrl:"https://i.pinimg.com/550x/c5/aa/30/c5aa30190cb3dd1bf2938e4bfe36366d.jpg"
    },
    {
        id:11,
        title:'title11',
        author:'author11',
        thumbnailUrl:"https://i.pinimg.com/550x/c5/aa/30/c5aa30190cb3dd1bf2938e4bfe36366d.jpg"
    },
    {
        id:12,
        title:'title12',
        author:'author12',
        thumbnailUrl:"https://i.pinimg.com/550x/c5/aa/30/c5aa30190cb3dd1bf2938e4bfe36366d.jpg"
    },
    {
        id:13,
        title:'title13',
        author:'author13',
        thumbnailUrl:"https://i.pinimg.com/550x/c5/aa/30/c5aa30190cb3dd1bf2938e4bfe36366d.jpg"
    },
    {
        id:14,
        title:'title14',
        author:'author14',
        thumbnailUrl:"https://i.pinimg.com/550x/c5/aa/30/c5aa30190cb3dd1bf2938e4bfe36366d.jpg"
    },
    {
        id:15,
        title:'title15',
        author:'author15',
        thumbnailUrl:"https://i.pinimg.com/550x/c5/aa/30/c5aa30190cb3dd1bf2938e4bfe36366d.jpg"
    },
    {
        id:16,
        title:'title16',
        author:'author16',
        thumbnailUrl:"https://i.pinimg.com/550x/c5/aa/30/c5aa30190cb3dd1bf2938e4bfe36366d.jpg"
    },
    {
        id:17,
        title:'title17',
        author:'author17',
        thumbnailUrl:"https://i.pinimg.com/550x/c5/aa/30/c5aa30190cb3dd1bf2938e4bfe36366d.jpg"
    },
]

const target_board_page=document.querySelector("#board_page");
const target_top=document.querySelector(".top");
const target_board_content=document.querySelector(".board_content");

function render(datas){
    target_board_content.innerHTML='';
    target_top.innerHTML='';

    for (let i=0; i<3; i++){
        const alink_top =document.createElement("a");
        const figure_top=document.createElement("figure");
        const figcaption_top=document.createElement("figcaption");
        const title_top = document.createElement("span");
        const author_top = document.createElement("span");
        const thumb_top= document.createElement("img");

        alink_top.setAttribute('href',"#");
        
        title_top.className="title";
        author_top.className="writer";

        title_top.innerText=dummy[i].title;
        author_top.innerText=dummy[i].author;
        thumb_top.src=dummy[i].thumbnailUrl;

        figure_top.appendChild(thumb_top);
        
        figcaption_top.appendChild(title_top);
        figcaption_top.appendChild(author_top);
        
        figure_top.appendChild(figcaption_top);
        alink_top.appendChild(figure_top);

        target_top.appendChild(alink_top);
    }

    const board_ul = document.createElement("ul");
    const board_article = document.createElement('article');
    
    datas.forEach(data => {
        const board_li = document.createElement("li");
        const board_alink = document.createElement("a");
        const board_figure= document.createElement("figure");
        const board_figcaption= document.createElement("figcaption");
        const board_title= document.createElement("span");
        const board_author= document.createElement("span");
        const board_thumb= document.createElement("img");

        board_alink.setAttribute('href',"#");
        board_title.className="title";
        board_author.className="writer";
        board_thumb.className="topPosts_1st";
        
        board_title.innerText=data.title;
        board_author.innerText=data.author;
        board_thumb.src=data.thumbnailUrl;

        
        board_figure.appendChild(board_thumb);
        
        board_figcaption.appendChild(board_title);
        board_figcaption.appendChild(board_author);
        board_figure.appendChild(board_figcaption);
        board_alink.appendChild(board_figure);
        board_li.appendChild(board_alink);
        board_ul.appendChild(board_li);
    })

    target_board_content.appendChild(board_ul);

}

window.addEventListener('DOMContentLoaded',()=>{
    render(dummy);
});


function paginate(totaldata,currPage){
    const perPage=20; //4*5
    const pageCount=5; //한 번에 몇개 페이지 까지 보일지

    const totalPage=Math.ceil(totaldata/perPage);
    const pageGroup=Math.ceil(currPage/limit);

    let last=pageGroup*pageCount; //화면에 보여질 마지막 페이지 번호
    if (last>totalPage) last=totalPage;
    let first=last-(pageCount-1); //화면에 보여질 첫번째 페이지 번호
    const next=last+1;
    const prev=first-1;

    if (totalPage<1) first = last;
    // const pages=$("#pages"); //JQuery.empty() => 태그를 포함한 요소의 내용 삭제.
    // pages.empty();
    const target_pages=document.querySelector(".pages");
    target_pages.innerHTML="";
    

    if (first>5){
        pages.append()
    }


}