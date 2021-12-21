const dummy= [
    {
        id:1,
        title:'title1',
        author:'author1',
        thumbnailUrl:"https://w.namu.la/s/2f42cc22833cfea53c3fc39d621310c29ecc50950fb1d3b04b4915412f28520901b3abb548676c190f9de32f23bb8ec61f07288b5bb1a64fbf0ba5d4b7e5cc74067b17a821c84af2d2519864296c8b6a"
    },
    {
        id:2,
        title:'title2',
        author:'author2',
        thumbnailUrl:"https://mblogthumb-phinf.pstatic.net/MjAxODAxMTRfMTQz/MDAxNTE1ODkyOTIxODU5.0lXfhPaNo0At47pIDFpcehmwuoxOnulQ8SA2EMEc0r0g.CSsYA0qq0lZdfF-8ilz4AW2-SdG7aqgnjWnLiithc7og.JPEG.tina0071/output_2190928647.jpg?type=w800"
    },
    {
        id:3,
        title:'title3',
        author:'author3',
        thumbnailUrl:"https://w.namu.la/s/37be476d345fabc4043a303a75c192be440f69780242038067551a2cab2ffeaa412712865a0745e12d985be00f7d3b5d88c014c6b1cebe571ec2f7c1152a51a6a5fc4cf7295e4c0c68982ccc1ce8c87aec955a26169a6beb7460087bd4339b44"
    },
    {
        id:4,
        title:'title4',
        author:'author4',
        thumbnailUrl:"https://img1.daumcdn.net/thumb/C176x176/?fname=https://k.kakaocdn.net/dn/brzH98/btqEZLQAzSQ/HRqKg8BaNkf5jBsCIkTgfK/img.jpg"
    },
    {
        id:5,
        title:'title5',
        author:'author5',
        thumbnailUrl:"https://w.namu.la/s/ba5842c92852abc4b1530459f2495442927ef1da25e397d5b24e389567407cdac348f40f83212ef80817a01174b1bc82b69ca79421524e89c13daff79b38ca3a13a493a5c501e83054c1b7f9699d30582165a2a4625a965b6f4ea1528400027e"
    },
    {
        id:6,
        title:'title6',
        author:'author6',
        thumbnailUrl:"https://mblogthumb-phinf.pstatic.net/MjAyMDA5MTBfNDcg/MDAxNTk5NjkwOTMyNjQ3.dipaeVUMTAaHe_kwKIyQUbUMmXZq9hhr4bHeiHg70m8g.38270pdrNnaHsxh7CcaMJ6bdxAz8RosHK89Y5d7Nij4g.JPEG.khs20010327/1599690932739.jpeg?type=w800"
    },
    {
        id:7,
        title:'title7',
        author:'author7',
        thumbnailUrl:"https://ww.namu.la/s/012301eebf710713b714b89b9fc28b19a289efd7904a4c94d34382936bc3d97fed333713a016967387c5588123e69952d26b520feae087f147fcbf5f3ccb640fdb186717345bfba94f9ea092b5f97f16"
    },
]

const target_board_page=document.querySelector("#board_page");
const target_top_board=document.querySelector(".top");
const target_board_list=document.querySelector(".board_list");

function render(datas){
    target_board_list.innerHTML='';
    target_top_board.innerHTML='';

    for (let i=0; i<3; i++){
        const article_top = document.createElement("article"); 
        const alink_top =document.createElement("a");
        const title_top = document.createElement("span");
        const author_top = document.createElement("span");
        const thumb_top= document.createElement("img");

        alink_top.setAttribute('href',"#");
        article_top.className="topPosts_1st";
        title_top.className="title";
        author_top.className="writer";

        title_top.innerText=dummy[i].title;
        author_top.innerText=dummy[i].author;
        thumb_top.src=dummy[i].thumbnailUrl;

        alink_top.appendChild(thumb_top);
        alink_top.appendChild(title_top);
        alink_top.appendChild(author_top);
    
        
        
        target_top_board.appendChild(alink_top);
    }

    const ul = document.createElement("ul");
    const article = document.createElement('article');
    
    datas.forEach(data => {
        const li = document.createElement("li");
        const alink = document.createElement("a");
        const title= document.createElement("span");
        const author= document.createElement("span");
        const thumb= document.createElement("img");

        alink.setAttribute('href',"#");
        title.className="title";
        author.className="writer";
        thumb.className="topPosts_1st";
        
        title.innerText=data.title;
        author.innerText=data.author;
        thumb.src=data.thumbnailUrl;

        
        alink.appendChild(thumb);
        alink.appendChild(title);
        alink.appendChild(author);
        li.appendChild(alink);

        ul.appendChild(li);
    })

    article.appendChild(ul);
    target_board_list.appendChild(article);
   
}

window.addEventListener('DOMContentLoaded',()=>{
    render(dummy);
});