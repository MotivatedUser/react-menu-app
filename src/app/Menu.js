class MenuItem {
    constructor(
        id,
        name, 
        type,
        calories,
        price,
        image,
        disclaimer
    ) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.calories = calories;
        this.price = price;
        this.image = image;
        this.disclaimer = disclaimer;
    }
}

export default MenuItem;