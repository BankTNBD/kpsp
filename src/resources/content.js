const home = [
    {
        name: "กิจกรรม",
        id: "activities"
    },
    {
        name: "ข่าวประชาสัมพันธ์",
        id: "annouce"
    },
    {
        name: "คนเก่ง-คนดี",
        id: "dekd"
    },
    {
        name: "จัดซื้อ-จัดจ้าง",
        id: "procurement"
    }
];

const navBar = [
    {
        name: "หน้าหลัก",
        path: "/",
    },
    {
        name: "เกี่ยวกับโรงเรียน",
        path: "/about",
        children: [
            { name: "ประวัติโรงเรียน", path: "#history" },
            { name: "ข้อมูลทั่วไป", path: "#general" },
        ],
    },
    {
        name: "โครงสร้างบริหาร",
        path: "/structure",
        children: [
            { name: "ผู้บริหาร", path: "/executive" },
            { name: "กลุ่มสาระการเรียนรู้ภาษาไทย", path: "/thai" },
            { name: "กลุ่มสาระการเรียนรู้คณิตศาสตร์", path: "/math" },
            { name: "กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี (วิทยาศาสตร์)", path: "/science" },
            { name: "กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี (คอมพิวเตอร์)", path: "/computer" },
            { name: "กลุ่มสาระการเรียนรู้สังคมศึกษา ศาสนา และวัฒนธรรม", path: "/social" },
            { name: "กลุ่มสาระการเรียนรู้ภาษาต่างประเทศ", path: "/lang" },
            { name: "กลุ่มสาระการเรียนรู้สุขศึกษาและพลศึกษา", path: "/pe" },
            { name: "กลุ่มสาระการเรียนรู้การงานอาชีพ", path: "/home_eco" },
            { name: "กลุ่มสาระการเรียนรู้ศิลปะ", path: "/art" },
            { name: "กิจกรรมพัฒนาผู้เรียน", path: "/activity" },
            { name: "แนะแนว", path: "/guidance" },
            { name: "เจ้าหน้าที่สำนักงาน", path: "/officer" },
            { name: "ครูอัตราจ้างและพนักงานราชการ", path: "/employee" },
            { name: "พนักงานขับรถ", path: "/driver" },

        ],
    },
    {
        name: "ภาพกิจกรรม",
        path: "/activities",
    },
    {
        name: "ข่าวสาร",
        path: "/news",
    },
    {
        name: "ติดต่อเรา",
        path: "/contact",
    }
];

const kanchana = {
    name: "กลุ่มโรงเรียนกาญจนาภิเษกวิทยาลัย",
    list: [
        {
            name: "โรงเรียนกาญจนาภิเษกวิทยาลัย นครปฐม",
            path: "https://www.kjn.ac.th/"
        },
        {
            name: "โรงเรียนกาญจนาภิเษกวิทยาลัย สุราษฎร์ธานี",
            path: "https://www.kjst.ac.th/"
        },
        {
            name: "โรงเรียนกาญจนาภิเษกวิทยาลัย กระบี่",
            path: "https://www.kbs.ac.th/"
        },
        {
            name: "โรงเรียนกาญจนาภิเษกวิทยาลัย สุพรรณบุรี",
            path: "http://www.kpsp.ac.th/"
        },
        {
            name: "โรงเรียนกาญจนาภิเษกวิทยาลัย อุทัยธานี",
            path: "https://www.facebook.com/kutisuthai?mibextid=ZbWKwL"
        },
        {
            name: "โรงเรียนกาญจนาภิเษกวิทยาลัย เพชรบูรณ์",
            path: "https://kanchanapisek.ac.th/"
        },
        {
            name: "โรงเรียนกาญจนาภิเษกวิทยาลัย กาฬสินธุ์",
            path: "http://www.kanchana.ac.th/"
        },
        {
            name: "โรงเรียนกาญจนาภิเษกวิทยาลัย ชัยภูมิ",
            path: "http://www.kpch.ac.th/"
        },
        {
            name: "โรงเรียนกาญจนาภิเษกวิทยาลัย ฉะเชิงเทรา",
            path: "http://www.kch.ac.th/"
        },
        {
            name: "โรงเรียนเฉลิมพระเกียรติพระบาทสมเด็จพระเจ้าอยู่หัวภูมิพลอดุลยเดชฯ ทรงครองราชย์ครบ 50 ปี จังหวัดสกลนคร",
            path: "http://www.cpsn.ac.th/"
        }
    ]
};

const links = [
    {
        name: "ฝ่ายอำนวยการ",
        path: "https://pa-2565-thanaphat.my.canva.site/administration-department",
        image: "http://kpsp.ac.th/img/link/20240322021151%E0%B8%9D%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%AD%E0%B8%B3%E0%B8%99%E0%B8%A7%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3.gif"
    },
    {
        name: "ฝ่ายวิชาการ",
        path: "https://www.facebook.com/VichakarnKPSP",
        image: "http://www.kpsp.ac.th/img/link/20240104115300Video.gif"
    },
    {
        name: "สภานักเรียน",
        path: "https://www.facebook.com/sapakpsp",
        image: "http://www.kpsp.ac.th/img/link/20170519063345link%20sapa.jpg"
    }
];

const slideShow = [
    {
        name: "",
        path: "http://www.kpsp.ac.th/",
        image: "http://www.kpsp.ac.th/img/index_slide/20240120025746S__2768901_0.jpg"
    },
    {
        name: "",
        path: "http://www.kpsp.ac.th/",
        image: "http://www.kpsp.ac.th/img/index_slide/20240120025755S__2768902_0.jpg"
    },
    {
        name: "",
        path: "http://www.kpsp.ac.th/home.php#",
        image: "http://www.kpsp.ac.th/img/index_slide/20240820074007S__12869652.jpg"
    },
    {
        name: "",
        path: "http://www.kpsp.ac.th/",
        image: "http://www.kpsp.ac.th/img/index_slide/20240120025735S__2768899_0.jpg"
    }
];

const dailyAlert = {
    title: "เว็บไซต์นี้เป็นเพียงเว็บไซต์ทางเลือก",
    description: "เนื้อหาในเว็บไซต์นี้มาจาก http://kpsp.ac.th ไม่สามารถนำเนื้อหามาใช้อ้างอิงได้",
    // image: ""
};

export { home, navBar, kanchana, links, slideShow, dailyAlert };