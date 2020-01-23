const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image})
const log = (text, type, date = new Date()) => ({text, type, date})
const cars = [
    car('Tesla', 'Model 3 Performance', 'Max', '2018', '+38 093 555 3698', 'images/TeslaModel3PERFORMANCE.jpg'),
    car('Tesla', 'Model X Performance', 'Cat', '2019', '+38 097 665 3488', 'images/TeslaModelXPerformance.jpg'),
    car('Nissan', 'Leaf', 'Vlad', '2018', '+38 073 594 7532', 'images/NissanLeaf.jpg'),
    car('Chevrolet', 'Bolt EV', 'Lina', '2018', '+38 050 852 8954', 'images/ChevroletBltEV.jpg')
]
new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false,
    },
    methods: {
        selectCar: function(index){
            this.car = this.filteredCars[index]
            this.selectCarIndex = index
        },
        newOrder(){
            this.modalVisibility = false
            this.logs.push(
                log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
            )
        },
        cancelOrder(){
            this.modalVisibility = false
            this.logs.push(
                log(`Cancelled order: ${this.car.name} - ${this.car.model}`, 'cancel')
            )
        },   
    },
    computed: {
        phoneBtnText(){
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filteredCars(){
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            })
        }
    },
    filters: {
         date(value) {
            return value.toLocaleString()
        }
    }
})