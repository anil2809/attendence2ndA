students_list=[
    {
        name:"Bhanu",
        roll:"01",
        present:0
    },
    {
        name:"Mybu",
        roll:"02",
        present:0
    },
    {
        name:"Harshitha",
        roll:"03",
        present:0
    },
    {
        name:"Hari Priya",
        roll:"04",
        present:0
    },
    {
        name:"Saiteja",
        roll:"05",
        present:0
    },
    {
        name:"Laxman",
        roll:"06",
        present:0
    },
    {
        name:"Mahesh",
        roll:"07",
        present:0
    },
    {
        name:"Mallesh",
        roll:"08",
        present:0
    },
    {
        name:"Shashikanth",
        roll:"09",
        present:0
    },
    {
        name:"Shruthi",
        roll:"10",
        present:0
    },
    {
        name:"Dinesh",
        roll:"11",
        present:0
    },
    {
        name:"Srivani",
        roll:"12",
        present:0
    },
    {
        name:"Chandana",
        roll:"13",
        present:0
    },
    {
        name:"Pradeep",
        roll:"14",
        present:0
    },
    {
        name:"Jahnavi",
        roll:"15",
        present:0
    },
    {
        name:"Naveen Kumar",
        roll:"16",
        present:0
    },
    {
        name:"Naveen Reddy",
        roll:"17",
        present:0
    },
    {
        name:"Suhas",
        roll:"18",
        present:0
    },
    {
        name:"Sri Charan",
        roll:"19",
        present:0
    },
    {
        name:"Omkar",
        roll:"20",
        present:0
    },
    {
        name:"Anil",
        roll:"21",
        present:0
    },
    {
        name:"Gowthami",
        roll:"22",
        present:0
    },
    {
        name:"Srikanth",
        roll:"23",
        present:0
    },
    {
        name:"Ganesh",
        roll:"24",
        present:0
    },
    {
        name:"Pranitha",
        roll:"25",
        present:0
    },
    {
        name:"Sai Kiran",
        roll:"26",
        present:0
    },
    {
        name:"Lavanya",
        roll:"27",
        present:0
    },
    {
        name:"Karthik",
        roll:"28",
        present:0
    },
    {
        name:"Nava Chaitanya",
        roll:"29",
        present:0
    },
    {
        name:"Kushal",
        roll:"30",
        present:0
    },
    {
        name:"Sreehithi",
        roll:"31",
        present:0
    },
    {
        name:"Tanusha",
        roll:"32",
        present:0
    },
    {
        name:"Sathwik",
        roll:"33",
        present:0
    },
    {
        name:"Susan",
        roll:"34",
        present:0
    },
    {
        name:"Shiva Ram",
        roll:"35",
        present:0
    },
    {
        name:"Devi Manognya",
        roll:"36",
        present:0
    },
    {
        name:"Vaishnavi",
        roll:"37",
        present:0
    },
    {
        name:"Muddassir",
        roll:"38",
        present:0
    },
    {
        name:"Nandu",
        roll:"39",
        present:0
    },
    {
        name:"Nihal",
        roll:"40",
        present:0
    },
    {
        name:"Kruthika",
        roll:"41",
        present:0
    },
    {
        name:"Parimal",
        roll:"42",
        present:0
    },
    {
        name:"Shivani Priyanka",
        roll:"43",
        present:0
    },
    {
        name:"Shyam",
        roll:"44",
        present:0
    },
    {
        name:"Anirudh",
        roll:"45",
        present:0
    },
    {
        name:"Nithin",
        roll:"46",
        present:0
    },
    {
        name:"Varun",
        roll:"47",
        present:0
    },
    {
        name:"Vijay",
        roll:"48",
        present:0
    },
    {
        name:"Chaithanya",
        roll:"49",
        present:0
    },
    {
        name:"Sandeep",
        roll:"50",
        present:0
    },
    {
        name:"Rasheed",
        roll:"51",
        present:0
    },
    {
        name:"Shweta Pal",
        roll:"52",
        present:0
    },
    {
        name:"Indhu",
        roll:"53",
        present:0
    },
    {
        name:"Sanjana",
        roll:"54",
        present:0
    },
    {
        name:"Dattathreya",
        roll:"55",
        present:0
    },
    {
        name:"Diya",
        roll:"56",
        present:0
    },
    {
        name:"Rishitha",
        roll:"57",
        present:0
    },
    {
        name:"Venkat",
        roll:"58",
        present:0
    },
    {
        name:"Srikar",
        roll:"59",
        present:0
    },
    {
        name:"Sriya",
        roll:"60",
        present:0
    },
    {
        name:"Chandana",
        roll:"61",
        present:0
    },
    {
        name:"Abhiram",
        roll:"62",
        present:0
    },
    {
        name:"Naga Vardhan",
        roll:"63",
        present:0
    },
    {
        name:"Vishal",
        roll:"64",
        present:0
    },
    {
        name:"Srija",
        roll:"65",
        present:0
    },
    {
        name:"Neha",
        roll:"22_01",
        present:0
    },
    {
        name:"Mamatha",
        roll:"22_02",
        present:0
    },
    {
        name:"Keerthi",
        roll:"22_03",
        present:0
    },
    {
        name:"Uday",
        roll:"22_04",
        present:0
    },
    {
        name:"Ajay",
        roll:"22_05",
        present:0
    },
    {
        name:"Nithin",
        roll:"22_06",
        present:0
    },
]


for(var i=0;i<73;i=i+2){
    // console.log(students_list[i]["name"]+" "+students_list[i]["roll"])
    document.write(`
    <div class="row">
    <div class="col-6">
        <button class="btn btn-danger btn1">
            <div class="roll">
                <b>${students_list[i]["roll"]}</b>
            </div>
            <div class="name">
                ${students_list[i]["name"]}
            </div>
        </button>
    </div>
    <div class="col-6">
        <button class="btn btn-danger btn1">
            <div class="roll">
                <b>${students_list[i+1]["roll"]}</b>
            </div>
            <div class="name">
                ${students_list[i+1]["name"]}
            </div>
        </button>
    </div>
    
    
</div>
    `)
}

document.write(`
<div class="row">
<div class="col-6">
    <button class="btn btn-danger btn1">
        <div class="roll">
            <b>${students_list[73]["roll"]}</b>
        </div>
        <div class="name">
            ${students_list[73]["name"]}
        </div>
    </button>
</div>
</div>
`)

