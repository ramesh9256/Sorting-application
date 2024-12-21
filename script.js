const container = document.querySelector(".container");
const sorted = document.querySelector("#sort");

// foodData containing both fast foods and desserts
const foodData = [
    {
        img: "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        foodName: "Burger",
        starRating: 4.7,
        foods: ["Cheeseburger", "Chicken Burger", "Veggie Burger"],
        place: "New York",
        distance: "2.3 km",
        cost: "$8"
    },
    {
        img: "https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        foodName: "Pizza",
        starRating: 4.5,
        foods: ["Pepperoni Pizza", "Veggie Pizza", "Margherita"],
        place: "Chicago",
        distance: "3.1 km",
        cost: "$12"
    },
    {
        img: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        foodName: "French Fries",
        starRating: 4.3,
        foods: ["Classic Fries", "Cheese Fries", "Curly Fries"],
        place: "Los Angeles",
        distance: "1.7 km",
        cost: "$5"
    },
    {
        img: "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        foodName: "Hot Dog",
        starRating: 4.8,
        foods: ["Classic Hot Dog", "Chili Dog", "Veggie Hot Dog"],
        place: "Houston",
        distance: "2.8 km",
        cost: "$6"
    },
    {
        img: "https://images.pexels.com/photos/674578/pexels-photo-674578.jpeg?auto=compress&cs=tinysrgb&w=600",
        foodName: "Tacos",
        starRating: 4.6,
        foods: ["Chicken Tacos", "Beef Tacos", "Veggie Tacos"],
        place: "San Francisco",
        distance: "3.0 km",
        cost: "$7"
    },

    // Desserts Data
    {
        img: "https://images.pexels.com/photos/2955818/pexels-photo-2955818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        foodName: "Chocolate Cake",
        starRating: 4.9,
        foods: ["Dark Chocolate Cake", "Milk Chocolate Cake", "Chocolate Lava Cake"],
        place: "Seattle",
        distance: "1.5 km",
        cost: "$6"
    },
    {
        img: "https://images.pexels.com/photos/4051683/pexels-photo-4051683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        foodName: "Cheesecake",
        starRating: 4.8,
        foods: ["New York Cheesecake", "Strawberry Cheesecake", "Chocolate Cheesecake"],
        place: "Austin",
        distance: "2.2 km",
        cost: "$8"
    },
    {
        img: "https://images.pexels.com/photos/1343504/pexels-photo-1343504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        foodName: "Ice Cream",
        starRating: 4.7,
        foods: ["Vanilla Ice Cream", "Chocolate Ice Cream", "Strawberry Ice Cream"],
        place: "Chicago",
        distance: "2.8 km",
        cost: "$5"
    },
    {
        img: "https://images.pexels.com/photos/206130/pexels-photo-206130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        foodName: "Donuts",
        starRating: 4.6,
        foods: ["Chocolate Donuts", "Glazed Donuts", "Filled Donuts"],
        place: "Miami",
        distance: "1.9 km",
        cost: "$4"
    },
    {
        img: "https://images.pexels.com/photos/827516/pexels-photo-827516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        foodName: "Fruit Tart",
        starRating: 4.7,
        foods: ["Mixed Berry Tart", "Lemon Tart", "Strawberry Tart"],
        place: "San Diego",
        distance: "3.0 km",
        cost: "$6"
    },
    {
        img: "https://images.pexels.com/photos/239578/pexels-photo-239578.jpeg?auto=compress&cs=tinysrgb&w=600",
        foodName: "Macarons",
        starRating: 4.8,
        foods: ["Pistachio Macarons", "Raspberry Macarons", "Vanilla Macarons"],
        place: "Los Angeles",
        distance: "2.6 km",
        cost: "$7"
    },
    {
        img: "https://images.pexels.com/photos/1028708/pexels-photo-1028708.jpeg?auto=compress&cs=tinysrgb&w=600",
        foodName: "Cupcakes",
        starRating: 4.4,
        foods: ["Vanilla Cupcake", "Chocolate Cupcake", "Red Velvet Cupcake"],
        place: "San Francisco",
        distance: "2.5 km",
        cost: "$3"
    },

    
];

ShowData(foodData);

function ShowData(data) {
    container.innerHTML = "";
    data.forEach((element) => {
        const box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML = `
            <img src="${element.img}" alt="">
            <p class="foodName"></span>${element.foodName}</p>
            <p class="rating"><span>Rating : </span>${element.starRating}</p>
            <p class="foods"><span>Foods : </span>${element.foods.join(', ')}</p>
            <p class="place"><span>place : </span>${element.place}</p>
            <p class="distance"><span>distance : </span>${element.distance}</p>
            <p class="cost"><span>cost : </span>${element.cost}</p>
        `;
        container.appendChild(box);
    });
}

sorted.addEventListener("change", (element) => {
    let copy = [...foodData];

    // Sorting logic for different selection types
    if (element.target.value === "priceHighToLow") {
        copy.sort((a, b) => {
            const A = parseFloat(a.cost.replace("$", ""));
            const B = parseFloat(b.cost.replace("$", ""));
            return B - A;
        });
    }

    if (element.target.value === "priceLowToHigh") {
        copy.sort((a, b) => {
            const A = parseFloat(a.cost.replace("$", ""));
            const B = parseFloat(b.cost.replace("$", ""));
            return A - B;
        });
    }

    if (element.target.value === "distance") {
        copy.sort((a, b) => {
            const A = parseFloat(a.distance.replace("km", ""));
            const B = parseFloat(b.distance.replace("km", ""));
            return A - B;
        });
    }

    if (element.target.value === "rating") {
        copy.sort((a, b) => {
            const A = parseFloat(a.starRating);
            const B = parseFloat(b.starRating);
            return B - A;
        });
    }

    if (element.target.value === "foodName") {
        copy.sort((a, b) => a.foodName.localeCompare(b.foodName));
    }

    ShowData(copy);
});
