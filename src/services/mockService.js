const products = [
    {
        "id": 1,
        "nombre": "Vital Power",
        "tipo": "Serum Facial",
        "detalle": "30ml",
        "precio": 2970,
        "cantidad": 10,
        "img": "/imgs/img1.jpg"
    },
    {
        "id": 2,
        "nombre": "Deep Luminous",
        "tipo": "Serum Facial",
        "detalle": "30ml",
        "precio": 2970,
        "cantidad": 10,
        "img": "/imgs/img2.jpg"
    },
    {
        "id": 3,
        "nombre": "Glow Boost",
        "tipo": "Serum Facial",
        "detalle": "30ml",
        "precio": 2080,
        "cantidad": 10,
        "img": "/imgs/img3.jpg"
    },
    {
        "id": 4,
        "nombre": "Acido Hyaluronico",
        "tipo": "Serum Facial",
        "detalle": "30ml",
        "precio": 2080,
        "cantidad": 10,
        "img": "/imgs/img4.jpg"
    },
    {
        "id": 5,
        "nombre": "Plant Power",
        "tipo": "Acondicionador",
        "detalle": "400ml",
        "precio": 2700,
        "cantidad": 10,
        "img": "/imgs/img5.jpg"
    },
    {
        "id": 6,
        "nombre": "Nutri Boost",
        "tipo": "Shampoo",
        "detalle": "400ml",
        "precio": 2700,
        "cantidad": 10,
        "img": "/imgs/img6.jpg"
    },
    {
        "id": 7,
        "nombre": "Nutri Boost",
        "tipo": "Acondicionador",
        "detalle": "400ml",
        "precio": 2700,
        "cantidad": 10,
        "img": "/imgs/img7.jpg"
    },
    {
        "id": 8,
        "nombre": "Plant Power",
        "tipo": "Shampoo",
        "detalle": "400ml",
        "precio": 2700,
        "cantidad": 10,
        "img": "/imgs/img8.jpg"
    },
    {
        "id": 9,
        "nombre": "Refrescante Diario",
        "tipo": "Toner Facial",
        "detalle": "120ml",
        "precio": 2970,
        "cantidad": 10,
        "img": "/imgs/img9.jpg"
    },
    {
        "id": 10,
        "nombre": "Balance Ph",
        "tipo": "Toner Facial",
        "detalle": "120ml",
        "precio": 2970,
        "cantidad": 10,
        "img": "/imgs/img10.jpg"
    },
    {
        "id": 11,
        "nombre": "Antioxidante Nocturno",
        "tipo": "Crema Facial",
        "detalle": "100ml",
        "precio": 1700,
        "cantidad": 10,
        "img": "/imgs/img11.jpg"
    },
    {
        "id": 12,
        "nombre": "Ultra Vital Diurna",
        "tipo": "Crema Facial",
        "detalle": "100ml",
        "precio": 1700,
        "cantidad": 10,
        "img": "/imgs/img12.jpg"
    },
    {
        "id": 13,
        "nombre": "Limpieza Profunda",
        "tipo": "Exfoliante",
        "detalle": "500ml",
        "precio": 3000,
        "cantidad": 10,
        "img": "/imgs/img13.jpg"
    },
    {
        "id": 14,
        "nombre": "Ultra Reafirmante - Coffe Berry",
        "tipo": "Crema Corporal",
        "detalle": "500ml",
        "precio": 1500,
        "cantidad": 10,
        "img": "/imgs/img14.jpg"
    },
    {
        "id": 15,
        "nombre": "Ultra Reafirmante - Ginko Biloba",
        "tipo": "Crema Corporal",
        "detalle": "500ml",
        "precio": 1500,
        "cantidad": 10,
        "img": "/imgs/img15.jpg"
    },
    {
        "id": 16,
        "nombre": "Ultra Reafirmante - Coco",
        "tipo": "Crema Corporal",
        "detalle": "500ml",
        "precio": 1500,
        "cantidad": 10,
        "img": "/imgs/img16.jpg"
    },
    {
        "id": 17,
        "nombre": "Ultra Reafirmante - Neroli",
        "tipo": "Crema Corporal",
        "detalle": "500ml",
        "precio": 1500,
        "cantidad": 10,
        "img": "/imgs/img17.jpg"
    },
    {
        "id": 18,
        "nombre": "Ultra Reafirmante - Pera",
        "tipo": "Crema Corporal",
        "detalle": "300ml",
        "precio": 1100,
        "cantidad": 10,
        "img": "/imgs/img18.png"
    },
    {
        "id": 19,
        "nombre": "Ultra Reafirmante - Palta",
        "tipo": "Crema Corporal",
        "detalle": "300ml",
        "precio": 1100,
        "cantidad": 10,
        "img": "/imgs/img19.png"
    },
    {
        "id": 20,
        "nombre": "Ultra Reafirmante - Coco",
        "tipo": "Crema Corporal",
        "detalle": "300ml",
        "precio": 1100,
        "cantidad": 10,
        "img": "/imgs/img20.png"
    },
    {
        "id": 21,
        "nombre": "Ultra Reafirmante - Neroli",
        "tipo": "Crema Corporal",
        "detalle": "300ml",
        "precio": 1100,
        "cantidad": 10,
        "img": "/imgs/img21.png"
    },
    {
        "id": 22,
        "nombre": "Protector Solar 50FPS",
        "tipo": "Crema Corporal",
        "detalle": "250ml",
        "precio": 3500,
        "cantidad": 10,
        "img": "/imgs/img22.jpg"
    },
    {
        "id": 23,
        "nombre": "Protector Solar 30FPS",
        "tipo": "Crema Corporal",
        "detalle": "250ml",
        "precio": 3500,
        "cantidad": 10,
        "img": "/imgs/img23.jpg"
    }
];

const mockService = () => {
    return (new Promise((res, rej) => {
        console.log("ConnectingMS....");
        let error = false;
        setTimeout(() => {
            if (error) {
                rej("Error")
            } else {
                res(products);
            }
        }, 1000);
    }));
}

const mockServiceDetail = (idURL) => {
    return (new Promise((res, rej) => {
        console.log("ConnectingMSD....");
        setTimeout(() => {
            let found = products.find((item)=> {
                return item.id === parseInt(idURL)})
            if (found) {
                res(found);
            } else {
                rej("Error")
            }
        }, 1000);
    }));
}

const mockServiceCategory = (categoryURL) => {
    return (new Promise((res, rej) => {
        console.log("ConnectingMSD....");
        setTimeout(() => {
            let found = products.filter((item)=> {
                return item.tipo === categoryURL})
            if (found) {
                res(found);
            } else {
                rej("Error")
            }
        }, 1000);
    }));
}

export default mockService;
export { mockServiceDetail };
export { mockServiceCategory };


